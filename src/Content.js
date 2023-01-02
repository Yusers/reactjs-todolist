import { useEffect, useState } from "react";

const tabs = ['posts','photos', 'comments', 'albums'];



function Content() {
    const [checked, setChecked] = useState([]);
    const [courses, setCourses] = useState(() => {
        const courses = [
    {
        name: 'HTML & CSS',
        id: 1
    },
    {
        name: 'Javascript',
        id: 2
    },
    {
        name: 'ReactJS',
        id: 3
    },
        ];
        return courses;
    })
    const [input, setInput] = useState('');

    const handleChecked = (id) => {
        const isChecked = checked.includes(id);
        if(isChecked) {
            setChecked(prev => {
                return [...prev].filter(item => item !== id);
            })
        } else {
            setChecked(prev => {
                return [...prev, id];
            })
        }
    }

    const handleSubmit = () => {
        setChecked(courses);
    }
    
    const handleAdd = () => {
        const inputArr = input.split(',');
        setCourses(prev => {
            return [...prev, {name: inputArr[0], id: Number(inputArr[1] ?? courses.length + 1)}];
        });
    }
    return (
        <div>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={"Name , " + (courses.length+1) + " this can be ignore"}
            />
            <button onClick={handleAdd}>Add</button>
            {courses.map((course) => (
                <div className="item" key={course.id}>
                    <input 
                        checked={checked.includes(course.id)}
                        id={course.id}
                        type="checkbox"
                        onChange={() => handleChecked(course.id)}
                    />
                    <label htmlFor={course.id}>{course.name}</label>
                </div>
            ))}
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Content;
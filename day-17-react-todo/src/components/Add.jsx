import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Add = () => {
    const [task,setTask] = useState({taskName : ""});

    let navigate = useNavigate()

    //using axios-post to store the data
    //using async & await also then & catch block
    const saveData = async() => {
        await axios.post("http://localhost:3000/todos",task).then(() => {
            alert('Data Saved!');
            navigate("/");
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        saveData()
    }

    return (
        <>
            <div className="container my-5">

                <form onSubmit={handleSubmit}>
                    <p className='fs-4 fw-bold fst-italic text-center'> Add Task Here  </p>
                    <div className='d-flex justify-content-around gap-4'>
                        <div className="mb-3 w-100">
                            <input type="text" className='form-control' value={task.taskName} onChange={(e) => setTask({
                                taskName:e.target.value
                            })} />
                        </div>
                        <div className="mb-3">
                            <input type="submit" value="Add" className='btn btn-dark' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Add;
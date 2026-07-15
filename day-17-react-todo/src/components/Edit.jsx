import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [task, setTask] = useState({
        taskName: ""
    })
    const navigate = useNavigate();
    // get ID 
    const { id } = useParams()

    const getTaskById = async () => {
        let resp = await axios.get("http://localhost:3000/todos/" + id);
        resp = await resp.data;
        setTask(resp)
    }

    useEffect(() => {
        getTaskById();
    }, [])

    // Update the Data

    const updateData = async () => {
        await axios.put("http://localhost:3000/todos/" + id, task).then(() => {
            alert('Task Updated ');
            navigate("/")
        }).catch(err => {
            console.log('Error ', err);

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(task);
        updateData();

    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} >
                    <p className='fs-4 fw-bold fst-italic text-center'> Edit Task </p>
                    <div className='d-flex justify-content-around gap-4'>
                        <div className="mb-3 w-100">
                            <input type="text" className='form-control' value={task.taskName} onChange={(e) => {
                                setTask({
                                    taskName: e.target.value
                                })
                            }} />
                        </div>
                        <div className="mb-3">
                            <input type="submit" value="Update" className='btn btn-dark' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Edit;
import React,{useEffect, useState} from 'react'
import Add from './Add';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [todo,setTodo] = useState([]);

    const getAllTodos = async () => {
        let resp = await axios.get("http://localhost:3000/todos")
        resp = await resp.data;
        console.log(resp);

        setTodo(resp)
    }
    useEffect(() => {
        getAllTodos()
    }, []);

    const deleteData = async (id) => {
        if (confirm('Are you sure ?')) {
            await axios.delete("http://localhost:3000/todos/" + id).then(() => {
                alert('Data Deleted')
                getAllTodos();
            }).catch(err => {
                console.log('Something wents wrong');

            })
        }

    }


  return (
    <>
        <Add />
        <div className="container">
            <table className='table text-center'>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Task Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((val , index) => {
                            return <tr key={index}>
                            <td> {val.id} </td>
                                <td> {val.taskName} </td>
                                <td>
                                    <Link className='btn btn-warning ' to={`/edit/${val.id}`}> Edit </Link>
                                    <button className='btn btn-danger mx-3' onClick={() => deleteData(val.id)}> Delete </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Dashboard;
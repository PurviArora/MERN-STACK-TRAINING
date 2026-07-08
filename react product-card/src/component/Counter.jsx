import React, {useState} from 'react'

const Counter= () => {
    const [count , setCount] = useState(1)
    const [flag , setFlag] = useState(true)
    const minus = () => {
        if (count<=1) {
            setFlag(true)
        }
        else{
            setCount(count - 1)
        }
    }

    const plus = () => {
        if (count>=5) {
            alert('You cannot add more of this item')
        }
        else{
            setCount(count + 1)
        }
    }
  return (
    <>
        {
            flag?
            <button className='btn btn-secondary' onClick={() => setFlag(false)}>
                Add
            </button>
            :
            <button className='btn btn-success'>
                <span className='mx-2' onClick={minus}> - </span>
                <span> {count} </span>
                <span className='mx-2' onClick={plus}> + </span>
            </button>
        }
    </>
  )
}

export default Counter;

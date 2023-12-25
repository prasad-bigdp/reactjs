import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Create = () =>
{
    const [formDetails, setFormDetails] = useState({
        id: 0,
        name: "",
        marks: 0
	})
	let navigate = useNavigate();
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        axios
					.post(
						"http://localhost:3000/students",
						{
							headers: {
								"Access-Control-Allow-Origin": true,
							},
						},
						formDetails,
					)
					.then((res) => {
						alert("successfully added")
						navigate("/")
					})
					.catch((err) => console.log(err))
    }
  return (
		<div>
			<h1>Create Student Details</h1>
			<form onSubmit={(e)=>handleSubmit(e)} className=' form border border-black mb-5'>
				<div className='mb-2'>
					<br />
					<input
						type='text'
						id='id'
						className=' form-control'
						onChange={(e) =>
							setFormDetails({ ...formDetails, id: e.target.value })
						}
					  placeholder='Enter you Id'
					/>
				</div>
				<div className='mb-2'>
					<br />
					<input
						type='text'
						id='name'
						className=' form-control'
						onChange={(e) =>
							setFormDetails({ ...formDetails, name: e.target.value })
						}
					  placeholder='Enter your name'
					/>
				</div>
				<div>
					<br />
					<input
						type='text'
						id='marks'
						className=' form-control mb-2'
						onChange={(e) =>
							setFormDetails({ ...formDetails, marks: e.target.value })
						}
					  placeholder='Enter your marks'
					/>
              </div>
              <button type='submit' className='btn btn-success'>Submit</button>
			</form>
		</div>
	)
}

export default Create

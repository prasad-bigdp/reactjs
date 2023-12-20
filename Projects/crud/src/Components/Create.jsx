import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Create = () =>
{
    const [formDetails, setFormDetails] = useState({
        id: 0,
        name: "",
        marks: 0
    })
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        axios.post("http://localhost:3000/students", formDetails)
            .then((res) => alert("successfully added"))
        .catch((err)=>console.log(err))
    }
  return (
		<div>
			<h1>Create Student Details</h1>
			<form onSubmit={(e)=>handleSubmit(e)}>
				<div className='mb-2'>
					<label htmlFor='id'>Enter the Id</label>
					<br />
					<input
						type='text'
						id='id'
						value={formDetails.id}
						onChange={(e) =>
							setFormDetails({ ...formDetails, id: e.target.value })
						}
					/>
				</div>
				<div className='mb-2'>
					<label htmlFor='Name'>Enter the Name</label>
					<br />
					<input
						type='text'
						id='name'
						value={formDetails.name}
						onChange={(e) =>
							setFormDetails({ ...formDetails, name: e.target.value })
						}
					/>
				</div>
				<div>
					<label htmlFor='marks'>Enter the marks</label>
					<br />
					<input
						type='text'
						id='marks'
						value={formDetails.marks}
						onChange={(e) =>
							setFormDetails({ ...formDetails, marks: e.target.value })
						}
					/>
              </div>
              <button type='submit' className='btn btn-success'>Submit</button>
			</form>
		</div>
	)
}

export default Create

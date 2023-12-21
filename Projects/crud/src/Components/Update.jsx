import React, { useEffect,useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
const Update = () =>
{
	const [formData, setFormData] = useState({
		id: 0,
		name: '',
		marks:0
	})
	let navigate = useNavigate();
	let location = useLocation();
	console.log(location)
	let params = new URLSearchParams(location.search)
	let id = params.get('Id')
	console.log(id)
	useEffect(() =>
	{
		axios
			.get(`http://localhost:3000/students/${id}`)
			.then((res) =>
			{
				console.log(res.data)
				setFormData(res.data);

			})
			.catch((err) =>
			{
				console.log(err)
			})
	}, []);
	const handleSubmit = (e) =>
	{
		e.preventDefault();
		axios.put(`http://localhost:3000/students/${id}`, formData)
			.then((res) =>
			{
				alert("successfully Updated");
				navigate('/')
			})
			.catch((err) => console.log(err));
	}
  return (
		<div>
			<h1>Update the values</h1>
			<form
				className='form border border-black m-2 p-5'
				onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor=''>Id</label>
				<input
					type='text'
					value={formData.id}
					className='form-control'
					onChange={(e) => setFormData({ ...formData, id: e.target.value })}
				/>
				<br />
				<label htmlFor=''>Name</label>
				<input
					type='text'
					value={formData.name}
					className=' form-control'
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				/>
				<br />
				<label htmlFor=''>Marks</label>
				<input
					type='text'
					value={formData.marks}
					className=' form-control'
					onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
				/>
				<br />
				<button
					type='submit'
					className='btn btn-primary'>
					{" "}
					Update{" "}
				</button>
			</form>
		</div>
	)
}

export default Update

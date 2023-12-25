import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'
const Home = () =>
{
  const [sdata, setSdata] = useState([])

    useEffect(() =>
    {
		axios.get('http://localhost:3000/students')
            .then((res) => setSdata(res.data))
        .catch((err)=>console.log(err))
    }, [])
  const handleDelete = (id) =>
  {
    console.log(id);
    let confirm = window.confirm("are you sure to delete")
    if (confirm)
    {
      axios.delete(`http://localhost:3000/students/${id}`)
        .then((res) => alert("successfully deleted"))
      .catch("deletion failed")
		window.location.reload();
    }
    
  }
  return (
		<div className=' p-5 border border-black'>
			<button className='btn btn-primary float-end'>
				<Link
					to='/Create'
					style={{ color: "white", textDecoration: "none" }}>
					Add
				</Link>
			</button>
			<table className='table table-striped border border-4 h-50 w-100 p-5'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Marks</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{sdata &&
						sdata.map((value, index) => (
							<tr key={index}>
								<td>{value.id}</td>
								<td>{value.name}</td>
								<td>{value.marks}</td>
								<td>
									<button className='btn btn-primary'>
										<Link
											to={`/Update?Id=${value.id}`}
											style={{ color: "white", textDecoration: "none" }}>
											Edit
										</Link>
									</button>
									<button
										className='btn btn-danger'
										onClick={() => handleDelete(value.id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	)
}

export default Home

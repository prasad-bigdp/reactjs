import React, { useState } from "react"
import { auth } from "./firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
	const [formDetails, setFormDetails] = useState({
		email: "",
		password: "",
    })
    const navigate= useNavigate()
	const handleSubmit = (e) => {
		e.preventDefault()
		signInWithEmailAndPassword(
			auth,
			formDetails.email,
			formDetails.password,
		)
			.then((user) => {
				console.log(user)
                alert("user SignIn successfully")
                navigate('/Account')
			})
			.catch((err) => console.log(err))
	}
	return (
		<div className=' container border border-2 border-black'>
			<form
				action=''
				className='form'
				onSubmit={handleSubmit}>
				<br />
				<label htmlFor='email'>Email</label> <br />
				<input
					type='email'
					className=' form-control'
					id='email'
					name='email'
					onChange={(e) =>
						setFormDetails({ ...formDetails, email: e.target.value })
					}
				/>
				<br />
				<label htmlFor='pwd'>Password</label> <br />
				<input
					type='password'
					className=' form-control'
					id='pwd'
					name='password'
					onChange={(e) =>
						setFormDetails({ ...formDetails, password: e.target.value })
					}
				/>
				<br />
				<button
					type='submit'
					className=' btn btn-primary'>
					SignIn
				</button>
			</form>
		</div>
	)
}

export default SignIn

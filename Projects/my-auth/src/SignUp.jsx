import React, { useState } from 'react'
import { auth } from './firebase'
import { Link} from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () =>
{
    const [formDetails, setFormDetails] = useState({
     
        email: '',
        password:''
    })
    const navigate =useNavigate()
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, formDetails.email, formDetails.password)
            .then((user) =>
            {
                console.log(user)
                alert("user registered successfully")
                navigate('/Signin')
            })
        .catch((err)=>console.log(err))
    }
  return (
		<div className=' container border border-2 border-black'>
			<p>
				Already Having an Account? <Link to='/Signin'>SignIn</Link>
			</p>
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
					Signup
				</button>
			</form>
		</div>
	)
}

export default SignUp

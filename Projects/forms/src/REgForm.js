import React, { useState } from 'react'
const REgForm = () =>
{
    const [form, setForm] = useState({
        name: '',
        email: '',
        password:''
    })
    const [Errors, setErrors] = useState({
			name: "",
			email: "",
			password: "",
		})
    const handleSubmit = (a) =>
    {
        a.preventDefault();
       console.log(a)
       
    }
    const handleInput = (e) =>
    {
        const { name, value } = e.target
        console.log(name, value)
        if (name == 'name')
        {
            if (name.trim() == '')
            {
                setErrors({...Errors,[name]:'value is required'})
               }
        }
        else if (name == 'email')
        {
            
            }
        setForm({...form,[name]:value})
    }
  

  return (
		<div>
			<form onSubmit={(e)=>handleSubmit(e)}>
				<label htmlFor='na'>Name:</label>
				<input
                  type='text'
                  name='name'
					onChange={handleInput}
					id='na'
              />
              <p>{Errors.name}</p>
				<p>{form.name}</p>
				<label htmlFor='em'>Email:</label>
				<input
                  type='email'
                  name='email'
                onChange={handleInput}
					id='em'
				/>
				<p>{form.email}</p>
				<label htmlFor='pwd'>Password:</label>
				<input
                  type='password'
                  name='password'
                onChange={handleInput}
					id='pwd'
				/>
              <p>{form.password}</p>
              <button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default REgForm

import React,{useRef,useState} from 'react'

const REg2 = () =>
{
  const inpref = useRef(null)
  const passref = useRef(null)
  const [erros, setErrors] = useState({
    email: "",
    password:""
  })
  const handleClick = (e) =>
  {
    e.preventDefault();
    let pattern = /[A-Za-z0-9]/
    console.log(inpref.current.value)
    console.log(passref.current.value)
    if (passref.current.value.length < 6)
    {
      setErrors({...erros,password:"please enter minimum 6 characters"})
    }
    if (!pattern.test(inpref.current.value))
    {
      console.log(pattern.test(inpref.current.value))
      setErrors({...erros,email:"please enter email in correct format"})
      }
    //api request

 } 
  return (
		<div
			className=' flex justify-center align-items-center'
			style={{ width: "100vw", height: "100vh" }}>
			<form className=' border border-dark h-20'>
				<label htmlFor='email'>Email:</label>
				<input
					ref={inpref}
					type='email'
					name=''
					id='email'
					className='border border-dark'
				/>{" "}
				<br />
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					ref={passref}
					className='border border-dark'
				/> <br />
				{erros.password && <p className='text-danger'>{erros.password}</p>}
				<button
					className='border border-black-200 bg-black p-2 text-white'
					onClick={handleClick}>
					click
				</button>
			</form>
		</div>
	)
}

export default REg2

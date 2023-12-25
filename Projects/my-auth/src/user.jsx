import React, { useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
const Account = () =>
{
  const [email, setEmail] = useState('')
  onAuthStateChanged(auth, (user) =>
  {
    console.log(user)
    setEmail(user.email)
  })
  const navigate =useNavigate()
  const handleSignOut = () =>
  {
    signOut(auth).then(() => alert("logout Successful"))
    navigate('/Signin')
  }

  return (
    <div>
      Email Address:{email}
      <button className='btn btn-primary' onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Account

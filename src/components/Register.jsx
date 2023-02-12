
import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { Link } from 'react-router-dom'

function Register() {
  


  return (
    <div className="login page">

<article>

<section className='heading px-5 pt-8 gap-10 items-center'>
<img src={mtnYellow} className='h-16 px-6 mx-auto' alt="" />
<h1 className='md:text-3xl text-2xl mtn-bold text-center text-white'>Yello, Welcome to MTN Metaverse Portal</h1>
</section>

<section className='create-account'>

<div className='flex justify-center items-center'>
<form className='p-7 md:p-10 flex flex-col gap-7 items-center text-xl'>

<h2 className='text-4xl mtn-bold text-center text-mtn-yellow'>Create an Account</h2>

<div className='w-full flex'>
<i className="fa-solid fa-mobile-screen rounded-l"></i>
    <input type="text" name="" className='rounded-r' placeholder='Enter MTN Number' id="" /></div>

<p className='text-center'>Already have an account? <Link to="/" className='text-mtn-yellow hover:text-white'>Sign In</Link></p>

<Link to="/verify"><button className='bg-mtn-yellow/70 text-black px-12 py-3 text-xl mtn-bold rounded-xl hover:bg-mtn-yellow'>Proceed</button></Link>
</form>
</div>

<div className="hidden avatar md:flex items-center">
<img src={avatar} alt="" />
</div>


</section>


    </article>
    </div>
  )
}

export default Register

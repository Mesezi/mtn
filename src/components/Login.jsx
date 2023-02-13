
import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { Link } from 'react-router-dom'

function Login() {
  


  return (
    <div className="login page">

<article>

<section className='heading py-5 gap-8 md:gap-2 items-center'>
<img src={mtnYellow} className='h-16 px-6 mx-auto' alt="" />
<h1 className='md:text-4xl text-3xl mtn-bold text-center text-white'>Yello, Welcome to MTN Metaverse Portal</h1>
</section>

<section className='create-account container mx-auto'>

<div className='flex justify-center items-center'>
<form className='p-7 md:p-10 flex flex-col gap-7 items-center text-xl'>

<h2 className='md:text-4xl text-3xl mtn-bold text-center text-mtn-yellow'>Log In to Portal</h2>

<div className='w-full flex'>
<i className="fa-solid fa-mobile-screen rounded-l"></i>
    <input type="text" name="" className='rounded-r' placeholder='Enter MTN Number' id="" /></div>

<p className='text-center'>Don't have an account? <Link to="/register" className='text-mtn-yellow hover:text-white'>Sign Up</Link></p>


<Link to="/home"><button className='bg-mtn-yellow/70 text-black px-12 py-3 text-xl mtn-bold rounded-xl
hover:bg-mtn-yellow'>Proceed</button></Link>
</form>
</div>

<div className="hidden avatar md:flex items-center justify-center">
<img src={avatar} alt="" />
</div>


</section>


    </article>
    </div>
  )
}

export default Login

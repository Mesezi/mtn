
import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { Link } from 'react-router-dom'

function Login() {
  


  return (
    <div className="login page">

<article>

<section className='heading pt-7 pl-3 gap-6 md:gap-2 items-center'>
<img src={mtnYellow} className='h-12 px-6 mx-auto' alt="" />
<h1 className='md:text-4xl text-3xl mtn-bold text-center text-white'>Yello, Welcome to MTN Metaverse Portal</h1>
</section>



<section className='create-account container mx-auto'>

<div className='flex justify-center items-center'>
<form className='p-7 md:p-10 flex flex-col gap-8 items-center text-xl'>
<h2 className='md:text-4xl text-3xl mtn-bold text-center text-mtn-yellow'>Log In to Portal</h2>
<div className='w-full flex'>
<i className="fa-solid fa-mobile-screen rounded-l"></i>
    <input type="text" name="" className='rounded-r' placeholder='Enter MTN Number' id="" />
</div>
<p className='text-center'>Don't have an account? <Link to="/register" className='text-mtn-yellow hover:text-white'>Sign Up</Link></p>
<Link to="/verify" className='mb-8'><button className='bg-mtn-yellow/70 text-black px-12 py-3 text-xl mtn-bold rounded-xl
hover:bg-mtn-yellow'>Proceed</button></Link>
</form>
</div>

<div className="hidden avatar md:flex relative overflow-hidden justify-center pt-10">
<img src={avatar} className='absolute object-bottom' alt="" />
</div>


</section>


    </article>
    </div>
  )
}

export default Login


import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { Link, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  const location = useLocation();

  return (

   <div className="home page container mx-auto">
<article>

<section className='flex justify-between py-5'>
  {location.pathname === '/home' ?  <img src={mtnYellow} className='h-12' alt="" />: <Link to='/home'>
  <i className="fa-solid fa-arrow-left text-xl py-2 px-4 border-2 text-mtn-yellow border-gray-500 rounded-xl w-full
         hover:border-mtn-yellow hover:text-white ease-in-out duration-300"></i>
    </Link>} 

   <div>
    <Link to='/' id='log-out' className='py-3 px-4 border-2 text-sm text-mtn-yellow mtn-bold border-gray-500 rounded-xl w-full
         hover:border-mtn-yellow hover:text-white ease-in-out duration-300 block'>Log out <i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
   </div>

</section>

   <section className='overflow-hidden py-4'>
    <div className='hidden md:flex flex-col gap-5 overflow-scroll overflow-x-hidden pb-28 pr-8 h-100'>
        <h3 className='text-xl'>Connect with your Apps</h3>

        <article className='flex flex-col gap-3 rounded-xl border-2 border-gray-500'>

        <img src={bg} className='h-36 rounded-xl' alt="" />

        <div className='px-4 pb-5 flex flex-col gap-3'> <h4 className='text-xl text-mtn-yellow'>myMTN App</h4>
        <p>Personal your experience with your avatar</p>

        <div><button className='py-3 px-4 border-2 text-black border-gray-500 bg-mtn-yellow rounded-xl
        hover:-translate-y-2 ease-in-out duration-200 hover:text-white hover:bg-mtn-yellow/70 text-sm inline'>Connect +</button></div>

        </div>
       
        </article>
        <article className='flex flex-col gap-3 rounded-xl border-2 border-gray-500'>

<img src={bg} className='h-36 rounded-xl' alt="" />

<div className='px-4 pb-5 flex flex-col gap-3'> <h4 className='text-xl text-mtn-yellow'>myMTN App</h4>
<p>Personal your experience with your avatar</p>

<div><button className='py-3 px-4 border-2 text-black border-gray-500 bg-mtn-yellow rounded-xl
hover:-translate-y-2 ease-in-out duration-200 hover:text-white hover:bg-mtn-yellow/70 text-sm inline'>Connect +</button></div>

</div>

</article>

<article className='flex flex-col gap-3 rounded-xl border-2 border-gray-500'>

        <img src={bg} className='h-36 rounded-xl' alt="" />

        <div className='px-4 pb-5 flex flex-col gap-3'> <h4 className='text-xl text-mtn-yellow'>myMTN App</h4>
        <p>Personal your experience with your avatar</p>

        <div><button className='py-3 px-4 border-2 text-black border-gray-500 bg-mtn-yellow rounded-xl
        hover:-translate-y-2 ease-in-out duration-200 hover:text-white hover:bg-mtn-yellow/70 text-sm inline'>Connect +</button></div>

        </div>
       
        </article>
    </div>

   <Outlet />

   </section>

</article>
    </div>

  )
}

export default Home

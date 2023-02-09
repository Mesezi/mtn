import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { Link } from 'react-router-dom'

function Manage() {
  
  return (

   <div className="home page">

<img src={bg} alt="" />

<article>

<section className='flex justify-between container mx-auto py-3'>
    <div>
        <Link to='/home'>
        <button className='text-color bg-gray-700/50 text-3xl px-3 py-1 rounded-lg'><i className="fa-solid fa-arrow-left-long"></i>
        </button></Link>
        
    </div>

   <div>
    <p id='log-out' className='py-2 px-4 rounded-xl text-color border-2 border-gray-500'>Log out</p>
   </div>

   </section>

   <section className='container mx-auto overflow-hidden mt-5'>
    <div className='flex flex-col gap-5 overflow-scroll overflow-x-hidden pr-4 h-100'>
        <h3 className='text-xl'>Connect with your Apps</h3>

        <article className='flex flex-col gap-3 rounded-xl border-2 border-gray-500'>

        <img src={bg} className='h-36 rounded-xl' alt="" />

        <div className='px-4 pb-5 flex flex-col gap-3'> <h4 className='text-xl text-color'>myMTN App</h4>
        <p>Personal your experience with your avatar</p>

        <div><button className='py-3 px-4 text-sm text-black rounded-xl bg-color inline'>Connect +</button></div>

        </div>
       
        </article>


        <article className='flex flex-col gap-3 rounded-xl border-2 border-gray-500'>

        <img src={bg} className='h-36 rounded-xl' alt="" />

        <div className='px-4 pb-5 flex flex-col gap-3'> <h4 className='text-xl text-color'>myMTN App</h4>
        <p>Personal your experience with your avatar</p>

        <div><button className='py-3 px-4 text-sm text-black rounded-xl bg-color inline'>Connect +</button></div>

        </div>
       
        </article>

        <article className='flex flex-col gap-3 rounded-xl border-2 border-gray-500'>

        <img src={bg} className='h-36 rounded-xl' alt="" />

        <div className='px-4 pb-5 flex flex-col gap-3'> <h4 className='text-xl text-color'>myMTN App</h4>
        <p>Personal your experience with your avatar</p>

        <div><button className='py-3 px-4 text-sm text-black rounded-xl bg-color inline'>Connect +</button></div>

        </div>
       
        </article>
    </div>

    <div className='pb-12'>
<h2 className='text-4xl mtn-bold'>Manage your avatars</h2>

<article className='bg-black/75 rounded-2xl px-16 p-8 my-8 flex gap-20'>

<div className='flex flex-wrap w-1/2'>
    <div className='flex justify-between p-8 w-full border-2 border-gray-500 rounded-xl '>
    <img src={avatar} className='h-52' alt="" />
    <div className='flex items-end'><button className='py-2 px-4 border-2 border-gray-500 text-sm text-color rounded-xl inline'>Share +</button></div>
    </div>

    <button className='py-3 px-4 border-2 text-black mtn-bold border-gray-500 bg-color rounded-xl my-8 inline-block'>Create New Avatar +</button>


</div>
</article>


    </div>

   </section>

    </article>
    </div>

  )
}

export default Manage

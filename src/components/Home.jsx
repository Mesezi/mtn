
import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { Link } from 'react-router-dom'

function Home() {
  


  return (

   <div className="home page">

<img src={bg} alt="" />

<article>

<section className='flex justify-between container mx-auto py-3'>
    <img src={mtnYellow} className='h-12' alt="" />

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

    <div className='flex flex-col gap-10 pb-12'>
<h2 className='text-4xl mtn-bold'>Y'ello, Welcome Daniel</h2>

<article className='bg-black/75 rounded-2xl px-16 p-8 flex gap-20'>
<div>
<img src={avatar} className='h-96' alt="" />
</div>

<div className='grow flex flex-wrap'>
    <div className='flex gap-5 p-8 w-full border-2 border-gray-500 rounded-xl '>
    <img src='' className='h-28 grow' alt="" />
    <div className='flex items-end'><button className='py-2 px-4 border-2 border-gray-500 text-sm text-color rounded-xl inline'>Edit +</button></div>
    </div>

    <div className='w-1/2 p-6 px-8 flex flex-col gap-4'>
        <h2 className='text-center text-2xl'>Avatars created</h2>
        <p className='text-center text-2xl'>1</p>
        <button className='py-3 px-4 border-2 text-black mtn-bold border-gray-500 bg-color rounded-xl w-full'>Customize look</button>
    </div>

    <div className='w-1/2 p-6 px-8 flex flex-col gap-4'>
        <h2 className='text-center text-2xl'>Apps connected</h2>
        <p className='text-center text-2xl'>-</p>
        <Link to="/manage"><button className='py-3 px-4 border-2 text-color mtn-bold border-gray-500 rounded-xl w-full'>Manage Avatar</button></Link>
          
    </div>

</div>
</article>

    </div>

   </section>

    </article>
    </div>

  )
}

export default Home

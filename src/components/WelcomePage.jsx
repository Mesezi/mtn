import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { Link } from 'react-router-dom'

function Welcome() {
  return (

 <div className='flex flex-col gap-10 pb-12'>
<h2 className='text-4xl mtn-bold'>Y'ello, Welcome Daniel</h2>

<article className='bg-black/75 rounded-2xl px-16 p-8 flex gap-20'>
<div className='hidden lg:block'>
<img src={avatar} className='h-[60vh]' alt="" />
</div>

<div className='grow flex flex-wrap'>
    <div className='flex gap-5 p-8 w-full border-2 justify-between border-gray-500 rounded-xl '>
    <img src={avatar} className='h-28' alt="" />
    <div className='flex flex-col gap-4'>

        <button className='py-3 px-4 border-2 text-black mtn-bold border-gray-500 bg-mtn-yellow rounded-xl w-full
        hover:-translate-y-2 ease-in-out duration-200 hover:text-white hover:bg-mtn-yellow/70'>Change Main Avatar</button>

        <button className='py-3 px-4 border-2 text-mtn-yellow mtn-bold border-gray-500 rounded-xl w-full
         hover:border-mtn-yellow hover:text-white hover:-translate-y-2 ease-in-out duration-300'>Download 
        <i className="pl-3 fa-solid fa-download"></i></button></div>
    </div>

    <div className='w-full lg:w-1/2 p-6 px-4 flex flex-col gap-4'>
        <h2 className='text-center text-2xl'>Avatars created</h2>
        <p className='text-center text-2xl'>1</p>
        <button className='py-3 px-4 border-2 text-black mtn-bold border-gray-500 bg-mtn-yellow rounded-xl w-full
        hover:-translate-y-2 ease-in-out duration-200 hover:text-white hover:bg-mtn-yellow/70'>Customize look</button>
    </div>

    <div className='w-full lg:w-1/2 p-6 px-4 flex flex-col gap-4'>
        <h2 className='text-center text-2xl'>Apps connected</h2>
        <p className='text-center text-2xl'>-</p>
        <Link to="/home/manage"><button className='py-3 px-4 border-2 text-mtn-yellow mtn-bold border-gray-500 rounded-xl w-full
         hover:border-mtn-yellow hover:text-white hover:-translate-y-2 ease-in-out duration-300'>Manage Avatar</button></Link>
          
    </div>

</div>
</article>

    </div>

  )
}

export default Welcome

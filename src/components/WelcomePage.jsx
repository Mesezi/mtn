import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { Link } from 'react-router-dom'

function Welcome() {
  return (

 <div className='flex flex-col'>
<h2 className='text-4xl mtn-bold'>Y'ello, Welcome Daniel</h2>

<article className='bg-black/75 flex gap-10 rounded-2xl p-8 my-3'>
<div className='hidden lg:flex shrink-0 px-5 items-center'>
<img src={avatar} className='h-[20rem]' alt="" />
</div>

<div className='grow flex flex-wrap'>
    <div className='flex justify-between w-full px-8 pt-3 border-2 border-gray-500 rounded-xl'>
        <div className='relative h-full w-40 overflow-hidden'>
           <img src={avatar} className='absolute' alt="" /> 
        </div>
    
    <div className='flex flex-col gap-5 py-8'>

        <button className='py-3 px-4 border-2 text-black mtn-bold text-sm border-gray-500 bg-mtn-yellow rounded-xl w-full
        hover:-translate-y-2 ease-in-out duration-200 hover:text-white hover:bg-mtn-yellow/70'>Change Main Avatar</button>

        <button className='py-3 px-4 border-2 text-mtn-yellow mtn-bold text-sm border-gray-500 rounded-xl w-full
         hover:border-mtn-yellow hover:text-white hover:-translate-y-2 ease-in-out duration-300'>Download 
        <i className="pl-3 fa-solid fa-download"></i></button></div>
    </div>

    <div className='w-full md:w-1/2 p-6 px-4 flex flex-col gap-4'>
        <h2 className='text-center text-xl'>Avatars created</h2>
        <p className='text-center text-xl'>1</p>
        <button className='py-3 px-4 border-2 text-black text-sm mtn-bold border-gray-500 bg-mtn-yellow rounded-xl w-full
        hover:-translate-y-2 ease-in-out duration-200 hover:text-white hover:bg-mtn-yellow/70'>Customize look</button>
    </div>

    <div className='w-full md:w-1/2 p-6 px-4 flex flex-col gap-4'>
        <h2 className='text-center text-xl'>Apps connected</h2>
        <p className='text-center text-xl'>-</p>
        <Link to="/home/manage"><button className='py-3 px-4 border-2 text-sm text-mtn-yellow mtn-bold border-gray-500 rounded-xl w-full
         hover:border-mtn-yellow hover:text-white hover:-translate-y-2 ease-in-out duration-300'>Manage Avatar</button></Link>
    </div>

</div>
</article>

    </div>

  )
}

export default Welcome

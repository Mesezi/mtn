import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.png'
import avatarCrop from '../assets/avatar-crop.png'
import { Link } from 'react-router-dom'

function Welcome() {
  return (

 <div className='flex flex-col'>
<h2 className='text-4xl mtn-bold'>Y'ello! Welcome Daniel</h2>

<article className='bg-black/75 flex gap-12 rounded-2xl p-7 my-3'>
<div className='hidden md:flex shrink-0 items-center'>
<img src={avatar} className='h-[28rem]' alt="" />
</div>

<div className='grow flex flex-wrap'>
    <div className='flex w-full min-h-60 flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-4 px-10 pt-3 border-2 border-gray-500 rounded-xl'>

    <div className='relative h-full w-44'>
    <img src={avatarCrop} className='object-contain absolute h-full w-full object-bottom' alt="" /> 
    </div>
    
    <div className='flex flex-col justify-center gap-7 py-8'>
        <button className='p-4 border-2 text-black mtn-bold  border-gray-500 bg-mtn-yellow rounded-xl w-full
        hover:-translate-y-2 ease-in-out duration-200 hover:text-white hover:bg-mtn-yellow/70'>Change Main Avatar</button>
        <button className='p-4 border-2 text-mtn-yellow mtn-bold  border-gray-500 rounded-xl w-full
         hover:border-mtn-yellow hover:text-white hover:-translate-y-2 ease-in-out duration-300'>Download 
        <i className="pl-3 fa-solid fa-download"></i></button>
    </div>
    
    </div>

    <div className='w-full md:w-1/2 px-4 pt-10 flex flex-col gap-3'>
        <h2 className='text-center text-xl'>Avatars created</h2>
        <p className='text-center text-2xl mb-4'>1</p>
        <button className='p-4 border-2 text-black  mtn-bold border-gray-500 bg-mtn-yellow rounded-xl w-full
        hover:-translate-y-2 ease-in-out duration-200 hover:text-white hover:bg-mtn-yellow/70'>Customize look</button>
    </div>

    <div className='w-full md:w-1/2 px-4 pt-10 flex flex-col gap-3'>
        <h2 className='text-center text-xl'>Apps connected</h2>
        <p className='text-center text-2xl mb-4'>-</p>
        <Link to="/home/manage"><button className='p-4 border-2  text-mtn-yellow mtn-bold border-gray-500 rounded-xl w-full
         hover:border-mtn-yellow hover:text-white hover:-translate-y-2 ease-in-out duration-300'>Manage Avatar</button></Link>
    </div>

</div>
</article>

    </div>

  )
}

export default Welcome

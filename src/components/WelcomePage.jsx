import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { Link } from 'react-router-dom'

function Welcome() {
  return (

 <div className='flex flex-col'>
<h2 className='text-5xl mtn-bold'>Y'ello, Welcome Daniel</h2>

<article className='bg-black/75 flex gap-10 md:max-h-[30rem] rounded-2xl p-8 my-8 overflow-scroll overflow-x-hidden'>
<div className='hidden lg:flex px-10 items-center'>
<img src={avatar} className='h-80' alt="" />
</div>

<div className='grow flex flex-wrap'>
    <div className='flex gap-5 p-8 w-full border-2 justify-between border-gray-500 rounded-xl '>
    <img src={avatar} className='h-28' alt="" />
    <div className='flex flex-col gap-5'>

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

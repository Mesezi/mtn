import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { Link } from 'react-router-dom'

function Manage() {
  
  return (

    <div className='manage'>
<h2 className='text-4xl mtn-bold'>Manage your avatars</h2>

<section className='bg-black/75 rounded-2xl p-8 my-8'>

<article className=''>
  <div className='flex flex-col pt-5 px-5 w-full border-2 border-gray-500 rounded-xl '>

    <div className='flex justify-end'>
      <button className='relative tooltip'><i className="fa-solid text-4xl text-mtn-yellow fa-ellipsis"></i>
      <span className='absolute top-10 left-0 px-4 py-3 bg-red-100 text-red-800 w-max rounded-xl flex items-center gap-3'>
        <i className="fa-regular text-lg fa-trash-can"></i> Delete Avatar </span></button>
    </div>

    <div className='flex md:justify-between gap-5 flex-wrap justify-between'>
    <div className='relative h-44 w-40 overflow-hidden'>
           <img src={avatar} className='absolute' alt="" /> 
        </div>
    <div className='flex items-end mb-5'><button className='py-3 px-4 border-2 text-mtn-yellow mtn-bold border-gray-500 rounded-xl w-full
         hover:border-mtn-yellow hover:text-white ease-in-out duration-300 inline'>Edit
      <i className="pl-3 fa-solid fa-pencil"></i>
     </button>
     </div>
    </div>
</div>



</article>

<div>
<Link to='/new-avatar' className='py-3 px-4 border-2 text-black mtn-bold border-gray-500 bg-mtn-yellow rounded-xl mt-8 inline-block
        hover:-translate-y-2 ease-in-out duration-200 hover:text-white hover:bg-mtn-yellow/70'>Create New Avatar +</Link>
</div>

</section>




    </div>


  )
}

export default Manage

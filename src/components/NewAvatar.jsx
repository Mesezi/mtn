import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { Link } from 'react-router-dom'

function NewAvatar() {
  
  return (

    <div className='new-avatar px-3'>

<section className='container mx-auto px-3 mt-12 border-2 py-5 rounded-[30px] border-gray-700 bg-black/70'>
    <div className='flex justify-between text-3xl mtn-bold items-center px-5 py-3 border-b-2 border-gray-700'>
        <h3>Choose an Avatar</h3>
    <Link to='/home/manage'>
    <i className="fa-solid fa-xmark text-2xl"></i>
    </Link>

        </div>

        <div className='grid gap-12 grid-cols-1 md:grid-cols-3 p-5'>

<article className='flex flex-col gap-3 text-2xl p-5 h-56 justify-center items-center bg-mtn-yellow rounded-3xl
 shadow-white shadow-lg hover:text-black'>
<i className="fa-solid fa-plus"></i>
<p className='text-center'>Create a new <br />
 Avatar</p>
</article>

<article className='flex justify-between border-2 p-5 rounded-3xl mtn-bold border-gray-500'>
<div className='flex flex-col gap-6 justify-end items-center'>
    <img src={mtnYellow} className='h-12' alt="" />
    <i className="fa-regular fa-circle-dot text-mtn-yellow text-3xl hover:text-white"></i>
</div>
<img src={avatar} className='h-44 mt-auto' alt="" />
</article>

<article className='flex justify-between border-2 p-5 rounded-3xl mtn-bold border-gray-500'>
<div className='flex flex-col gap-6 justify-end items-center'>
    <img src={mtnYellow} className='h-12' alt="" />
    <i className="fa-regular fa-circle-dot text-mtn-yellow text-3xl hover:text-white"></i>
</div>
<img src={avatar} className='h-44 mt-auto' alt="" />
</article>

        </div>

</section>
    </div>


  )
}

export default NewAvatar

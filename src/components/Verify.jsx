
import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Verify() {
  
useEffect(()=>{
const code = document.querySelectorAll('.otp-code')

code.forEach((el, index)=>{

el.addEventListener('keyup',()=>{

    if(el.value.length){
   try{
     el.style.backgroundColor = '#ffcc03'
        code[index+1].focus()
   }    
   catch{
    console.log('error')
   }
   
    }
})

})

}, [])




  return (
    <div className="login page">
<article>
<section className='heading pt-7 pl-3 gap-6 md:gap-2 items-center'>
<img src={mtnYellow} className='h-12 px-6 mx-auto' alt="" />
<h1 className='md:text-4xl text-3xl mtn-bold text-center text-white'>Yello, Welcome to MTN Metaverse Portal</h1>
</section>




<section className='verify-account container mx-auto'>
<div className='flex justify-center items-center'>
<form className='p-7 md:p-10 flex flex-col gap-7 items-center text-xl'>
<h2 className='text-4xl mtn-bold text-center text-mtn-yellow'>Create an Account</h2>
<p className='mtn-bold text-2xl text-center'>Enter your Verification Code</p>
<p className='text-center'>We sent a verification code to <br /> 
09020****05</p>

<div className='flex justify-evenly w-full px-4'>
    <input className='otp-code' maxLength="1" type="text" name="" id="" />
    <input className='otp-code' maxLength="1" type="text" name="" id="" />
    <input className='otp-code' maxLength="1" type="text" name="" id="" />
    <input className='otp-code' maxLength="1" type="text" name="" id="" />
</div>

<Link to="/home"><button className='bg-mtn-yellow/70 text-black px-12 py-3 text-xl mtn-bold rounded-xl hover:bg-mtn-yellow'>Verify-OTP</button></Link>

<p>Didn't receive code? <button className='text-mtn-yellow hover:text-white'>Resend Code</button></p>
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

export default Verify


import bg from '../assets/Sign.png'
import mtnYellow from '../assets/MTN-yellow.png'
import avatar from '../assets/avatar.avif'
import { useEffect } from 'react'

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

function otpClick(current,nextInput){

    if(current.value.length === 1){
      document.getElementById(nextInput).focus();
    }
  }




  return (
    <div className="login page">

<img src={bg} alt="" />

<article>

<section className='heading px-5 pt-8 gap-10 items-center'>
<img src={mtnYellow} className='h-16 px-6' alt="" />
<h1 className='text-4xl mtn-bold text-center'>Yello, Welcome to MTN Metaverse Portal</h1>
</section>

<section className='verify-account'>

<div className='flex justify-center items-center'>
<form className='p-10 flex flex-col gap-7 items-center text-lg'>

<h2 className='text-4xl mtn-bold text-center text-color'>Create an Account</h2>

<p className='mtn-bold text-2xl'>Enter your Verification Code</p>

<p className='text-center'>We sent a verification code to <br /> 
09020****05</p>

<div className='flex justify-evenly w-full px-4'>
    <input className='otp-code' maxLength="1" type="text" name="" id="" />
    <input className='otp-code disbale' maxLength="1" type="text" name="" id="" />
    <input className='otp-code disable' maxLength="1" type="text" name="" id="" />
    <input className='otp-code disable' maxLength="1" type="text" name="" id="" />
</div>


<button className='bg-color text-black px-12 py-3 text-xl mtn-bold rounded-xl'>Verify-OTP</button>

<p>Didn't receive code? <span className='text-color'>Resend Code</span></p>
</form>
</div>

<div className="avatar flex items-center">
<img src={avatar} alt="" />
</div>


</section>


    </article>
    </div>
  )
}

export default Verify

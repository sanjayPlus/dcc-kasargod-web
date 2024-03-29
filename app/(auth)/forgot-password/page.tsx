"use client"
import MobileContainer from '@/components/MobileContainer'
import OTPInput from '@/components/OTPInput'
import SERVER_URL from '@/config/SERVER_URL'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { MdArrowBackIosNew, MdOutlineMailOutline } from 'react-icons/md'

function ForgotPassword() {
    const [otp, setOtp] = useState(0);
    const [email, setEmail] = useState("");
    const [otpState, setOtpState] = useState(false);
    const router = useRouter()
    const handleOTPVerification = (OTP: any) => {
        // Implement your OTP verification logic here
        setOtp(OTP);
    };
    const handleEmailSubmit = () => {
            if(!email){
                toast.error("Please enter your email");
                return;
            }
            try {
                axios.post(SERVER_URL + '/user/forgotPassword', {
                    email: email
                }).then((res) => {
                    if(res.status === 200){
                        setOtpState(true);
                    }else{
                        toast.error("User not found");
                    }

                }).catch((err) => {
                    toast.error("user not found");
                })
            } catch (error) {
                console.log(error);
                toast.error("Error sending OTP");
            }
    }
    const handleVerifyPassword = () => {
        if(!otp){
            toast.error("Please enter OTP");
            return;
        }
       
            axios.post(SERVER_URL + '/user/verifyForgotOTP', {
                email: email,
                otp: Number(otp)
            }).then((res) => {
                if(res.status === 200){
                    toast.success("OTP Verified successfully");
                    router.push("/change-password");
                    localStorage.setItem("token", res.data.token);
                }
            }).catch(()=>{
                toast.error("Error verifying OTP");
            })
      
    }
    return (
        <>
            <MobileContainer>
                <div className='w-full h-full gap-2 flex flex-col relative' style={{ backgroundImage: "url('/images/bg_main.jpg')", backgroundSize: "cover"  }}>
                <MdArrowBackIosNew className='text-xl cursor-pointer absolute top-8 left-8 top-text' onClick={() => router.back()} />
                    <div className='w-full h-16 flex justify-center items-center mt-32 mb-9'>
                        <img src="/images/imagecontri.png" alt="" className='w-24' />
                    </div>
                    <div className='flex-1 justify-center items-center bg-neutral-900 rounded-t-3xl   p-6 '>
                        <div className="input-container pt-2 pb-3 flex flex-col w-full justify-center items-center">

                            {
                                !otpState ? <>
                                    <div style={{ width: "95%", height: "50px" }} className=" rounded-lg flex justify-start items-center border border-white/20 p-5">
                                        <MdOutlineMailOutline size={24} color='white' />
                                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className='bg-transparent border-none outline-none text-white  w-full' />
                                    </div>

                                </> : <>

                                    <OTPInput length={6} onVerify={handleOTPVerification} />
                                </>
                            }

                        </div>
                        {
                            !otpState ? <>
                                <div className='w-full flex justify-center items-center '>

                                    <button className='bg-white text-blue-700 w-64 text-xl py-2 rounded-xl font-semibold' onClick={handleEmailSubmit}>Send OTP</button>
                                </div>

                            </> : <>

                                <div className='w-full flex justify-center items-center my-5'>

                                    <button className='bg-amber-500 text-white w-64 text-xl py-2 rounded-xl font-semibold' onClick={handleVerifyPassword}>Submit</button>
                                </div>
                            </>
                        }



                    </div>
                </div>

            </MobileContainer>
        </>
    )
}

export default ForgotPassword
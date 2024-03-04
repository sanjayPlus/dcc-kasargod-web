"use client"
import MobileContainer from '@/components/MobileContainer'
import { useRouter } from 'next/navigation'

import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'

function Disclaimer() {
    const router = useRouter()
    return (
        <>
            <MobileContainer>
                <div className="disclaimer w-full min-h-screen flex flex-col justify-start items-center relative" style={{ backgroundImage: "url('images/backimg.jpeg')", backgroundSize: "cover" }}>
                    <MdArrowBackIosNew className='text-xl cursor-pointer absolute top-5 left-5 top-text' onClick={() => router.back()} />
                    <h1 className="text-3xl font-bold text-center mt-14 mb-8 top-text">Disclaimer</h1>

                    <div className="disclaimer-container w-[96%] flex flex-col justify-center items-center bg-white shadow-lg p-2 rounded-xl mb-4">
                        <p className='text-sm p-2'>Welcome to the SADHBHAVANA  mobile application. We thank you for sparing your valuable time for using SADHBHAVANA . Please read this disclaimer carefully before using our app. By using this application, you agree to the terms and conditions outlined below.<br/><br/>Should you have any reservations about the following terms set out for the app, you are free to exit and uninstall the appThe information you provide during the sign-up process, including your name, address, Aadhar number, blood group, email, and password, will be used for account creation and verificationpurposes. Personal information, including your name, phone number, email, and blood group, may be stored and used for account management.<br/><br/>Please note that SADHBHAVANA  aims to maintain the security and privacy of your personal information. Your contributions are used to support our initiatives. If you have any concerns or questions regarding this application or your data, please contact us through the provided contact channels. SADHBHAVANA  reserves the right to update this disclaimer as needed to reflect changes in the app's functionality or policies. Users are encouraged to review this disclaimer periodically for any updates or changes.</p>
                    </div>
                </div>
            </MobileContainer>
        </>
    )
}

export default Disclaimer
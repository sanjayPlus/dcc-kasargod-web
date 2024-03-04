"use client"
import BottomNav from '@/components/BottomNav'
import MobileContainer from '@/components/MobileContainer'
import SERVER_URL from '@/config/SERVER_URL'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { FaHeart } from "react-icons/fa";
import './gallery.css'

function Gallery() {
    const router = useRouter();
    const [gallery, setGallery] = useState<any>([]);
    const [likes, setLikes] = useState<any>([]);
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/login')
        }
        axios.get(SERVER_URL + '/user/protected', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        }).catch((error) => {
            router.push('/login')
            localStorage.removeItem('token')
        })
        axios.get(SERVER_URL + '/user/gallery').then((response) => {
            setGallery(response.data)
        });

        axios.get(SERVER_URL + '/user/gallery-likes', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        }).then((response) => {
            setLikes(response.data)
        })

    }, []);
    const handleSetLike = () => {
        axios.get(SERVER_URL + '/user/gallery-likes', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        }).then((response) => {
            setLikes(response.data)
        })

    }
    const addLike = (id: any) => {
      //add if no id else remove
      
        axios.post(SERVER_URL + '/user/add-like-to-image', { imageId: id }, {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        }).then((response) => {
            if (response.status === 200) {
                handleSetLike()
            }
        }).catch((error) => {
            axios.post(SERVER_URL + '/user/remove-like-from-image', { imageId: id }, {
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }
            }).then((response) => {
                if (response.status === 200) {
                    handleSetLike()
                }
            })
        })
    }


    return (
        <>
            <MobileContainer>
                <div className="galler-container w-full  flex flex-col justify-start items-center relative" style={{ backgroundImage: "url('images/backimg.jpeg')", backgroundSize: "cover" }}>
                    <MdArrowBackIosNew className='text-xl cursor-pointer absolute top-5 left-5 top-text' onClick={() => router.back()} />
                    <h1 className='text-black d3 text-2xl font-bold text-center my-6 top-text'>Gallery</h1>
                    <div className='w-80 flex flex-col justify-center items-center pt-1 rounded-md  pb-16'>
                        {
                            gallery.map((item: any, index: any) => (
                                <>
                                    <div className="galery-card w-[86%] flex flex-col justify-center items-center bg-white shadow-lg p-5 rounded-xl my-2" key={index}>
                                        <div className="gallery-image w-[260px] h-[320px] relative" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                                            <div className='text-xl absolute bottom-2 right-3 w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer' onClick={() => addLike(item._id)} >
                                               <div className='bg-zinc-500 rounded-3xl w-10 flex items-center justify-center h-10'>
                                            
                                            
                                                <FaHeart  size={18}   className= {likes?.find((like: any) => like._id === item._id) ? `text-red-500`  : `text-white`}  />
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className='text-xl font-semibold my-2'>{item.name}</h3>
                                        <p className='text-sm'>{item.description}</p>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
                <BottomNav activeItem="gallery" />
            </MobileContainer>
        </>
    )
}

export default Gallery
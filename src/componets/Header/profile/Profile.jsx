import React, { useState } from "react";
import Swal from "sweetalert2";
import { BiChevronUp , BiChevronDown } from "react-icons/bi";
import profile from "../../../img/profile.jpeg";

export default function Profile () {

    const [setProfileOpen, isProfileOpen ] = useState(false);

    return (
        <div className="flex flex-row ml-9 cursor-pointer" onClick={() => setProfileOpen((prev) => !prev)}>
                            <img src={profile} alt="logo" className="w-12 h-12 rounded-2xl"></img>
                                <div className="text-left pt-1.5 pl-3">
                                    <div className="text-sm">Muhammad Rafael</div>
                                    <div className="text-[0.7rem] text-gray-400">Admin</div>
                                </div>
                       {!isProfileOpen ? (
                            <BiChevronDown className='ml-2 mt-3 text-lg'/>
                       ) : (
                            <BiChevronUp className='ml-2 mt-3 text-lg'/>
                       )}
                       {isProfileOpen && (
                            <div className='bg-white px-8 py-12 absolute flex flex-col top-28 right-6 shadow-inner'>
                                <button className='px-14 border border-red-500 rounded-2xl text-red-500 hover:bg-red-500 hover:text-white text-lg'
                                    onClick={({logOut}) => {
                                        return(
                                            (!logOut 
                                             ? Swal.fire ({ 
                                                title: 'Keluar?',
                                                type: 'warning',
                                                icon: 'info',
                                                showCancelButton: true,
                                                confirmButtonColor: 'sky',
                                                confirmButtonText: 'Ya',
                                                cancelButtonColor: 'red',
                                                cancelButtonText: 'Batal'
                                            })
                                             : '')
                                        )
                                    }}>
                                    Keluar
                                </button>
                            </div>
                       )}
            </div>
    )
}

import React from 'react';
import profile from '../../img/profile.jpeg';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { BiSearch , BiBell , BiChevronDown, BiChevronUp } from 'react-icons/bi';

export default function DashboardHeader () {

    const [ isProfileOpen , setProfileOpen ] = useState(false);
    return ( 
            <div className='flex pt-12 h-24 items-center mb-28'>
                <div className='text-3xl pr-8 font-bold'>
                    Dashboard
                </div>
                <form>   
                    <div class='relative'>
                        <div class="absolute right-0 flex items-center pr-4 inset-y-0 pointer">
                            <div class="w-6 h-6 text-gray-300 pt-1 cursor-pointer"><BiSearch Bi-9px/></div>
                        </div>
                        <input type="text" class="border border-gray-300 text-gray-900 text-sm rounded-3xl  pr-12 pl-6 py-3 w-80" placeholder="Cari di Dashboard"></input>
                    </div>
                </form>
                    <div class='mr-3 ml-8'>
                            <div class=" border border-gray-300 px-4 py-2 rounded-3xl cursor-pointer flex flex-row relative">
                                <div className='pr-2 text-lg'><BiBell/></div>
                                <div class='text-sm'>Notifikasi</div>
                                    <div class='absolute top-0 right-0 bg-red-500 rounded-full p-1.5'></div>
                            </div>
                    </div>
                    <select className=''>
                        <option>Hari Ini</option>
                        <option>Bulan Ini</option>
                    </select>
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
                </div>

)}
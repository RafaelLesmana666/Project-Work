import React from 'react';
import gradasi from '../img/gradasi.svg';
import people from '../img/people.svg';
import {BiLockAlt, BiUser} from 'react-icons/bi';
export default function Login(){
    return(
        <>
            <div>
                <img class="z-0 relative left-36" src={people} alt={people}></img>
                <img src={gradasi} alt={gradasi} class="z-1 absolute bottom-0"></img>
            </div>
            <div class="absolute right-60 top-32">
                    <p class="text-[#107BDE] leading-12 text-3xl font-semibold text-left mb-1">Selamat Datang!</p>
                    <p class="text-[#8B9AAC] text-lg">Ada banyak peminjam yang menunggumu</p>
                    <div class="mt-6 relative">
                        <div className="absolute left-0 flex items-center pl-3 inset-y-0 pointer">
                            <div className="w-6 h-6 text-gray-400 pt-1 cursor-pointer flex items-center text-lg">
                                <div className='mr-2'>
                                    <BiUser/>
                                </div>
                              <span>|</span>
                            </div>
                        </div>
                            <input placeholder="username" class="pl-12 pr-2 py-3 w-full border rounded-lg"></input>
                    </div>
                    <div class="mt-6 relative">
                        <div className="absolute left-0 flex items-center pl-3 inset-y-0 pointer">
                            <div className="w-6 h-6 text-gray-400 pt-1 cursor-pointer flex items-center text-lg">
                                <div className='mr-2'>
                                    <BiLockAlt/>
                                </div>
                                <span>|</span>
                            </div>
                        </div>
                            <input placeholder="password" id="password" type="password" class="pl-12 pr-2 py-3 w-full border rounded-lg"></input>
                    </div>
                    <div class="mt-8">
                        <button type="submit" href="/Dashboard" class="bg-blue-500 rounded-lg py-3 w-full text-white">Log In</button>
                    </div>
            </div>
        </>
)}
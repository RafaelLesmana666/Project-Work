import React, {useState} from "react";
import profile from '../../img/profile.jpeg';
import { BiChevronDown , BiSearch , BiFilterAlt , BiChevronUp} from "react-icons/bi";
import Swal from "sweetalert2";

const Header = (props) => {
    const [ isProfileOpen , setProfileOpen ] = useState(false);
    return (
          <div className='flex flex-row mb-6 w-full'>
            <div>
                <div className="font-bold text-2xl mt-12 mb-10">
                    {props.title}
                </div>
                <div className="flex">
                    <form>   
                        <div className='relative'>
                            <div className="absolute right-0 flex items-center pr-4 inset-y-0 pointer">
                                <div className="w-6 h-6 text-gray-300 pt-1 cursor-pointer">
                                    <BiSearch/>
                                </div>
                            </div>
                                <input type="text" className="border border-gray-300 text-gray-900 text-sm rounded-3xl pr-12 pl-6 py-2 w-80" placeholder="Cari di Dashboard"></input>
                        </div>
                    </form>
                    <div className='ml-4'>
                        <div className="border border-gray-300 px-6 py-2 rounded-3xl cursor-pointer flex flex-row relative items-center">
                            <div className='pr-2 text-lg'>
                                <BiFilterAlt/>
                            </div>
                            <div className='text-sm'>Filter</div>
                        </div>
                    </div>
                </div>
             </div>
             <div className="absolute top-10 right-7 z-0">
                <div className="flex flex-row ml-[85px] cursor-pointer" onClick={() => setProfileOpen((prev) => !prev)}>
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
                            <div className='bg-white px-8 py-12 absolute flex flex-col top-16 right-6 shadow-inner z-10'>
                                <button className='px-14 border border-red-500 rounded-2xl text-red-500 hover:bg-red-500 hover:text-white text-lg'
                                    onClick={({logOUt}) => {
                                        return(
                                            (!logOUt 
                                             ? Swal.fire ({ 
                                                title: 'Keluar ?',
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
                <div className="flex flex-row items-center pt-6">
                    <div className='mr-4 cursor-pointer'>
                            <div className="border border-gray-300 px-6 py-2 rounded-3xl cursor-pointer flex flex-row relative">
                                <div className='text-sm'>Print Report</div>
                            </div>
                    </div>
                    <div className='mr-4 cursor-pointer'>
                            <button className="text-white bg-blue-600 px-6 py-1.5 rounded-3xl cursor-pointer flex flex-row relative items-center">
                                <div className='text-sm'>Peminjaman</div>
                                <div className='pl-2 text-xl'>+</div>
                    </button>
                    </div>
                </div>
             </div>
          </div>
    )
}

export default Header;
import logo from "../../img/logo.png";
import {NavLink, Link} from "react-router-dom";
import { useState } from "react";
import { BiCategory , BiTime , BiBook , BiUserPlus, BiChevronDown, BiChevronUp} from 'react-icons/bi'; 
import Swal from "sweetalert2";


export default function Sidebar () {

    const [SubmenuHistoryOpen, setSubmenuHistoryOpen] = useState(false);
    const [SubmenuBarangOpen, setSubmenuBarangOpen] = useState(false);

    const History = [
        {
          title: "History",
          icon: <BiTime/>,
          submenu: true,
          submenuItems: [
            { title: "Peminjaman", Link: "/Peminjaman"},
            { title: "Permintaan", Link: "/Permintaan"}
          ]
        }
    ];
    const Barang = [
        {
          title: "Daftar Barang",
          icon: <BiBook/>,
          submenu: true,
          submenuItems: [
            { title: "Inventaris", Link: "/Inventaris"},
            { title: "Non-Inventaris", Link: "/NonInventaris" }
          ]
        }
    ];
    return (
        <div className="h-fullscreen border-r border-gray-50 px-8 bg-gray-100 mr-12 transition-all ">
            <Link to="/" className="flex flex-row pt-8 pb-28 items-center">
                    <img src={logo} alt="logo" className="w-18 h-14 pr-3"></img>
                        <div className="text-left">
                            <div className="text-lg text-blue-600 font-semibold">Inventaris</div>
                            <div className="text-[0.7rem] text-gray-400">SMK Wikrama bogor</div>
                        </div>
            </Link>
            <ul className="text-left pb-28 text-gray-500 ml-2">
                    <NavLink to="/" className={({isActive}) => {
                      return(  
                        (!isActive
                            ? "pb-6 flex flex-row items-center hover:text-blue-400"
                            : "pb-6 flex flex-row items-center text-blue-400"
                          )
                      );
                    }}><BiCategory className="text-lg mr-2"/>Dashboard</NavLink>
                    {History.map((History) => (
                        <div className="pb-6">
                          <NavLink className={({isActive}) => {
                            return(
                              (!isActive
                                ? "flex flex-row items-center hover:text-blue-400"
                                : "flex flex-row"
                                )
                            );
                          }} 
                        onClick={() => setSubmenuHistoryOpen(!SubmenuHistoryOpen)}>
                            <span className="text-lg mr-1.5">{History.icon}</span>
                            <span>{History.title}</span>
                            {History.submenu && !SubmenuHistoryOpen ? (
                                <BiChevronDown className="pt-0.5 pl-1 text-2xl"/>
                            ) : (
                              <BiChevronUp className="pt-0.5 pl-1 text-2xl"/>
                            )}
                          </NavLink>
                          {History.submenu && SubmenuHistoryOpen && (
                            <ul className="pt-2 ">
                                {History.submenuItems.map((submenuItems, index) => (
                                       <Link to={submenuItems.Link} key={index} className='flex pl-6 pb-2 pt-1 cursor-pointer hover:text-blue-400'>
                                         {submenuItems.title}
                                        </Link>
                                ))}
                            </ul>
                          )}
                        </div>
                    ))}
                    {Barang.map((Barang) => (
                        <div className="pb-6">
                          <NavLink className="hover:text-blue-400 cursor-pointer flex flex-row items-center" onClick={() => setSubmenuBarangOpen(!SubmenuBarangOpen)}>
                            <span className="text-lg mr-1.5">{Barang.icon}</span>
                            <span>{Barang.title}</span>
                            {Barang.submenu && !SubmenuBarangOpen 
                            ?(
                                <BiChevronDown className="pt-0.5 pl-1 text-2xl"/>
                            ) : (
                              <BiChevronUp className="pt-0.5 pl-1 text-2xl"/>
                            )}
                          </NavLink>
                          {Barang.submenu && SubmenuBarangOpen && (
                            <ul className="pt-2">
                                {Barang.submenuItems.map((submenuItems, index) => (
                                  <Link to={submenuItems.Link} key={index}>
                                    <li key={index} className='pl-6 pb-2 pt-1 cursor-pointer hover:text-blue-400'>
                                        {submenuItems.title}
                                    </li>
                                  </Link>
                                ))}
                            </ul>
                          )}
                        </div>
                    ))}
                    <NavLink to='/tambah' className={({isActive})  => {
                      return(  
                        (!isActive
                            ? "pb-6 flex flex-row items-center hover:text-blue-400"
                            : "pb-6 flex flex-row items-center text-blue-400"
                          )
                      );
                      }}><BiUserPlus className="text-xl mr-1.5"/>
                      Tambah User
                    </NavLink>
                </ul>
        </div>
    )
}
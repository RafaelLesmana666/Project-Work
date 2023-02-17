import React from 'react';
import {BiShare, BiTime, BiWrench,} from 'react-icons/bi';
import { Chart } from './chart';

export default function Dashboard () {
    return (
        <div>
            <div class="flex flex-row gap-6 items-center h-8 cursor-pointer mb-24">
                <div class="w-60 h-36 bg-gray-100 rounded-xl">
                    <div class="flex flex-row pl-5 pt-5">
                        <div class="bg-blue-500 w-11 h-10 rounded">
                            <div class="text-white text-2xl pl-2 pt-2"><BiShare/></div>
                        </div>
                        <div className="text-left pt-1.5 pl-3">
                                <div className="text-[0.7rem] text-gray-400">Hari ini</div>
                                <div className="text-sm">Dipinjamkan</div>
                            </div>
                    </div>
                    <div class='flex pt-6 pl-20'>
                        <div class="pr-1 text-3xl">00</div>
                        <div class="text-sm pt-3">Barang</div>
                    </div>
                </div>
                <div class="w-60 h-36 bg-gray-100 rounded-xl">
                    <div class="flex flex-row pl-5 pt-5">
                        <div class="bg-blue-500 w-11 h-10  items-center rounded">
                            <div class="text-white text-2xl pt-2 pl-2"><BiTime/></div>
                        </div>
                        <div className="text-left pt-1.5 pl-3">
                                <div className="text-[0.7rem] text-gray-400">Hari ini</div>
                                <div className="text-sm">Dalam Peminjaman</div>
                            </div>
                    </div>
                    <div class='flex pt-6 pl-20'>
                        <div class="pr-1 text-3xl">00</div>
                        <div class="text-sm pt-3">Barang</div>
                    </div>
                </div>
                <div class="w-60 h-36 bg-gray-100 rounded-xl">
                    <div class="flex flex-row pl-5 pt-5">
                        <div class="bg-blue-500 w-11 h-10 rounded">
                            <div class="text-white text-2xl pl-2 pb-2 rotate-180"><BiShare/></div>
                        </div>
                        <div className="text-left pt-1.5 pl-3">
                                <div className="text-[0.7rem] text-gray-400">Hari ini</div>
                                <div className="text-sm">Dikembalikan</div>
                            </div>
                    </div>
                    <div class='flex pt-6 pl-20'>
                        <div class="pr-1 text-3xl">00</div>
                        <div class="text-sm pt-3">Barang</div>
                    </div>
                </div>
                <div class="w-60 h-36 bg-gray-100 rounded-xl">
                    <div class="flex flex-row pl-5 pt-5">
                        <div class="bg-blue-500 w-11 h-10 rounded">
                            <div class="text-white text-2xl pt-2 pl-2"><BiWrench/></div>
                        </div>
                        <div className="text-left pt-1.5 pl-3">
                                <div className="text-[0.7rem] text-gray-400">Saat ini</div>
                                <div className="text-sm text-red-500">Barang Rusak</div>
                            </div>
                    </div>
                    <div class='flex pt-6 pl-20'>
                        <div class="pr-1 text-3xl">00</div>
                        <div class="text-sm pt-3">Barang</div>
                    </div>
                </div>
            </div>
            <div class='flex'>
                <div class="bg-gray-100 w-fit pr-10 rounded-lg">
                    <div class="pt-4 pl-9"> 
                        <div class="text-gray-400 text-sm pb-1">Saat ini</div>
                        <div>Status Terbaru</div>
                    </div>
                        <table class="border-separate border-spacing-x-10 border-spacing-y-4 text-left w-fit h-fit">
                            <thead class="text-sm">
                                <tr>
                                    <th>No.</th>
                                    <th>Nama Peminjam</th>
                                    <th>Daftar Barang</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Muhammad Rafael Mulya</td>
                                    <td>Pulpen,Alat Tulis</td>
                                    <td>
                                        <div class="rounded-3xl text-green-400 bg-green-200 px-6 py-1">
                                            kembali
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                <div class='w-80 h-60 bg-gray-100 ml-4 rounded-xl pl-6'>
                    <div className="text-left pt-4 pl-3">
                                <div className="text-[0.7rem] text-gray-400">Saat ini</div>
                                <div className="text-sm">Kategori Barang Pinjaman</div>
                            </div>
                            <div className='w-40 h-40 ml-14 mt-2'>
                            <Chart/>
                            </div>
                        </div>
               </div>
        </div>
    )
}
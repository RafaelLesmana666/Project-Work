import React from "react";

export default function PeminjamanContent (){
    return(
    <table className="w-full text-center">
        <thead className="bg-blue-600 text-white rounded">
            <tr>
                <th className="px-6 py-3">
                    Ruang
                </th>
                <th className="px-6 py-3">
                    Nama Peminjam
                </th>
                <th className="px-6 py-3">
                    Barang Dipinjam
                </th>
                <th className="px-6 py-3">
                    Tanggal Pinjam
                </th>
                <th className="px-6 py-3">
                    Tanggal Kembali
                </th>
                <th className="pl-6 pr-24 py-3">
                    Status Barang
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="px-6 py-4">
                    203
                </td>
                <td className="px-6 py-4">
                    sdfsdfjksdjfks
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
            </tr>
                </tbody>
            </table>
    )
}
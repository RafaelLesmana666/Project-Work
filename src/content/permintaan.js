import React from "react";

export default function PermintaanContent (){

    return(
        <table class="w-full text-center">
            <thead class="bg-blue-600 text-white rounded">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Nama Peminta
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Barang Diminta
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Tanggal Dipinjam
                    </th>
                    <th scope="col" class="pl-6 pr-[355px] py-3">
                        Alasan Meminta
                    </th>
                </tr>
            </thead>
               <tbody>
                    <tr>
                        <td class="px-6 py-4">
                            203
                        </td>
                        <td class="px-6 py-4">
                            sdfsdfjksdjfks
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="pl-6 pr-4 py-4 text-left">
                            Laptop
                        </td>
                    </tr>
                </tbody>
            </table>
    )

}
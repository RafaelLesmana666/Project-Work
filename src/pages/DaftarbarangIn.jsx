import React, { Component } from "react";
import Header from "../componets/Header/Header"
import Sidebar from "../componets/Sidebar";

class DaftarBarangIn extends Component {
    render () {
        return( 
        <div className='w-full min-h-screen flex flex-row'>
        <Sidebar/>
        <div>
            <Header title="Daftar Barang - Inventaris"/> 
        </div>
    </div>
    )
    }
}

export default DaftarBarangIn;
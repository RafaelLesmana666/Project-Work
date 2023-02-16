import React from "react";
import Sidebar from "../componets/Sidebar";
import Header from "../componets/Header/Header";
import { Component } from "react";

class Peminjaman extends Component {
  render () {
    return(  <div className='w-full min-h-screen flex flex-row'>
    <Sidebar/>
    <div>
        <Header title="History Peminjaman"/> 

    </div>
</div>)
  }
}

export default Peminjaman;
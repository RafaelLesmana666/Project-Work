import React, { Component } from "react";
import Header from "../componets/Header/Header"
import Sidebar from "../componets/Sidebar";

class Permintaan extends Component {
    render () {
        return( 
        <div className='w-full min-h-screen flex flex-row'>
        <Sidebar/>
        <div>
            <Header title="History Permintaan"/> 
        </div>
    </div>
    )
    }
}

export default Permintaan;
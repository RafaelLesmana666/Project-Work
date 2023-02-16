import React, {Component} from 'react';
import Sidebar from '../componets/Sidebar/index';
import Header from '../componets/Header/Header';

class TambahUser extends Component {
    render () {
      return (
        <div className='w-full min-h-screen flex flex-row'>
          <Sidebar/>
        <div>
          <Header title="Daftar User"/> 
        </div>
      </div>
      )
    }
}

export default TambahUser;

import Sidebar from '../componets/Sidebar/index';
import DashboardHeader from '../componets/Header/Dashboard';
import Dashboard from '../content/dashboard';
import React, { Component } from 'react';


class Home extends Component {
  render () {
    return(
      <div className='w-full min-h-screen flex flex-row'>
      <Sidebar/>
      <div>
          <DashboardHeader/> 
          <Dashboard/>
      </div>
  </div>
    )
  }
}

export default Home;

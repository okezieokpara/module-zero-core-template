import React, {Component} from 'react';
import 'adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css';
import 'adminbsb-materialdesign/plugins/node-waves/waves.css';
import 'adminbsb-materialdesign/plugins/animate-css/animate.css';
import 'adminbsb-materialdesign/plugins/morrisjs/morris.css';
import 'adminbsb-materialdesign/css/style.css';
import 'adminbsb-materialdesign/css/themes/all-themes.css';
import Header from './tpls/appHeader/header';
import SideBar from './tpls/appSideBar/sideBar';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="overlay"/>
        <Header/>
        <section>
          <SideBar/>
        </section>
      </div>
    );
  }
}

export default App;

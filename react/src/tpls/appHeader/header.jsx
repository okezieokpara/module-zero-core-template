import React, {Component} from 'react';
import AppLogo from '../../components/appHeader/appLogo';
import Search from '../../components/appHeader/search';
class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <AppLogo/>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Search/></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;

import React, {Component} from 'react';
import UserInfo from '../../components/appSideBar/userInfo';
class SideBar extends Component {
  render() {
    return (
      <aside id="leftsidebar" className="sidebar">
        <UserInfo/>
      </aside>
    );
  }
}
export default SideBar;

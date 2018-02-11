import React, {Component} from 'react';
import userImage from 'adminbsb-materialdesign/images/user.png';
class UserInfo extends Component {
  render() {
    return (
      <div className="user-info">
        <div className="image">
          <img src={userImage} width="48" height="48" alt="User"/>
        </div>
        <div className="info-container">
          <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
          <div className="email">john.doe@example.com</div>
          <div className="btn-group user-helper-dropdown">
            <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
            <ul className="dropdown-menu pull-right">
              <li><a href=""><i className="material-icons">person</i>Profile</a></li>
              <li role="seperator" className="divider"/>
              <li><a href=""><i className="material-icons">group</i>Followers</a></li>
              <li><a href=""><i className="material-icons">shopping_cart</i>Sales</a></li>
              <li><a href=""><i className="material-icons">favorite</i>Likes</a></li>
              <li role="seperator" className="divider"/>
              <li><a href=""><i className="material-icons">input</i>Sign Out</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default UserInfo;

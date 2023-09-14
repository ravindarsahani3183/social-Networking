import React from 'react'
import Header from '../Header/Header'
import './setting.css';
import SettingSidebar from './SettingSidebar';
import Messaging from './Messaging';
import Accountsetting from './Accountsetting';
import ChangePassword from './ChangePassword';
import Privacy from './Privacy';
import NotificationSetting from './NotificationSetting';
import Communications from './Communications';
import CloseAccount from './CloseAccount';
const Setting = ({route}) => {
    
    let componentToRender;
    switch (route) {
      case 'Accountsetting':
        componentToRender = <Accountsetting/>;
        break;
      case 'changepassword':
        componentToRender = <ChangePassword/>;
        break;
      case 'notificationSetting':
        componentToRender = <NotificationSetting/>;
        break;
      case 'privacy':
        componentToRender = <Privacy/>;
      break;
      case 'communications':
        componentToRender = <Communications/>;
      break;

      case 'messaging':
        componentToRender = <Messaging/>;
      break;

      case 'closeAccount':
        componentToRender = <CloseAccount/>;
      break;
      
      default:
        componentToRender = <Communications />;
    }

  return (
    <div>
        <Header></Header>
        <div className='setting'>
            <div className='setting-settingSidebar'><SettingSidebar></SettingSidebar></div>
            <div className='setting-contain'>
             {componentToRender}
            </div>
        </div>
    </div>
  )
}

export default Setting
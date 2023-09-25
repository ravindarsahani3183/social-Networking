import { Routes, Route} from 'react-router-dom';
import './App.css';
import Feed from './Feed/Feed';
//import Post from './Feed/Post';
import Home from './Home/Home';
//import ProfileInfo from './Feed/ProfileInfo';
//import Connection from './Connection/Connection';
import EventHome from './Event/EventHome';
import GroupHome from './Group/GroupHome';
import { Notifications } from './Notifications/Notifications';
import NewsBlog from './Latest News/NewsBlog';
import Create from './Account/Create';
//import Accountsetting from './Setting/Accountsetting';
//import ChangePassword from './Setting/ChangePassword';
//import NotificationSetting from './Setting/NotificationSetting';
//import Privacy from './Setting/Privacy';
//import Communications from './Setting/Communications';
//import Messaging from './Setting/Messaging';
//import CloseAccount from './Setting/CloseAccount';
import SettingSidebar from './Setting/SettingSidebar';
import { useContext, useEffect, useState } from 'react';
import {UserContext} from './context/UserContext';
import Setting from './Setting/Setting';
import Login from './Account/Login';
import SignUp from './Account/SignUp';
import ForgetPassword from './Account/ForgetPassword';
//import Story from './Story/Story';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const User = {
      name: 'Ravindra',
      connection: '300',
      role:'Developer',
      location: 'Mumbai'
  }

  setUser(User);
  },[])
  return (
    <UserContext.Provider value={user}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed route="feed"/>} />
        <Route path="/post" element={<Feed route="feed"/>} />
        <Route path="/profileInfo" element={<Feed route="profileInfo"/>} />
        <Route path="/connection" element={<Feed route="connection"/>} />
        <Route path="/media" element={<Feed route="media"/>} />
        <Route path="/video" element={<Feed route="video"/>} />
        <Route path="/eventHome" element={<EventHome/>} />
        <Route path="/newsBlog" element={<NewsBlog/>} />
        <Route path="/groupHome" element={<GroupHome/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgetPassword" element={<ForgetPassword/>} />
        <Route path="/Accountsetting" element={<Setting route="Accountsetting"/>} />
        <Route path="/changepassword" element={<Setting route="changepassword"/>} />
        <Route path="/notificationSetting" element={<Setting route="notificationSetting"/>} />
        <Route path="/privacy" element={<Setting route="privacy"/>} />
        <Route path="/communications" element={<Setting route="Communications"/>} />
        <Route path="/messaging" element={<Setting route="messaging"/>} />
        <Route path="/closeAccount" element={<Setting route="closeAccount"/>} />
        <Route path="/SettingSidebar" element={<SettingSidebar/>} />
        <Route path="/setting" element={<Setting route="setting"/>} />
      </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;

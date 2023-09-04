import { Routes, Route} from 'react-router-dom';
import './App.css';
import Feed from './Feed/Feed';
import Post from './Feed/Post';
import Home from './Home/Home';
import ProfileInfo from './Feed/ProfileInfo';
import Connection from './Connection/Connection';
import EventHome from './Event/EventHome';
import GroupHome from './Group/GroupHome';
import { Notifications } from './Notifications/Notifications';
import NewsBlog from './Latest News/NewsBlog';
import Create from './Account/Create';
import Accountsetting from './Setting/Accountsetting';
import ChangePassword from './Setting/ChangePassword';
import NotificationSetting from './Setting/NotificationSetting';
import Privacy from './Setting/Privacy';
import Communications from './Setting/Communications';
import Messaging from './Setting/Messaging';
import CloseAccount from './Setting/CloseAccount';
import SettingSidebar from './Setting/SettingSidebar';
//import Story from './Story/Story';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profileInfo" element={<ProfileInfo />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/eventHome" element={<EventHome/>} />
        <Route path="/newsBlog" element={<NewsBlog/>} />
        <Route path="/groupHome" element={<GroupHome/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/Accountsetting" element={<Accountsetting/>} />
        <Route path="/changepassword" element={<ChangePassword/>} />
        <Route path="/notificationSetting" element={<NotificationSetting/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/Communications" element={<Communications/>} />
        <Route path="/messaging" element={<Messaging/>} />
        <Route path="/closeAccount" element={<CloseAccount/>} />
        <Route path="/SettingSidebar" element={<SettingSidebar/>} />
      </Routes>
    </div>
  );
}

export default App;

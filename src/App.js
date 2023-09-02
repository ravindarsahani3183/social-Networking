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
      </Routes>
    </div>
  );
}

export default App;

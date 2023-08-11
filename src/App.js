import { Routes, Route} from 'react-router-dom';
import './App.css';
import Feed from './Feed/Feed';
import Post from './Feed/Post';
import Home from './Home/Home';
import ProfileInfo from './Feed/ProfileInfo';
import Connection from './Connection/Connection';
import Event from './Event/Event';
import Group from './Group/Group';
import { Notifications } from './Notifications/Notifications';
//import Story from './Story/Story';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/post" element={<Post />} />
        <Route path="/about" element={<ProfileInfo />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/event" element={<Event/>} />
        <Route path="/group" element={<Group/>} />
        <Route path="/notifications" element={<Notifications/>} />
      </Routes>
    </div>
  );
}

export default App;

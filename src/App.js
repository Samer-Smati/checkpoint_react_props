
import './App.css';
import Profile from './Profile/Profile';
import NavBar from './NavBar/NavBar'
import {Users} from './users';
import Footer from './Footer/Footer'
function App() {
  return (
    <div className="App">
      <NavBar ourUsers={Users} />
      <Profile users={Users}  />
      <Footer />
    </div>
  );
}

export default App;

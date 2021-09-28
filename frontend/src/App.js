import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LandingPage from './screen_pages/LandingPage/LandingPage';

import { BrowserRouter, Route } from 'react-router-dom'
import MyNotes from './screen_pages/MyNotes/MyNotes';
import LoginScreen from './screen_pages/LoginScreen/LoginScreen';
import RegisterScreen from './screen_pages/RegisterScreen/RegisterScreen';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/mynotes' component={MyNotes} />
      </main>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
{/* <p> starting MERN developing </p>
      <span>https://www.youtube.com/playlist?list=PLKhlp2qtUcSYC7EffnHzD-Ws2xG-j3aYo</span> */}
  // const App = () => <h1 className="App"> Hello World </h1>
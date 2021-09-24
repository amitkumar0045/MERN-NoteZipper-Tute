import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LandingPage from './screen_pages/LandingPage/LandingPage';



function App() {

  return (
    <div className="App">
      <Header />
      <main
      // style={{ minHeight: "93vh" }} // moved to "LandingPage"
      >
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
{/* <p> starting MERN developing </p>
      <span>https://www.youtube.com/playlist?list=PLKhlp2qtUcSYC7EffnHzD-Ws2xG-j3aYo</span> */}
  // const App = () => <h1 className="App"> Hello World </h1>
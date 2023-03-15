/* eslint-disable react/jsx-no-undef */
import MainScreen from './MainScreen/main-screen';
import ExploreScreen from './ExploreScreen/explore-screen';
import AboutUs from './AboutUs/about-us';
import Footer from './Footer/footer';
import './App.css';

function App() {
 // const name = 'ravi';
  return (
    <div>
      <MainScreen/>
      <ExploreScreen />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;

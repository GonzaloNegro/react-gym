import './App.css';
import Hero from './Components/Hero';
import Plans from './Components/Plans';
import Programs from './Components/Programs';
import Reasons from './Components/Reasons';
import Testimonials from './Components/Testimonials';
import Join from './Components/Join';
import './Components/Styles.css/style.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;

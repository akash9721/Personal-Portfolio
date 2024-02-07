import './App.css';
import { About } from './Component/About/About';
import { ContactMe } from './Component/ContactMe/ContactMe';
import { Footer } from './Component/Footer/Footer';
import { Header } from './Component/Header/Header';
import { Portfolio } from './Component/Portfolio/Portfolio';
import { Services } from './Component/Services/Services';

function App() {
  return (
       <>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <ContactMe/>
        <Footer/>
       </>
  );
}

export default App;

import HomePage from "./Components/HomePage";
import GovernmentServices from './Components/GovernmentServices'
import {Routes,Route} from 'react-router-dom'
import RegistrationPage from "./Components/RegistrationPage";
import BuySeeds from "./Components/BuySeeds";
import SeedDetails from "./Components/SeedDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path='/government-services' element={<GovernmentServices/>}/>
        <Route exact path='/government-services/registration-page' element={<RegistrationPage/>}/>
        <Route exact path='/buy-seeds' element={<BuySeeds/>}/>
        <Route exact path='/buy-seeds/seed-details' element={<SeedDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;

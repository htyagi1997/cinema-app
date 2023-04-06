import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components/index";
import {Footer} from './components/index'

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;

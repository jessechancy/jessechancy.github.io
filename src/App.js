import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import School from "./School";
import Work from "./Work";
import Projects from "./Projects";
import Ending from "./Ending";
function App() {
  return (
    <div className="App">
      <Heading/>
      <School/>
      <Work/>
      <Projects/>
      <Ending/>
    </div>
  );
}

export default App;

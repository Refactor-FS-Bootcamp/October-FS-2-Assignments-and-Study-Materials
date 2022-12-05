import './App.css';
import Counter from './components/Counter';
// import { Greet, ReactGreet } from './components/Greet';
import Greetings from './components/Greetings';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      {/* <Greetings name="JavaScript">Language of the Web</Greetings>
      <Greetings name="Golang" />
      <Greetings name="Swift" />
      <hr />
      <Welcome name="JavaScript" />
      <Welcome name="Golang" />
      <Welcome name="Swift">Language for iOS apps</Welcome> */}
      <Counter />
    </div>
  );
}

export default App;

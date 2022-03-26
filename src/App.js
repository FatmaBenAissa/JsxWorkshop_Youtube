import logo from './logo.svg';
import './App.css';
import Video from "./component/MainVideo";
import Suggestions from "./component/Suggestions";

function App() {
  return (
    <div style={{display:"flex"}} >
     <Video/>
     <Suggestions/>
    </div>
  );
}

export default App;

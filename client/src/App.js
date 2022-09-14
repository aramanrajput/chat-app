import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Chat from "./components/Chat"
import Join from './components/Join';
function App() {
  return (
    <div className="App">
      all fine
<BrowserRouter>
<Routes>
  <Route path="/" exact element={Join}/>
  <Route path="/chat"  element={Chat}/>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;

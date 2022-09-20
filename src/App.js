import logo from './logo.svg';
import './App.css';
import UseStateArray from './component/UseStateArray';
import UseStateObject from './component/UseStateObject';
import ShortCirEval from './component/ShortCirEval';
import BasicForm from './component/BasicForm';
import UseEffact1 from './component/UseEffact';
import UseEffact2 from './component/UseEffact2';
import UseEffectAPI from './component/UseEffectAPI';
import Todo from './component/todo';
import Tab from './component/Tab';
import Create from './component/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadData from './component/ReadData';
import Update from './component/Update';

function App() {
  return (
    <div className="App">
    

    <BrowserRouter>
      <Routes>
          <Route exact path='/usestatearray' element={  <UseStateArray/>}></Route>
          <Route exact path='/usestateobject' element={  <UseStateObject/>}></Route>
          <Route exact path='/shortcir' element={  <ShortCirEval/>}></Route>
          <Route exact path='/basicform' element={  <BasicForm/>}></Route>
          <Route exact path='/usereffact1' element={  <UseEffact1/>}></Route>
          <Route exact path='/usereffact2' element={  <UseEffact2/>}></Route>
          <Route exact path='/usereffactapi' element={  <UseEffectAPI/>}></Route>
          <Route exact path='/todo' element={  <Todo/>}></Route>
          <Route exact path='/create' element={  <Create/>}></Route>
          <Route exact path='/read' element={  <ReadData/>}></Route>
          <Route exact path='/update' element={  <Update/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import JsxTheorie from "./components/JsxTheorie";
import HookUseState from './components/HookUseState';
import Form from './components/Form';
import DisplayList from './components/DisplayList';
import ExerciceFruit from './components/ExerciceFruit';

function App(){
  return (
    <>
      <p>NavBar</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <JsxTheorie /> } />
          <Route path="/useState" element={ <HookUseState /> } />
          <Route path="/form" element={ <Form /> } />
          <Route path="/list" element={ <DisplayList /> } />
          <Route path="/exerciceFruit" element={ <ExerciceFruit /> } />
          <Route path="/test" element={ <> <p>Page test !</p> </> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
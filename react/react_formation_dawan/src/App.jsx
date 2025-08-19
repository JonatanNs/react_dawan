import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import JsxTheorie from "./components/JsxTheorie";
import HookUseState from './components/HookUseState';
import Form from './components/Form';
import DisplayList from './components/DisplayList';
import ExerciceFruit from './components/ExerciceFruits/ExerciceFruit';

function App(){
  return (
    <>
      <p>NavBar</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <JsxTheorie /> } />
          <Route path="/use-state" element={ <HookUseState /> } />
          <Route path="/formulaire" element={ <Form /> } />
          <Route path="/liste" element={ <DisplayList /> } />
          <Route path="/exercice-fruit" element={ <ExerciceFruit /> } />
          <Route path="/flux-de-donnees" element={ <Flux /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
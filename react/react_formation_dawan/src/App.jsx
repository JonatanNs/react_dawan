import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import JsxTheorie from "./components/JsxTheorie";
import HookUseState from './components/HookUseState';
import Form from './components/Form';
import { Flux } from './components/Flux';
import DisplayList from './components/DisplayList';
 import ExerciceFruit from "./components/ExerciceFruits/ExerciceFruit";
import { Navbar } from './components/NavBar';
import { RequeteApi } from './components/RequeteApi';
import { FormProduct } from './components/FormProduct';
import { HookUseEffect } from './components/HookUseEffect';
import { CustomHook } from './components/CustomHook';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<JsxTheorie />} />
          <Route path="/use-state" element={<HookUseState />} />
          <Route path="/formulaire" element={<Form />} />
          <Route path="/liste" element={<DisplayList />} />
          <Route path="/exercice-fruits" element={<ExerciceFruit />} />
          <Route path="/flux-de-donnees" element={<Flux />} />
          <Route path="/use-effect" element={<HookUseEffect />} />
          <Route path="/requete-api" element={<RequeteApi />} />
          <Route path="/hook-perso" element={<CustomHook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
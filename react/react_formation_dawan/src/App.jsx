import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import JsxTheorie from "./components/JsxTheorie";
import HookUseState from './components/HookUseState';

function App(){
  return (
    <>
      <p>NavBar</p>
      <BrowserRouter>
        <Routes>
          <Route path="/jsx" element={ <JsxTheorie /> } />
          <Route path="/useState" element={ <HookUseState /> } />
          <Route path="/test" element={ <> <p>Page test !</p> </> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
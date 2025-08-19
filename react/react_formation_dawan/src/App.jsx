import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import JsxTheorie from "./components/JsxTheorie";

function App(){
  return (
    <>
      <p>NavBar</p>
      <BrowserRouter>
        <Routes>
          <Route path="" element={ <JsxTheorie /> } />
          <Route path="/test" element={ <> <p>Page test !</p> </> } />
        </Routes>
      </BrowserRouter>
      <JsxTheorie/>
    </>
  )
}

export default App;
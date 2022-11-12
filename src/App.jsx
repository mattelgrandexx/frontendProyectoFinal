import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PerfilUsuario from './components/views/PerfilUsuario';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>

    <Routes>
      <Route>
        <Route path="/usuario" element={<PerfilUsuario></PerfilUsuario>}></Route>
      </Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

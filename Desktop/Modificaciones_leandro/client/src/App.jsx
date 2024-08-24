import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskPag } from './pages/taskFormPages'; // Asegúrate de que Home sea exportado como default
import { Navigator } from "./components/navigator";
import { Header } from "./components/Header";
import { About } from './pages/about';
import { InicioSesion } from './pages/iniciarSesion'; 
import { Register } from './pages/register'; 
import { AuthProvider } from './components/AuthContext'; // Importa el proveedor de autenticación
import { QueryAndResponseComponent } from './pages/consultas';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Header/>
      <Navigator/>
      <Routes>
        <Route path="/" element={<Navigate to = "/sentirseBien"/>}/>
        <Route path="/sentirseBien" element={<TaskPag/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<InicioSesion/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<QueryAndResponseComponent/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;

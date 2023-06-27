import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Aplicativo from "./pages/Aplicativo/Aplicativo";
import Babas from "./pages/Babas/Baba";
import Clientes from "./pages/Clientes/Clientes";
import Detalhes from './pages/Detalhes/Detalhes';
 

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Aplicativo",
      element: <Aplicativo />,
    },
    {
      path: "/Baba",
      element: <Babas />,
    },
    {
      path: "/Clientes",
      element: <Clientes />,
    },

    {
      path: "/Detalhes",
      element: <Detalhes />,
    },
    
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;

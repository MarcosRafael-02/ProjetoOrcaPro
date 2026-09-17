import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import PageRegister from './pages/PageRegister'
import Sidebar from './pages/Sidebar/Sidebar.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import NewOecamentos from './pages/NewOrcamentos/NewOrcamentos.jsx'
import Orcamentos from './pages/Orcamentos/Orcamentos.jsx'
import Perfil from './pages/Perfil/Perfil.jsx'

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />
    },

    {
        path: "/pagina-de-registro",
        element: <PageRegister />
    },

    {
        path: "/tela-inicial",
        element: <Sidebar />

    },

    {
        path: "/dashboard",
        element: <Dashboard />
    },

    {
        path: "/new-orcamentos",
        element: <NewOecamentos />
    },

    {
        path: "/orcamentos",
        element: <Orcamentos />
    },

    {
        path: "/perfil",
        element: <Perfil />
    }

])

export default router
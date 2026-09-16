import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import PageRegister from './pages/PageRegister'
import Sidebar from './pages/Sidebar/Sidebar.jsx'

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

    }
])

export default router
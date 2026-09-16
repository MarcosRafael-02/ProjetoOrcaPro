import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import PageRegister from './pages/PageRegister'

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />
    },

    {
        path: "/pagina-de-registro",
        element: <PageRegister />
    }
])

export default router
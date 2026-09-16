import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/TelaInicial'
import { LayoutContainer, ConteudoPrincipal } from './AppLayout'

function Layout() {
    return (
        <LayoutContainer>
            <Sidebar />
            <ConteudoPrincipal>
                <Outlet />
            </ConteudoPrincipal>
        </LayoutContainer>
    )
}

export default Layout
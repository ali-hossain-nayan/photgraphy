import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            <main style={{ marginTop: "55px" }}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
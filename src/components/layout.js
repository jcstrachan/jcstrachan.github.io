import './layout.css'
import { Outlet } from "react-router-dom";
import Navbar from './navbar'
import Footer from './footer';

export default function Layout() {
    return (
        <div className='layout-container'>
            <Navbar/>
            <div className="main-container">
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}
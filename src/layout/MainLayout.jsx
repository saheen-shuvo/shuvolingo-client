
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            {/* max-w-7xl mx-auto */}
        </div>
    );
};

export default MainLayout;
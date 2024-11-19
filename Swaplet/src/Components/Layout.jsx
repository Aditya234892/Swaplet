import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../Components/ui/Footer/Footer.jsx";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;

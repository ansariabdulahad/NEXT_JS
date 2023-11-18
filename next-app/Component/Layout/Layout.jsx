import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
    const deisgn = (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
    return deisgn;
}

export default Layout;
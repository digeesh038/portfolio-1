import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import { motion } from "framer-motion";
const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    inital={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Digeesh</motion.span>
                <div className="social">
                    <a href="https://github.com/digeesh038" target="_blank" rel="noreferrer"><img src="/github-sign.png" alt="No image" /></a>
                    <a href="https://www.linkedin.com/in/digeesh-s-013051272/" target="_blank" rel="noreferrer"><img src="/linkedin.png" alt="No image" /></a>
                    <a href="https://www.instagram.com/dige._.esx_/" target="_blank" rel="noreferrer"><img src="/instagram.png" alt="No image" /></a>
                    <a href="https://x.com/digeesh_2683" target="_blank" rel="noreferrer"><img src="/twitter.png" alt="No image" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
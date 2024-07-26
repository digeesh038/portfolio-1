import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import { motion } from "framer-motion";
const Navbar = () => {
return (
    <div className="navbar">
        {/*Sidebar*/}
        <Sidebar />
        <div className="wrapper">
            <motion.span 
            inital ={{opacity:0,scale:0.5}} 
            animate  ={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            >
                Digeesh</motion.span>
            <div className="social">
                <a href="https://github.com/digeesh038"><img src="/github-sign.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/digeesh-s-013051272/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://www.instagram.com/digee_2683/"><img src="/instagram.png" alt="" /></a>
                <a href="https://x.com/home"><img src="/twitter.png" alt="" /></a>
            </div>
        </div>
    </div>
)
}

export default Navbar
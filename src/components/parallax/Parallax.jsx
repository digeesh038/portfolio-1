import { useRef } from "react";
import "./parallax.scss";
import { motion,useScroll,useTransform } from "framer-motion"
import resume from '../../digee_resume.jpg';
const Parallex = ({type}) => {

const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset : ["start start","end start"]
    })


    const yText = useTransform(scrollYProgress, [0,1] ,["0%", "100%"])
    const yBg = useTransform(scrollYProgress, [0,1] ,["0%", "100%"])

return (
    <div 
    className="parallax"
    ref={ref}
    style={{
        background :
        type === "services" 
        ? "linear-gradient(180deg, #111132, #0c0c1d)"
        : "linear-gradient(180deg, #111132, #505084)",
    }}
    >
        <div class="canva-container">
            <img className = "img" src={resume} alt="" />
        </div>
        <div className="a">
            <img src="/download.png" alt="" />
            <a href="src\digee_resume.pdf" >Download CV</a>
        </div>       
        {/* <motion.div className="mountains"></motion.div> */}
        {/* <motion.div
        className="planets" 
        style={{
            y:yBg,
            backgroundImage: `url(${
                type === "services" ? "/planets.png" : "/sun.png"
            })`,
        }}></motion.div> */}
        {/* <motion.div style={{x:yBg}} className="stars"></motion.div> */}
</div>

)
}
export default Parallex


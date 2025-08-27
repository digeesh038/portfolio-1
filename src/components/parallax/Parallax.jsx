import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import resumeImage from '../../digee_resume.jpg';
import resumePDF from '../../digee_resume.pdf';
const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <motion.div
            className="parallax"
            ref={ref}
            style={{
                background: type === "services"
                    ? "linear-gradient(180deg,#0c0c1d, #273f26)"
                    : "linear-gradient(180deg,#0c0c1d, #273f26)",
            }}
        >
            <motion.div className="canva-container" style={{ y: yBg }}>
                <img src={resumeImage} alt="Resume" />
            </motion.div>
            <motion.div className="a" style={{ y: yText }}>
                <img src="/download.png" alt="" />
                <a href={resumePDF} download target="_blank" rel="noreferrer">Download CV</a>
            </motion.div>
        </motion.div>
    );
};

export default Parallax;

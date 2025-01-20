import { useRef } from "react";
import "./about.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const About = ({ type }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])

    return (
        <div className="parallax"
            ref={ref}>
            <motion.h1 style={{ y: yText }}>{type === "services" ? "" : ""}</motion.h1>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
            <motion.div>
                <h1 className="about">About</h1>
                <div className="div">
<br />
            <p>I am interest in web technologies is motivated by curiosity and a desire to address complicated challenges in everyday life.Today, as an IT undergraduate at Sri Ramakrishna Engineering College, I use that to create and improve digital systems.
            </p><br />
                🔍 Core competencies:
<br /><br />
            <p> My toolset includes expertise and core languages like as HTML, CSS, JavaScript, React and MongoDB enabling a well-rounded approach to Full Stack Development. The practical application of these talents is obvious in projects such as the interactive Banana-Monkey-Game Using JavaScript and the through Classification of Medicinal Leaves project.
            </p><br />
                🎓 Educational Insights:
<br /><br />
                <p>Pursuing my Bachelor’s in Information Technology has equipped me with not just technical proficiency but a problem-solving mindset that prioritizes efficiency and exceptional user experiences.
                </p><br />
                🚀 Visionary Outlook:
<br /><br />
                <p>I’m driven to explore emerging technologies and stay ahead of the curve. Certifications like AWS Cloud Practitioner Essentials reflect my commitment to continuous growth.
                </p><br />
                🌐 Future Forward:
<br /><br />
                <p>I am actively engaging with emerging technologies and continually updating my skill set through certifications like the AWS Cloud Practitioner Essentials. My goal is to influence the tech space significantly, making tech solutions more accessible and impactful.
                </p><br /><br />
                </div>
            </motion.div>
        </div>
    )
}
export default About;
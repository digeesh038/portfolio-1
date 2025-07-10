import { useRef } from "react";
import "./about.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const About = ({ type }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

    return (
        <div className="parallax" ref={ref}>
            <motion.h1 style={{ y: yText }}>
                {type === "services" ? "" : ""}
            </motion.h1>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
            <motion.div>
                <h1 className="about">About</h1>
                <div className="div">
                    <br />
                    <p>
                        Hello! I'm <strong>Digeesh Sakthivel</strong>, a passionate web developer and IT undergraduate at <strong>Sri Ramakrishna Engineering College</strong>. My curiosity for technology drives me to explore modern tools and create practical digital solutions for everyday challenges.
                    </p>
                    <br />
                    🛠️ <strong>Core Stack:</strong>
                    <br />
                    <br />
                    <p>
                        I primarily work with <strong>HTML, CSS, JavaScript, React, Node.js, and MongoDB</strong>, building responsive, full-stack web applications. I'm also currently exploring <strong>Laravel, React Native</strong>, and <strong>n8n</strong> for backend and automation workflows.
                    </p>
                    <br />
                    🌟 <strong>Projects I’ve Built:</strong>
                    <br />
                    <br />
                    <ul>
                        <li>
                            <strong>Banana Monkey Game</strong> – A fun, interactive game made with JavaScript.
                        </li>
                        <li>
                            <strong>Farm Connect</strong> – A platform connecting farmers directly with buyers.
                        </li>
                        <li>
                            <strong>Medicinal Leaf Classifier</strong> – A machine learning-based tool for identifying medicinal plants.
                        </li>
                    </ul>
                    <br />
                    💡 <strong>Why I Build:</strong>
                    <br />
                    <br />
                    <p>
                        I love building things that have a meaningful impact — whether it's simplifying processes for farmers or creating engaging tools for learning and health. I believe technology should be useful, efficient, and accessible.
                    </p>
                    <br />
                    🚀 <strong>On a Learning Journey:</strong>
                    <br />
                    <br />
                    <p>
                        I’m constantly learning and improving my skills. With certifications like <strong>AWS Cloud Practitioner Essentials</strong>, I aim to stay ahead in tech and contribute to projects that create real-world value.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;

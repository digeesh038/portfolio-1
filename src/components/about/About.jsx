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
                        Hi, I'm Digeesh — a web developer who enjoys building useful and fun
                        websites. I graduated with a degree in Information Technology from
                        Sri Ramakrishna Engineering College. I'm curious by nature and enjoy
                        using technology to solve real-world problems.
                    </p>
                    <br />
                    🛠️ <strong>What I Do:</strong>
                    <br />
                    <br />
                    <p>
                        I work with tools like HTML, CSS, JavaScript, React, Node.js, and
                        MongoDB. I use these to build full-stack websites that are
                        responsive, user-friendly, and scalable.
                    </p>
                    <br />
                    🌟 <strong>Projects I've Worked On:</strong>
                    <br />
                    <br />
                    <p>
                        Some of my favorite projects:
                        <ul>
                            <li>
                                <strong>Banana Monkey Game</strong> – A fun side-scrolling game
                                made with JavaScript.
                            </li>
                            <li>
                                <strong>Farm Connect</strong> – A website that helps farmers
                                connect directly with buyers.
                            </li>
                            <li>
                                <strong>Medicinal Leaf Classifier</strong> – A tool that uses
                                machine learning to identify medicinal plants.
                            </li>
                        </ul>
                    </p>
                    <br />
                    💡 <strong>Why I Love Tech:</strong>
                    <br />
                    <br />
                    <p>
                        I enjoy using technology to make life easier. Whether it’s building
                        tools for farmers, supporting healthcare, or creating fun games — I
                        love working on things that have a real impact.
                    </p>
                    <br />
                    🚀 <strong>Looking Ahead:</strong>
                    <br />
                    <br />
                    <p>
                        I’m always learning and improving. My goal is to be part of projects
                        that solve real problems and make a positive difference.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
export default About;

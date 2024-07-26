import { useRef } from "react";
import "./portfolio.scss";
import {motion ,useScroll, useSpring, useTransform} from "framer-motion";

const  items = [
    {
    id:1,
    title:"House Price Predicition",
    img:"",
    desc:"This goal of the project is to create a machine learning model to forecast home values based on important factors, giving precise and data-driven insights for real estate.",
    },
    {
    id:2,
    title:"Event Management System",
    img:"",
    desc:"To create an event management system streamlining event planning, attendee registration and ticket booking ensuring efficient organization and execution while enhancing client satisfaction and profitability.",
    },
    {
    id:3,
    title:"Classification of Medicinal Leaves",
    img:"",
    desc:"The goal of this project is to create a machine learning model that will categorize medicinal leaves requests according to a variety of factors, and effective way to handle leave requests from employees.",
    },
    // {
    // id:4,
    // title:"E-Commerce App",
    // img:"https://images.pexels.com/photos/23522603/pexels-photo-23522603/free-photo-of-a-single-chair-on-a-meadow-under-a-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    // desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sint hic neque quis fuga debitis dolore alias labore maxime natus.",
    // },
];

const Single = ({item})=>{

    const ref =useRef();

    const { scrollYProgress } = useScroll({
        target:ref,
        //offset:[" start start","end start"]
    });
    
    const y = useTransform(scrollYProgress,[0,1], [-300,300]);
    
    return( 
        <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer"  ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <a href="#">See Demo</a>
            </motion.div>
            </div>
        </div>
    </section>
    );
};

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target:ref,
        offset:["end end","start start"],
    });
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

return (
    <motion.div className="portfolio" ref={ref}>
        <motion.div className="progress">
            <h1>Projects </h1>
            <motion.div style={{scaleX}} className="a"></motion.div>
        </motion.div>
        {items.map((item)=>
        <Single item={item} key ={item.id} />
        )}
    </motion.div>
);
}

export default Portfolio
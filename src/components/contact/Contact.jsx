import {motion,useInView} from "framer-motion";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const variants={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        }
    }
}


const Contact = () => {

    const ref = useRef();

    const formRef = useRef();

const [error,setError] = useState(false);
const [success,setSuccess] = useState(false);

const isInView = useInView(ref,{margin:"-100px"})

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_hzkn6o4', 'template_da4c64j', formRef.current, {
        publicKey: 'UxMlHYUGxqQWaPIrq',
    })
    .then(
        (result) => {
        setSuccess(true);
        },
        (error) => {
        setError(true);
        },
    );
};

return(
    <motion.div className="contact" variants={variants} initial= "initial" animate="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1>Let's Work Together</motion.h1>
            <motion.div className="item"variants={variants}>
                <h2>Mail</h2>
                <span>digeesh038@gmail.com</span>
            </motion.div>
            <motion.div className="item"variants={variants}>
                <h2>Phone</h2>
                <span>7339343016</span>
            </motion.div>
            <motion.div className="item"variants={variants}>
                <h2>Address</h2>
                <span>Namakkal,Tamilnadu</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
                <motion.form
                ref={formRef}
                onSubmit={sendEmail}
                initial={{opacity:0}} 
                whileInView={{opacity:1}} 
                >
                <input type="text" placeholder="Name" name = "name"/>
                <input type="email" placeholder="Email" name = "email"/>
                <textarea rows={8} placeholder="Message" name = "message"/>
                <button>Submit</button>
                {error && "Error ❌"}
                {success && "Success ✅"}
            </motion.form>
        </div>
    </motion.div>
)
}
export default Contact
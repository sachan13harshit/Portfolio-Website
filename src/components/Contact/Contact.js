import React, { useState, useRef, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({});
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        
        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true);
        } else {
            emailjs
                .sendForm(
                    "service_okct9qi",
                    "template_7q0enap",
                    form.current,
                    "3vklEwplsD6MO-2ei"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setDone(true);
                        setShowMessage(true);
                        setTimeout(() => {
                            setShowMessage(false);
                        }, 5000); // Hide the message after 5 seconds
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
        e.target.reset();
    };

    return (
        <Container className="contact-container">
            <ParticleBackground />
            {showMessage && (
                <div className="notification">
                    Thanks for contacting me.
                </div>
            )}
            <Row className="justify-content-center">
                <Col md={6} className="c-left">
                    <h1 className="yellow animate-left">Contact me</h1>
                
                    <p className="yellow animate-left">Feel free to <span className="purple yellow animate-left">connect</span> with me</p>
                    <ul className="hsal">
                        <li className="social-icons yellow animate-left">
                            <a id="github"
                                href="https://github.com/sachan13harshit"
                                target="_blank"
                                style={{ color: "black" }}
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons yellow animate-left">
                            <a id="linkedin"
                                href="https://www.linkedin.com/in/sachanharshit/"
                                target="_blank"
                                style={{ color: "#0762C8" }}
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <AiOutlineLinkedin />
                            </a>
                        </li>
                        <li className="social-icons yellow animate-left">
                            <a id="leetcode"
                                href="https://leetcode.com/sachanharshit/"
                                style={{ color: "black" }}
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <SiLeetcode />
                            </a>
                        </li>
                        <li className="social-icons yellow animate-left">
                            <a id="codeforces"
                                href="https://codeforces.com/profile/harshitsachan"
                                style={{ color: "black" }}
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <SiCodeforces />
                            </a>
                        </li>
                        <li className="social-icons yellow animate-left">
                            <a id="codechef"
                                style={{ color: "black" }}
                                href="https://www.codechef.com/users/harshitsachan"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <SiCodechef />
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col md={6} className="c-right animate-left">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" className="user" placeholder="Name" onChange={handleChange} />
                        <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                        <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                        <span className='not-done'>{notDone && "Please, fill all the input fields"}</span>
                        <Button type="submit" id='bn' className="button btn-primary" disabled={done}>Send</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;

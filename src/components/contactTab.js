import React from 'react'
import styles from '../css/contact.module.css'
import emailjs from 'emailjs-com';

const ContactTab = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_4MB2fQSG9K0wqRTOVf4UG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div id="7" className="container windowHeight">
            <div className={styles.contact + " windowHeight"}>
                <h1>Contact</h1>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="user_name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="user_email"/>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <input type="textarea" id="message" name="message" />
                    </div>
                    <div>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactTab
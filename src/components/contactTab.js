import React from 'react'

const ContactTab = () => {
    return (
        <div id="7" className="container windowHeight">
            <div className="text-center">
                <h1>Contact</h1>
                <div>
                    <input type="text" placeholder="name" />
                </div>
                <div>
                    <input type="email" placeholder="email" />
                </div>
                <div>
                    <input type="textarea" placeholder="message" />
                </div>
                <div>
                    <button>Send message</button>
                </div>
            </div>
            <div>
                lower screen navbar? small section linking to other social media probably
            </div>
        </div>
    )
}

export default ContactTab
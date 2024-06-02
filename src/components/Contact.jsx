import React from "react";

// Use same contact form from blog

const Contact = () => {
    return (
        <main>
            <section>
                <h1>Need to get in touch?</h1>
                <p>Notice something about the site that isn't working 
                    the way it should, have an idea how it could be better, 
                    or just need to talk? Send me a message with your contact
                    information I will get back to you ASAP.
                </p>
            </section>
            <section>
                <form action="https://formsubmit.co/patrick.oser1@gmail.com" method="POST">
                    <div className="nameCon">
                        <label>Name:</label>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div className="emailCon">
                        <label>Email</label>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                        />
                    </div>
                    <label>Message</label>
                    <input 
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Your message"
                        cols="30"
                        rows="10"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </main>
    )
}

export default Contact
import React, { useEffect, useRef } from "react";
  
const Contact = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    });
    return (
        <div className='ContactForm'>
            <form  className='contactForm' id='contact-form' noValidate>
                <div className="contact-header-cont">
                    <div className="contact-header">
                        <h1>CONTACT ME</h1>
                    </div>
                </div>
                {/* Row 1 of form */}
                <div className='FormHeader'>
                    <div className='NameInput'>
                        <input
                        type='text'
                        name='name'
                        className='nameInput'
                        placeholder='Name'
                        ></input>
                    </div>
                    <div className='EmailInput'>
                        <input
                        type='email'
                        ref={inputRef}
                        name='email'
                        className='emailInput'
                        placeholder='Email address'
                        ></input>
                    </div>
                </div>
                {/* Row 2 of form */}
                <div className='MessageInputConteiner'>
                    <div className='MessageInput'>
                        <textarea
                        rows={3}
                        name='message'
                        className='messageInput'
                        placeholder='Message'
                        ></textarea>
                    </div>
                </div>
                <div className='SubmitButtonConteiner'>
                    <button className='submit-btn' type='submit'>
                    Submit
                    </button>
                </div>
            </form>
                        
        </div>
    );
};

export default Contact;
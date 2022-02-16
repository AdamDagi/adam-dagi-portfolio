import React, { useState } from "react";
  
const Contact = () => {
    const [name, setName] = useState({
        value: "",
        hasError: false,
        touched: false,
    });
    const [email, setEmail] = useState({
        value: "",
        hasError: false,
        touched: false,
    });
    const [message, setMessage] = useState({
        value: "",
        hasError: false,
        touched: false,
    });
    const nameBlurData = (e) => {
        let hasError = false;
        if (e.target.value === '') {
            hasError = true;
        } 
        setName(currentValue => ({
            ...currentValue,
            value: e.target.value,
            hasError,
        }));
    };
    const emailBlurData = (e) => {
        let hasError = false;
        const isValidEmail = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(email);
        if (!isValidEmail) {
            hasError = true;
        } 
        setEmail(currentValue => ({
            ...currentValue,
            value: e.target.value,
            hasError,
        }));
    };
    const messageBlurData = (e) => {
        let hasError = false;
        if (e.target.value === '') {
            hasError = true;
        } 
        setMessage(currentValue => ({
            ...currentValue,
            value: e.target.value,
            hasError,
        }));
    };
    const validateForm = (event) => {
        event.preventDefault();
        if (name.value === '') {
            setName(currentValue => ({
                ...currentValue,
                value: '',
                hasError: true,
            }));
        }
        if (email.value === '') {
            setEmail(currentValue => ({
                ...currentValue,
                value: '',
                hasError: true,
            }));
        }
        if (message.value === '') {
            setMessage(currentValue => ({
                ...currentValue,
                value: '',
                hasError: true,
            }));
        }
    };
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
                            className='nameInput errorInput'
                            placeholder='Name'
                            onBlur={nameBlurData}
                            onChange={e => setName(e.target.value)}
                        />
                        {name.hasError ? <p style={{ color: 'red' }}>Name is required</p> : null}
                    </div>
                    <div className='EmailInput'>
                        <input
                            type='email'
                            name='email'
                            className='emailInput errorInput'
                            placeholder='Email address' 
                            onBlur={emailBlurData}
                            onChange={e => setEmail(e.target.value)}
                        />
                        {email.hasError ? <p style={{ color: 'red' }}>Email is incorrect or empty</p> : null}
                    </div>
                </div>
                {/* Row 2 of form */}
                <div className='MessageInputConteiner'>
                    <div className='MessageInput'>
                        <textarea
                            rows={3}
                            name='message'
                            className='messageInput errorInput'
                            placeholder='Message'
                            onBlur={messageBlurData}
                            onChange={e => setMessage(e.target.value)}
                        />
                        {message.hasError ? <p style={{ color: 'red' }}>Message is required</p> : null}
                    </div>
                </div>
                <div className='SubmitButtonConteiner'>
                    <button onClick={validateForm} className='submit-btn' type='submit'>
                    Submit
                    </button>
                </div>
            </form>
                        
        </div>
    );
};

export default Contact;
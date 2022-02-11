import React, { useState } from "react";
  
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [hasError, setError] = useState(false);
    const [hasEmailError, setEmailError] = useState(false);
    const [hasMessageError, setmessageError] = useState(false);
    const nameBlurData = () => {
        if (name === '') {
          setError(true);
          return;
        }
        setError(false);
    };
    const emailBlurData = () => {
        const isValidEmail = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(email);
        if (isValidEmail) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };
    const messageBlurData = () => {
        if (message === '') {
            setmessageError(true);
          return;
        }
        setmessageError(false);
    };
    const validateForm = () => {
        nameBlurData();
        emailBlurData();
        messageBlurData();
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
                            onBlur={() => nameBlurData()}
                            onChange={e => setName(e.target.value)}
                        />
                        {hasError ? <p style={{ color: 'red' }}>Name is required</p> : null}
                    </div>
                    <div className='EmailInput'>
                        <input
                            type='email'
                            name='email'
                            className='emailInput errorInput'
                            placeholder='Email address' 
                            onBlur={() => emailBlurData()}
                            onChange={e => setEmail(e.target.value)}
                        />
                        {hasEmailError ? <p style={{ color: 'red' }}>Email is incorrect or empty</p> : null}
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
                            onBlur={() => messageBlurData()}
                            onChange={e => setMessage(e.target.value)}
                        />
                        {hasMessageError ? <p style={{ color: 'red' }}>Message is required</p> : null}
                    </div>
                </div>
                <div className='SubmitButtonConteiner'>
                    <button onClick={() => validateForm()} className='submit-btn' type='submit'>
                    Submit
                    </button>
                </div>
            </form>
                        
        </div>
    );
};

export default Contact;
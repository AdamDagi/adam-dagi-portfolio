import React from "react";
  
const Contact = () => {
    return (
        <div className='ContactForm'>
            <form  className='contactForm' id='contact-form' noValidate>
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
import React from 'react';
import Address from '../ContactPageAddress/ContactPageAddress';
import Form from '../ContactPageForm/ContactPageForm/ContactPageForm';
import '../../assets/sass/components/ContactPageBody/_contactPageBody.scss';

const ContactBody = () => {
    return (
        <div className="contact-body">
            <Form />
            <Address />
        </div>
    );
}

export default ContactBody;
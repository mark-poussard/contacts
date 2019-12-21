import React from 'react';
import Email from './components/Email';
import Phone from './components/Phone';
import Contact from '../model/contacts/Contact';
import './ContactDetail.scss';
import ContactIcon from './ContactIcon';

interface IContactDetailProps{
    contact : Contact;
    onClose ?: () => void;
}

const ContactDetail : React.FunctionComponent<IContactDetailProps> = props => {
    return (
        <div className={`ContactDetail`} onClick={props.onClose}>
            <div className={`contact-detail-content`}>
                <ContactIcon contact={props.contact} />
                <span>{props.contact.getFullName()}</span>
                {props.contact.getEmail() != null && 
                    <Email email={props.contact.getEmail()!} />}
                {props.contact.getPhone() != null && 
                    <Phone phone={props.contact.getPhone()!} />}
            </div>
        </div>
    );
}
export default ContactDetail;
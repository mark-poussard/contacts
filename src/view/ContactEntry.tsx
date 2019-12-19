import React from 'react';
import Contact from '../model/contacts/Contact';
import ContactIcon from './ContactIcon';
import './ContactEntry.scss';

interface IContactEntryProps{
    contact : Contact;
    onClick ?: () => void;
}

const ContactEntry : React.FunctionComponent<IContactEntryProps> = props => {
    return (
        <div className={`ContactEntry`}
            onClick={props.onClick}>
            <ContactIcon contact={props.contact} small/>
            <span>{props.contact.getFullName()}</span>
        </div>
    );
}
export default ContactEntry;
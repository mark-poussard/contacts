import React, { useState, useEffect } from 'react';
import Contact from '../model/contacts/Contact';
import ContactEntry from './ContactEntry';
import ContactDetail from './ContactDetail';

interface IContactListProps{
    contacts : Contact[];
}

const ContactList : React.FunctionComponent<IContactListProps> = props => {
    const [contactDetail, setContactDetail] = useState<Contact | null>(null);
    const [contacts, setContacts] = useState(props.contacts.slice().sort(Contact.compare));
    useEffect(() => {
        setContacts(props.contacts.slice().sort(Contact.compare));
    }, [props.contacts]);
    return (
        <div>
            {contacts.map(contact => 
                <ContactEntry key={contact.getId()} 
                    contact={contact}
                    onClick={() => setContactDetail(contact)}/>
            )}
            {contactDetail &&
                <ContactDetail contact={contactDetail} 
                    onClose={() => setContactDetail(null)}/>
            }
        </div>
    )
}
export default ContactList;
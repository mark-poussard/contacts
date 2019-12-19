import React from 'react';
import Contact from '../model/contacts/Contact';
import './ContactIcon.scss';

interface IContactIconProps{
    contact : Contact;
    small ?: boolean;
}

const ContactIcon : React.FunctionComponent<IContactIconProps> = props => {
    const smallStyle = {
        width: "50px",
        height: "50px",
        display: "inline-block",
    }
    const bigStyle = {
        width: "25vw",
        height: "25vw",
        fontSize: "10vw",
        marginLeft: "50%",
        transform: "translateX(-50%)",
        marginTop: "20px",
        marginBottom: "20px",
    }
    const style = Object.assign({
        backgroundColor : props.contact.getColor()
    }, (props.small ? smallStyle : bigStyle));
    return (
        <div className={`ContactIcon`}
            style={style}>
            <span className={`content`}>
                {props.contact.getInitials()}
            </span>
        </div>
    );
}
export default ContactIcon;
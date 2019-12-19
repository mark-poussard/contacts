import React from 'react';
import { EmailIcon } from './icon/FontAwesome';

interface IEmailProps{
    email : string;
}

const Email : React.FunctionComponent<IEmailProps> = props => {
    return (
        <div>
            <EmailIcon />
            <a href={`mailto:${props.email}`}>{props.email}</a>
        </div>
    );
}
export default Email;
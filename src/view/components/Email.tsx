import React from 'react';
import { EmailRoundIcon } from './icon/round/RoundIcon';
import './Email.scss';

interface IEmailProps{
    email : string;
}

const Email : React.FunctionComponent<IEmailProps> = props => {
    return (
        <a className={`Email`} href={`mailto:${props.email}`}>
            <EmailRoundIcon className={`email-icon`}/>
            {props.email}
        </a>
    );
}
export default Email;
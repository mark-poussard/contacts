import React from 'react';
import { PhoneRoundIcon } from './icon/round/RoundIcon';
import './Phone.scss';

interface IPhoneProps{
    phone : string;
}

const Phone : React.FunctionComponent<IPhoneProps> = props => {
    return (
        <a className={`Phone`} href={`tel:${props.phone}`}>
            <PhoneRoundIcon className={`phone-icon`} />
            {props.phone}
        </a>
    )
}
export default Phone;
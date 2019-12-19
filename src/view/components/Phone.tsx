import React from 'react';
import { PhoneIcon } from './icon/FontAwesome';

interface IPhoneProps{
    phone : string;
}

const Phone : React.FunctionComponent<IPhoneProps> = props => {
    return (
        <div>
            <PhoneIcon />
            <a href={`tel:${props.phone}`}>{props.phone}</a>
        </div>
    )
}
export default Phone;
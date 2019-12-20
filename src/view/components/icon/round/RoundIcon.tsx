import React from 'react';
import './RoundIcon.scss';
import { IconPropsType, PhoneIcon, EmailIcon } from '../FontAwesome';

export interface IRoundIconProps extends React.HTMLAttributes<HTMLDivElement>{
    
}

const RoundIcon : React.FunctionComponent<IRoundIconProps> = props => {
    const { className, ...propsExceptClassName } = props;
    return (
        <div className={`RoundIcon ${className}`} {...propsExceptClassName}>
            <span className={`content`}>
                {props.children}
            </span>
        </div>
    );
}
export default RoundIcon;

const CreateRoundIcon = (Icon : (props: IconPropsType) => JSX.Element, color : string) => {
    return (props : IRoundIconProps) => (
        <RoundIcon {...props} >
            <Icon color={color} />
        </RoundIcon>
    );
};

export const PhoneRoundIcon = CreateRoundIcon(PhoneIcon, "black");
export const EmailRoundIcon = CreateRoundIcon(EmailIcon, "black");
import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faPhone, faEnvelopeOpen } from '@fortawesome/fontawesome-free-solid';

export const fontAwesomeInit = () => {
    // solid
    fontawesome.library.add(faCircleNotch);
    fontawesome.library.add(faPhone);
    fontawesome.library.add(faEnvelopeOpen);
};

export type IconPropsType = Omit<FontAwesomeIconProps, "icon">

const createIconComponent = (iconName : IconProp) => {
    return (props : IconPropsType) => 
    <FontAwesomeIcon icon={iconName} {...props} />
}

export const LoaderIcon = createIconComponent("circle-notch");
export const PhoneIcon = createIconComponent("phone");
export const EmailIcon = createIconComponent("envelope-open");
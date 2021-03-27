import React, { ReactElement } from 'react';
import logo from '../assets/images/s-logo.svg';
import twitter from '../assets/images/twitter-logo-gradient.svg';
import instagram from '../assets/images/Instagram_Glyph_Gradient_RGB.png';




export const Header: React.FunctionComponent = (): ReactElement => {
    return (
        <div className='bg-darkGray h-16 flex justify-center sticky'>
            <div className='w-2/3'>
                <img className='h-full' src={logo} />
            </div>
         
        </div>
    )
}

export default Header;
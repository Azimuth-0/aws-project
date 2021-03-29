import React, { ReactElement } from 'react';
import logo from '../assets/images/s-logo.svg';

export const Header: React.FunctionComponent = (): ReactElement => {
    return (
        <div className='bg-darkGray h-16 flex justify-center sticky'>
            <div className='w-2/3'>
                <img className='h-full' src={logo} alt=''/>
            </div>
         
        </div>
    )
}

export default Header;
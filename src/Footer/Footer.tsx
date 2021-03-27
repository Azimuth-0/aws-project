import React, { ReactElement } from 'react';
import logo from '../assets/images/s-logo.svg';
import twitter from '../assets/images/twitter-logo-gradient.svg';
import instagram from '../assets/images/Instagram_Glyph_Gradient_RGB.png';




export const Footer: React.FunctionComponent = (): ReactElement => {
    return (
        <div className='bg-darkGray h-16 flex justify-center'>
            <div className=' w-2/3 flex flex-row justify-between'>
                <div className='flex flex-row items-center'>
                    <img className='h-full' src={logo} />
                    <div className='text-white whitespace-nowrap'>Don't steal my stuff © {new Date().getFullYear()}</div>
                </div>
                <div className='text-white flex flex-row p-2 justify-between items-center'>
                    <a className='h-12 w-12 flex m-2' href='https://twitter.com/Senor_Rata'><img className='' src={twitter} /></a>
                </div>

            </div>
        </div>
    )
}

export default Footer;
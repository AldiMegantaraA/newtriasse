import React from 'react';
import './footer.styles.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className='footer'>
        <div className='gridA'>
            <h3>Platform pertama untuk tes laboratorium dan pemeriksaan kesehataan
                indonesia yang
            </h3>
        </div>
        <div className='gridB'>
            <h3>Lainnnya</h3>
            <Link className='option' to='/'>
                Syarat & ketentuan
            </Link>
        </div>
        <div className='gridB'>
            <h3>Hubungi Kami</h3>
            <Link className='option' to='/'>
                Syarat & ketentuan
            </Link>
        </div>
        <div className='gridB'>
            <h3>Alamat</h3>
            <Link className='option' to='/'>
                Syarat & ketentuan
            </Link>
        </div>
        <div className='gridB'>
            <h3>Social Media</h3>
            <Link className='option' to='/'>
                Syarat & ketentuan
            </Link>
        </div>
    </div>
)

export default Footer;
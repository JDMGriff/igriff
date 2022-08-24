import * as React from 'react';
import { Link } from 'gatsby';
import '../css/styles.css';

const Layout = ({ pageTitle, children }) => {
    return (
        <div className='container'>
            <nav>
                <ul className='navLinks'>
                    <li className='navLinks__item'>
                        <Link to='/' className='navLinks__text'>
                            Home
                        </Link>
                    </li>
                    <li className='navLinks__item'>
                        <Link to='/about' className='navLinks__text'>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className='heading'>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;

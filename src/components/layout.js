import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/css/styles.css';

const Layout = ({ children }) => {
    const [show, setShow] = React.useState();

    return (
        <div className='page-wrapper'>
            <div className='sidebar'>
                <div className='sidebar__logo'>
                    <Link to='/'>I.G</Link>
                </div>
                <div className='sidebar__mouse'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='32'
                        viewBox='0 0 20 32'
                    >
                        <g
                            id='Group_1'
                            data-name='Group 1'
                            transform='translate(-944.325 -996.885)'
                        >
                            <g
                                id='Rectangle_3'
                                data-name='Rectangle 3'
                                transform='translate(944.325 996.885)'
                                fill='none'
                                stroke='#ddd'
                                strokeWidth='1'
                            >
                                <rect
                                    width='20'
                                    height='32'
                                    rx='10'
                                    stroke='none'
                                />
                                <rect
                                    x='0.5'
                                    y='0.5'
                                    width='19'
                                    height='31'
                                    rx='9.5'
                                    fill='none'
                                />
                            </g>
                            <circle
                                id='Ellipse_1'
                                data-name='Ellipse 1'
                                cx='2'
                                cy='2'
                                r='2'
                                transform='translate(952.325 1002.885)'
                                fill='#ddd'
                            />
                        </g>
                    </svg>
                </div>
            </div>
            <nav>
                <div className='nav-logo'>
                    <Link to='/'>I.G</Link>
                </div>
                <ul className={show ? 'navLinks show' : 'navLinks'}>
                    <li className='navLinks__item'>
                        <Link
                            to='/'
                            className='navLinks__text'
                            activeClassName='navLinks__item--active'
                        >
                            Home
                        </Link>
                    </li>
                    <li className='navLinks__item'>
                        <Link
                            to='#about'
                            className='navLinks__text'
                            activeClassName='navLinks__item--active'
                        >
                            About
                        </Link>
                    </li>
                    <li className='navLinks__item'>
                        <Link
                            to='/latest-work'
                            className='navLinks__text'
                            activeClassName='navLinks__item--active'
                        >
                            Latest Work
                        </Link>
                    </li>
                    <li className='navLinks__item'>
                        <Link
                            to='/contact'
                            className='navLinks__text'
                            activeClassName='navLinks__item--active'
                        >
                            contact
                        </Link>
                    </li>
                </ul>
                {/* Mobile Toggle Icon */}
                <div
                    onClick={() => setShow(!show)}
                    onKeyDown={() => setShow(!show)}
                    role='presentation'
                    className='mobile-toggle'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='30'
                        height='18'
                        viewBox='0 0 30 18'
                    >
                        <g
                            id='Group_24'
                            data-name='Group 24'
                            transform='translate(-134 -44)'
                        >
                            <rect
                                id='Rectangle_107'
                                data-name='Rectangle 107'
                                width='30'
                                height='2'
                                transform='translate(134 44)'
                                fill='#fff'
                            ></rect>
                            <rect
                                id='Rectangle_108'
                                data-name='Rectangle 108'
                                width='30'
                                height='2'
                                transform='translate(134 52)'
                                fill='#fff'
                            ></rect>
                            <rect
                                id='Rectangle_109'
                                data-name='Rectangle 109'
                                width='20'
                                height='2'
                                transform='translate(144 60)'
                                fill='#fff'
                            ></rect>
                        </g>
                    </svg>
                </div>
            </nav>
            <div className='page-wrapper-inner'>
                <div className='container'>
                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
};

export default Layout;

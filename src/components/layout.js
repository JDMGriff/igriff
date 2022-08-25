import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import '../css/styles.css';

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        <div>
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
            <div className='container'>
                <header className='site-header'>
                    {data.site.siteMetadata.title}
                </header>
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
                        <li className='navLinks__item'>
                            <Link to='/blog' className='navLinks__text'>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <h1 className='heading'>{pageTitle}</h1>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;

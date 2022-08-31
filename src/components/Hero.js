import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Hero = () => {
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
        <div className='hero'>
            {/* Hero Title */}
            <header className='hero__title'>
                <h1>
                    {data.site.siteMetadata.title}
                    <span className='yellow-period'>.</span>
                </h1>
            </header>
            {/* Hero Intro Text */}
            <p className='hero__intro'>
                My name's Ian Griffiths, I have over 10 years experience
                designing and building websites, apps and digital
                <br />
                experiences. Learn more about me and view my latest work.
            </p>
            {/* Hero cta */}
            <Link className='hero__intro--link' to='#'>
                Check out my latest work
                <span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20.657'
                        height='11.314'
                        viewBox='0 0 20.657 11.314'
                    >
                        <path
                            id='Union_2'
                            data-name='Union 2'
                            d='M13.586,9.9l3.242-3.243H0v-2H16.829L13.586,1.414,15,0l4.243,4.243,1.414,1.414L15,11.314Z'
                            fill='#fdcd18'
                        ></path>
                    </svg>
                </span>
            </Link>
            {/* Hero sub items */}
            <div className='hero__sub-items'>
                <div className='hero__sub-items--item'>
                    <p>
                        <span>Email</span>
                        <br />
                        <a href='mailto:hello@igriff.uk'>hello@igriff.uk</a>
                    </p>
                </div>
                <div className='hero__sub-items--item'>
                    <p>
                        <span>Phone</span>
                        <br />
                        07875 333 101
                    </p>
                </div>
                <div className='hero__sub-items--item'>
                    <p>
                        <span>Location</span>
                        <br />
                        Westcliff-on-Sea, Essex
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;

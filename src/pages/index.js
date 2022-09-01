// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import BlogList from '../components/BlogList';
import Hero from '../components/Hero';
import About from '../components/About';
import XpCard from '../components/XpCard';

// Step 2: Define your component
const IndexPage = () => {
    return (
        <div>
            <Layout pageTitle='Home Page'>
                {/* Include Hero section */}
                <Hero />

                {/* Include about section */}
                <About />

                {/* Include experience section */}
                <XpCard
                    companyName='Test'
                    descrp='test desc'
                    dateFromTo='date'
                />

                {/* Include latest blogs */}
                <BlogList />
            </Layout>
            {/* Download CV */}
            <div className='hero__download'>
                <a href='#about'>Download CV</a>
            </div>
        </div>
    );
};

export const Head = () => (
    <>
        <Seo title='Home Page | Ian Griffiths' />
        <meta name='Home Page' content='home page' />
    </>
);

// Step 3: Export your component
export default IndexPage;

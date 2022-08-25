// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

// Step 2: Define your component
const AboutPage = () => {
    return (
        <Layout pageTitle='About Me'>
            <p>Hi there! I'm the proud creator of this site.</p>
        </Layout>
    );
};

export const Head = () => (
    <>
        <Seo title='About Me' />
        <meta name='About Me' content='about page' />
    </>
);

// Step 3: Export your component
export default AboutPage;

// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import BlogList from '../components/BlogList';
import Hero from '../components/Hero';

// Step 2: Define your component
const IndexPage = () => {
    return (
        <Layout pageTitle='Home Page'>
            {/* Include Hero section */}
            <Hero />

            {/* Include latest blogs */}
            <BlogList />
        </Layout>
    );
};

export const Head = () => (
    <>
        <Seo title='Home Page' />
        <meta name='Home Page' content='home page' />
    </>
);

// Step 3: Export your component
export default IndexPage;

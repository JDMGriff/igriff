import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

function Contact() {
    return (
        <Layout pageTitle='Contact'>
            <h1>Contact</h1>
        </Layout>
    );
}

export const Head = () => <Seo title='Contact' />;

export default Contact;

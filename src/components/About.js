import React from 'react';

function About() {
    return (
        <div id='about' className='about-section'>
            <div className='about-section__title'>
                <h2>About me, experience & skilllset</h2>
            </div>
            <div className='about-section__content'>
                <p>
                    I am a versatile and hardworking person currently working
                    within the graphic & web design industry. I am looking for
                    new opportunities to allow development and growth as well as
                    using my existing skills.
                </p>
                <p>
                    I consider myself to be enthusiastic, self-motivated,
                    reliable and responsible and am able to work both in a team
                    environment as well as using my own initiative. I enjoy new
                    challenges, work well under pressure and can adhere to
                    strict deadlines.
                </p>
                <a
                    href='https://igriff.uk//wp-content/uploads/2021/07/Ians-CV.pdf'
                    download='Ians-CV.pdf'
                >
                    Download my CV
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='13'
                        height='15.314'
                        viewBox='0 0 13 15.314'
                    >
                        <g
                            id='Group_4'
                            data-name='Group 4'
                            transform='translate(-978 -1407.685)'
                        >
                            <path
                                id='Union_10'
                                data-name='Union 10'
                                d='M5.919,4.313,7.332,2.9H0V2.029H7.332L5.919.616,6.536,0,8.384,1.848,9,2.464,6.536,4.929Z'
                                transform='translate(986.929 1407.685) rotate(90)'
                                fill='#fdcd18'
                            ></path>
                            <path
                                id='Union_11'
                                data-name='Union 11'
                                d='M0,11V0H3V1H1v9H12V1H10V0h3V11Z'
                                transform='translate(978 1412)'
                                fill='#fdcd18'
                            ></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default About;

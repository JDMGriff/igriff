import React from 'react';

function Skillset() {
    return (
        <div className='skillset'>
            <h4>Skillset:</h4>
            <div className='skillset__inner'>
                <div className='skillset__item'>
                    <p>Adobe XD</p>
                    <div className='skillset__bar skillset__bar--xd'></div>
                </div>
                <div className='skillset__item'>
                    <p>Adobe Photoshop</p>
                    <div className='skillset__bar skillset__bar--ps'></div>
                </div>
                <div className='skillset__item'>
                    <p>CSS/SCSS</p>
                    <div className='skillset__bar skillset__bar--css'></div>
                </div>
                <div className='skillset__item'>
                    <p>Adobe Illustrator</p>
                    <div className='skillset__bar skillset__bar--ai'></div>
                </div>
                <div className='skillset__item'>
                    <p>HTML5</p>
                    <div className='skillset__bar skillset__bar--html'></div>
                </div>
                <div className='skillset__item'>
                    <p>JavaScript</p>
                    <div className='skillset__bar skillset__bar--js'></div>
                </div>
            </div>
        </div>
    );
}

export default Skillset;

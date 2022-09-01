import * as React from 'react';
import Glide from '@glidejs/glide';
import XpCard from '../components/XpCard';

const sliderConfiguration = {
    type: "slider",
    startAt: 0,
    animationTimingFunc: "ease-in-out",
    gap: 30,
    perView: 3,
    breakpoints: {
        1600: {
            perView: 2,
        },
        1100: {
            perView: 1,
        }
    }
  };

const XpSlider = () => {
    const ref = React.useRef();

    React.useEffect(() => {
      const slider = new Glide(ref.current, sliderConfiguration);
      slider.mount();
    }, [ref]);

    return (
        <div className='experience' id='experience'>
            <h2 className='sectionTitle'>Experience:</h2>

            <div ref={ref} className='glide'>
                <div className='glide__arrows' data-glide-el='controls'>
                    <button
                        type='button'
                        className='glide__arrow glide__arrow--left'
                        data-glide-dir='<'
                    >
                        {/* Arrow icon */}
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20.657'
                            height='11.314'
                            viewBox='0 0 20.657 11.314'
                        >
                            <path
                                id='Union_6'
                                data-name='Union 6'
                                d='M13.586,1.414l3.242,3.243H0v2H16.829L13.586,9.9,15,11.314l4.243-4.243,1.414-1.414L15,0Z'
                                transform='translate(20.657 11.314) rotate(180)'
                                fill='#fdcd18'
                            ></path>
                        </svg>
                    </button>
                    <button
                        type='button'
                        className='glide__arrow glide__arrow--right'
                        data-glide-dir='>'
                    >
                        {/* Arrow icon */}
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20.657'
                            height='11.314'
                            viewBox='0 0 20.657 11.314'
                        >
                            <path
                                id='Union_4'
                                data-name='Union 4'
                                d='M13.586,9.9l3.242-3.243H0v-2H16.829L13.586,1.414,15,0l4.243,4.243,1.414,1.414L15,11.314Z'
                                fill='#fdcd18'
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className='glide__track' data-glide-el='track'>
                    <div className='glide__slides'>
                        <div className='glide__slide tierBox'>
                            <XpCard
                                companyName='Neverwhatif Group Ltd:'
                                descrp='Junior full stack developer'
                                dateFromTo='From: 2022 - Present'
                            />
                        </div>

                        <div className='glide__slide tierBox'>
                            <XpCard
                                companyName='Revie Digital Ltd:'
                                descrp='Front end developer'
                                dateFromTo='From: 2021 - 2022'
                            />
                        </div>

                        <div className='glide__slide tierBox'>
                            <XpCard
                                companyName='Page Creative Ltd:'
                                descrp='Digital designer & front end developer'
                                dateFromTo='From: 2018 - 2021'
                            />
                        </div>

                        <div className='glide__slide tierBox'>
                            <XpCard
                                companyName='TDI-Tuning Ltd:'
                                descrp='Web & graphic design executive'
                                dateFromTo='From: 2016 - 2018'
                            />
                        </div>

                        <div className='glide__slide tierBox'>
                            <XpCard
                                companyName='Freelance:'
                                descrp='Web designer & front end developer'
                                dateFromTo='From: 2015 - 2016'
                            />
                        </div>

                        <div className='glide__slide tierBox'>
                            <XpCard
                                companyName='Leonmedia/Grow Co:'
                                descrp='Web designer & front end developer'
                                dateFromTo='From: 2010 - 2015'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default XpSlider;

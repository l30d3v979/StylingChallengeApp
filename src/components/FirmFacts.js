import React from 'react';
import './FirmFacts.scss';
import { ReactComponent as Icon } from './images/close.svg';
import CustomButton from './Button/CustomButton';
import HoverEffectComponent from './Button/HoverComponent';

const FirmFacts = () => {
    return (
        <div className="container">
            <div className='closeIcon'> <Icon /></div>
            <div className='header'>

                <h1>Firm Facts</h1>
                <div className='line' />

            </div>

            <div className='gridBoxes'>
                <div className='mainBox'>
                    <CustomButton
                        text="This is a two-line button that terminates with..."
                        backgroundColor="#2D3E4E"
                        hoverColor="none"
                        outlineColor="none"

                    />
                </div>
                <div className='gridBoxesContainer'>
                    <div className='box1'>
                        <HoverEffectComponent
                            icon={true}
                            text='This is a two-line button that terminates with...'
                            backgroundColor={'light'}
                            position={'up'}

                        />

                    </div>
                    <div className='box2'>
                        <HoverEffectComponent
                            icon={false}
                            text='This is a one line button'
                            backgroundColor={'dark'}
                            outlineColor={''}
                            position={'up'}

                        />
                    </div>
                    <div className='box3'>
                        <HoverEffectComponent
                            icon={true}
                            text='This is a two-line button that terminates with...'
                            backgroundColor={'dark'}
                            position={'up'}
                        />
                    </div>
                    <div className='box4'>
                        <div className='btnAligned'>
                            <HoverEffectComponent
                                icon={true}
                                text='This is a two-line button that terminates with...'
                                backgroundColor={'dark'}
                                hoverFrame={true}
                                position={'down'}
                            />
                        </div>

                    </div>
                    <div className='box5'>
                        <div className='btnAligned'>
                            <HoverEffectComponent
                                icon={true}
                                text='This is a two-line button that terminates with...'
                                backgroundColor={'dark'}
                                disable
                                position={'down'}
                            />
                        </div>

                    </div>
                    <div className='box6'>
                        <div className='btnAligned'>
                            <HoverEffectComponent
                                icon={true}
                                text='This is a two-line button that terminates with...'
                                backgroundColor={'light'}
                                hoverFrame={true}
                                position={'down'}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default FirmFacts;

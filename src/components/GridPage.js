import React from "react";
import './GridPage.scss'
import CustomButton from "./Button/CustomButton";
import HoverEffectComponent from "./Button/HoverComponent";
import './FirmFacts.scss';
import { ReactComponent as Icon } from './images/close.svg';

const GridPage = () => {
    return (
        <div class="centered-container">

            <div class="grid-item">
                <HoverEffectComponent
                    icon={true}
                    text='This is a two-line button that terminates with...'
                    backgroundColor={'dark'}
                    position={'up'}
                    disableHover={true}

                />
            </div>
            <div class="grid-item">
                <HoverEffectComponent
                    icon={true}
                    text='This is a two-line button that terminates with...'
                    backgroundColor={'light'}
                    position={'up'}

                /></div>
            <div class="grid-item">
                <HoverEffectComponent
                    icon={false}
                    text='This is a one line button'
                    backgroundColor={'dark'}
                    outlineColor={''}
                    position={'up'}
                />
            </div>
            <div class="grid-item"><HoverEffectComponent
                icon={true}
                text='This is a two-line button that terminates with...'
                backgroundColor={'dark'}
                position={'up'}
            /></div>
            <div class="grid-item"><HoverEffectComponent
                icon={true}
                text='This is a two-line button that terminates with...'
                backgroundColor={'dark'}
                hoverFrame={true}
                position={'down'}
            /></div>
            <div class="grid-item"><HoverEffectComponent
                icon={true}
                text='This is a two-line button that terminates with...'
                backgroundColor={'dark'}
                disable
                position={'down'}
            /></div>
            <div class="grid-item">
                <HoverEffectComponent
                    icon={true}
                    text='This is a two-line button that terminates with...'
                    backgroundColor={'light'}
                    hoverFrame={true}
                    position={'down'}
                />
            </div>

        </div>
    )
}

export default GridPage




























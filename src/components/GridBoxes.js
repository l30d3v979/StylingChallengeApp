import React from "react";
import './GridBoxes.scss'
import './Button/HoverComponent'
import SearchIcon from './images/search.svg'
import HoverComponent from "./Button/HoverComponent";
import Header from "./Header/Header";
import { textOneLine, textTwoLines } from "../data/content";


const GridBoxes = () => {

    return (
        <div class="containerMain">
            <Header />
            <div class="centered-container">

                <div class="grid-item">
                    <HoverComponent
                        icon={SearchIcon}
                        text={textTwoLines}
                        backgroundColor={'dark'}
                        disable={false}
                        hoverFrame={true}
                        outlineColor={false}
                        position='up'
                        disableHover={true}
                    />
                </div>
                <div class="grid-item">
                    <HoverComponent
                        icon={true}
                        text={textTwoLines}
                        backgroundColor="ligth"
                        position="up"
                    />
                </div>
                <div class="grid-item">
                    <HoverComponent
                        icon={true}
                        text={textOneLine}
                        backgroundColor="dark"
                        position="up"

                    />
                </div>
                <div class="grid-item">
                    <HoverComponent
                        icon={true}
                        text={textTwoLines}
                        backgroundColor="dark"
                        position="up"
                    />
                </div>
                <div class="grid-item">
                    <HoverComponent
                        icon={true}
                        text={textTwoLines}
                        backgroundColor="dark"
                        position="down"
                    />
                </div>
                <div class="grid-item">
                    <HoverComponent
                        icon={true}
                        text={textTwoLines}
                        backgroundColor="dark"
                        disable={true}
                        position="down"
                    />
                </div>
                <div class="grid-item">
                    <HoverComponent
                        icon={true}
                        text={textTwoLines}
                        backgroundColor="light"
                        hoverFrame={true}
                        position="down"
                    />
                </div>
            </div>
        </div>
    )
}

export default GridBoxes
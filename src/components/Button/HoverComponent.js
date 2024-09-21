import React, { useState } from 'react';
import './HoverComponent.scss';

const HoverComponent = ({
    icon,
    text,
    backgroundColor,
    disable,
    hoverFrame,
    outlineColor,
    position,
    disableHover
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const getButtonClassName = () => {
        const baseClass = 'greenButtonContainer';
        if (disable) return `${baseClass} buttonDisabled`;
        return `${baseClass} ${backgroundColor === 'dark' ? 'buttonBlue' : 'buttonGreen'}`;
    };

    const boxStyle = {
        boxSizing: 'border-box',
        padding: isHovered && !disable && !disableHover && hoverFrame ? '15px' : '0px',
        border: isHovered && !disable && !disableHover
            ? (hoverFrame ? '15px solid #07C06A' : outlineColor ? `2px solid ${outlineColor}` : 'none')
            : 'none',
        backgroundColor: isHovered && !disable && !disableHover && !hoverFrame ? '#07C06A' : 'transparent',
        transition: 'all 0.3s ease',
    };

    const handleMouseEnter = () => !disable && !disableHover && setIsHovered(true);
    const handleMouseLeave = () => !disable && !disableHover && setIsHovered(false);

    return (
        <div id="box" style={boxStyle}>
            <div className={`rowBtn${position.charAt(0).toUpperCase() + position.slice(1)}`}>
                <div
                    className={`${getButtonClassName()} ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="contentWrapper">
                        {icon && (
                            <svg
                                className='svg'
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.6324 14.9309L21.8485 20.1471C22.0505 20.349 22.0505 20.6756 21.8485 20.8775L20.8775 21.8485C20.6756 22.0505 20.349 22.0505 20.1471 21.8485L14.9309 16.6324C14.8364 16.5336 14.7805 16.4047 14.7805 16.2672V15.7C13.2122 17.0535 11.1713 17.8741 8.93706 17.8741C4.0002 17.8741 0 13.8739 0 8.93706C0 4.0002 4.0002 0 8.93706 0C13.8739 0 17.8741 4.0002 17.8741 8.93706C17.8741 11.1713 17.0535 13.2122 15.7 14.7805H16.2672C16.4047 14.7805 16.5336 14.8321 16.6324 14.9309ZM2.0624 8.93706C2.0624 12.7353 5.13881 15.8117 8.93706 15.8117C12.7353 15.8117 15.8117 12.7353 15.8117 8.93706C15.8117 5.13881 12.7353 2.0624 8.93706 2.0624C5.13881 2.0624 2.0624 5.13881 2.0624 8.93706Z"
                                    fill="white"
                                />
                            </svg>
                        )}
                        <span className="buttonText">{text}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoverComponent;
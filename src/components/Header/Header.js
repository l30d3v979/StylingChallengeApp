import React from "react";
import { titleH1 } from "../../data/content";
import "./Header.scss"

const Header = () => {

    return (
        <>
            <div className="closeIcon">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Close"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.0808 0L0 1.08227L20.9192 22.0299L0.0597062 42.9177L1.14051 44L22 23.1122L42.8595 44L43.9403 42.9177L23.0808 22.0299L44 1.08227L42.9192 0L22 20.9476L1.0808 0Z" fill="white" />
                </svg>
            </div>
            <div className="headerTitle">
                <h1>{titleH1}</h1>
            </div>
        </>
    )
}

export default Header
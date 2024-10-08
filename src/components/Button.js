import React from "react";
import './Button.css' ;
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZE = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onclick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]

    return (
        <Link to='/sign-up' className="btn-mobile">
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onclick}
            type="type"
            ></button>
        </Link>
    )
};
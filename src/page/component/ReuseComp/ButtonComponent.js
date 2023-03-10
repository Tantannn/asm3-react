import React from 'react';
import './ButtonComponent.css'

const ButtonComponent = (props) => {    
    const btnEnableDisable = !props.isDisabled ? "btn-enable" : "btn-disabled";
    return (
        <button
            id={props.id}
            className={`btn ${btnEnableDisable}`}
            onClick={props.onClick}
            type={props.type}
            disabled={props.isDisabled}
        >{props.value}</button>
    );
};

export default ButtonComponent;
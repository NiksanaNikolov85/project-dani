import React, { useContext } from 'react';
import classes from './HeaderButton.module.css';


const HeaderButton = (props) => {

    return <button className={classes.button} onClick={props.onClick}>
<span className={classes.bump}>{props.name}</span>
    </button>
}

export default HeaderButton;
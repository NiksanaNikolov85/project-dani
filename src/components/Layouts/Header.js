import React from 'react';
import classes from './Header.module.css';
import liner from '../../assets/liner.jpeg';
import HeaderButton from './HeaderButton';

const Header = (props) => {
    return <div>
        <header className={classes.header}>
            <h1>Liner</h1>
            <HeaderButton onClick={props.onShowCard}/>
        </header>
        <div className={classes['main-image']}>
            <img src={liner} />
        </div>
    </div>
}

export default Header;
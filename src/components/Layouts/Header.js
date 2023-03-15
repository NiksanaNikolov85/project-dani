import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import classes from './Header.module.css';
import liner from '../../assets/liner.jpeg';
import HeaderButton from './HeaderButton';
import Modal from '../UI/Modal';
import Register from '../UI/Register';



const Header = (props) => {
    const [cartIsShown, setCartIsShown] = useState(false);
    const [registerShow, setRegister] = useState(false);

    const showLoginModal = () => {
        setCartIsShown(true);
    }

    const hideLoginModal = () => {
        setCartIsShown(false);
    }

    const showLRegister = () => {
        setRegister(true);
    }

    const hideRegister = () => {
        setRegister(false);
    }

    const showUserAccount = () => {

    }
    return <div>
        <header className={classes.header}>
            <h1>Liner</h1>
            <HeaderButton onClick={showLoginModal} name={"vhod"}/>
            <HeaderButton onClick={showLRegister} name={"registaci"} />
        </header>
        <div className={classes['main-image']}>
            <img src={liner} />
        </div>
        {cartIsShown ? ReactDOM.createPortal(<Modal onClose={hideLoginModal} />, props.modalContainer.current) :null}
        {registerShow ? ReactDOM.createPortal(<Register onClose={hideRegister} />, props.modalContainer.current) : null}
       </div>
}

export default Header;
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { createAccount } from './Auth';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const RegisterOverlay = props => {
    const registerLogin = (event) => {
        event.preventDefault();
        const email = event.target.username.value;
        const password = event.target.password.value;
        console.log(email, password, 88888888)
        createAccount(email, password);
        console.log('you enetered')
    }
    return <div className={classes.modal}>
        <div className={classes.content}>
            <form onSubmit={registerLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username"></input>
                </div>
                <div>
                    <label htmlFor="pass">Password:</label>
                    <input type="password" id="pass" name="password"
                        minLength="8" required />
                </div>
                <input type="submit" value="Регистрация"></input>
                <button onClick={props.onClose}>Изход</button>
            </form>
        </div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Register = (props) => {
    return <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<RegisterOverlay onClose={props.onClose}>{props.children}</RegisterOverlay>, portalElement)}
    </>
}

export default Register;
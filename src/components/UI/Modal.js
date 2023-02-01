import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username"></input>
                </div>
                <div>
                    <label htmlFor="pass">Password:</label>
                    <input type="password" id="pass" name="password"
                        minLength="8" required />
                </div>
                <input type="submit" value="Влез"></input>
                <button onClick={props.onCloseCard}>Изход</button>
            </form>
        </div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay onCloseCard={props.onCloseCard}>{props.children}</ModalOverlay>, portalElement)}
    </>
}

export default Modal;
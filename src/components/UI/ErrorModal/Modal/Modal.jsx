import ReactDOM  from 'react-dom';
import Button from '../../Button/Button';
import styles from './Modal.module.css';

const Modal = props => {
    const onCloseHandler = () => {
        if (props.onShowErrorModal) {
            props.onShowErrorModal({visible: false});
        }
    };

    const ErrorModal = props => 
        <div className={`${styles.modal} ${!props.visible && styles.hidden} ${props.className ?? ''} `} onClick={onCloseHandler}>
            <div className={styles['modal-content']} onClick={e => e.stopPropagation()}>
                <div className={styles['modal-header']}>
                    <h2 className={styles['modal-title']}>{props.header ?? "Invalid input"}</h2>
                    <span className={styles['close-btn']} onClick={onCloseHandler}>&times;</span>
                </div>
                <div className={styles['modal-body']}>{props.children}</div>
                <div className={styles['modal-footer']}>
                    <Button type='button' onClick={onCloseHandler}>Okay</Button>
                </div>
            </div>
        </div>;

    return ReactDOM.createPortal(
        <ErrorModal 
            visible={props.visible ?? false} 
            header={props.header} 
            className={props.className}
        >
        {props.children}
        </ErrorModal>,
        document.getElementById("global-elements")
    );
};

export default Modal;
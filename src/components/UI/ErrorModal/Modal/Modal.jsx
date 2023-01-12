import Button from '../../Button/Button';
import styles from './Modal.module.css';

const Modal = props => {
    const onCloseHandler = () => {
        if (props.onShowErrorModal) {
            props.onShowErrorModal({visible: false});
        }
    };

    return (
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
        </div>
    )
};

export default Modal;
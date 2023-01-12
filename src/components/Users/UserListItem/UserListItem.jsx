import styles from './UserListItem.module.css';

const UserListItem = props => {
    const username = props.user.username ?? '-';
    const age = props.user.age ?? '0';

    return (
        <li className={styles['list-item']}>{`${username} (${age} years old)`}</li>
    )
}

export default UserListItem;
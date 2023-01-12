import styles from './UserList.module.css';
import Card from '../../UI/Card/Card';
import UserListItem from '../UserListItem/UserListItem';

const UserList = props => {
    const users = props.data ?? [];
    return (
        <Card>
            <ul className={styles.list}>
                {
                    users.length === 0
                        ? <li>No records ...</li>
                        : users.map(user => <UserListItem key={user.id} user={user}/>)
                }
            </ul>
        </Card>
    )
};

export default UserList;
import UserList from '../userlist/UserList';
import useFetch from '../../services/useFetch';
import './Home.css'

const Home = (): JSX.Element => {
    const { data: users, isPending, error } = useFetch('http://localhost:8000/users')

    return (
        <div>
            <section>
                {error && <p>{error}</p>}
                {isPending && <p>Loading users...</p>}
                {users && <UserList users={users} />}
            </section>
        </div>
    );
};

export default Home;
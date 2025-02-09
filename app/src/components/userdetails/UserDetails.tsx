import { useParams } from 'react-router-dom';
import useFetch from '../../services/useFetch';
import ButtonNavigate from '../button/ButtonNavegate';
import './UserDetails.css'

const UserDetails = () => {
    const { id } = useParams();
    const { data: user, error, isPending } = useFetch("http://localhost:8000/users/" + id);
    
    return (
        <>  
            <section>
                {isPending && <p>Loading user details...</p>}

                {error && <p>{error}</p>}
 
                {user && (
                    <>
                        <h1>User {user.id} details</h1>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.number}</p>
                        <ButtonNavigate wishedRoute="/" buttonActionName="voltar" />
                    </>
                )}
            </section>
        </>
    );
};

export default UserDetails;
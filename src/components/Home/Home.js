import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from 'react';

//Redux
import Store from '../../redux/store/Store';
import { addUser } from '../../redux/actions/Action';

function User(properties) {

    return (
        <div className='contact'>
            <img src={properties.picture} />
            <p>{properties.name}</p>
        </div>
    );
}

export default function Home() {

    const [users, setUsers] = useState(0);
    const [count, setCount] = useState(10);

    const navigate = useNavigate();

    const usersList = useMemo(() => {

        return Store.getState().users;
    });

    const logout = useCallback(() => {

        localStorage.removeItem('loggedUser');
        navigate('/');

    }, [users]);

    useEffect(() => {
        
        let list = document.getElementById('contacts');

        let scroll = list.scrollTop + list.scrollHeight;

        list.addEventListener('scroll', () => {

            if(scroll < list.scrollTop + list.scrollHeight) {

                setCount(count + 1);

                scroll = list.scrollTop + list.scrollHeight;
            }
        });

        if (usersList.length >= count) return;

        Axios.get('https://randomuser.me/api/?result=500').then((response) => {

            let result = response.data.results[0];

            if (result) {

                let picture = result.picture.thumbnail;
                let name = `${result.name.first} ${result.name.last}`;

                let user = {
                    picture: picture,
                    name: name,
                }

                Store.dispatch(addUser(user));

                if (users <= count) setUsers(users + 1);
            }

        }).catch(() => /* console.log('Error in fetching') */ null);

        return () => list.removeEventListener('scroll', () => null);

    }, [users, count]);

    return (
        <div className='home'>
            <h2 className='head'>Contacts</h2>
            <div className='contacts' id='contacts'>
                {usersList.map((user) => <User key={user.name} name={user.name} picture={user.picture} />)}
            </div>
            <button className='bttn' onClick={() => logout()}>Logout</button>
        </div>
    );
}
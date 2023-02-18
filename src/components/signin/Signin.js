import { useNavigate } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";

//Components
import Notify from "../notifications/Notify";

//Redux
import { SetUsername, SetPassword } from "../../redux/actions/Action";
import Store from '../../redux/store/Store';

export default function Signin() {

    const navigate = useNavigate();

    const state = useMemo(() => {

        let currentState = Store.getState();

        return currentState;
    });

    const [notification, setNotify] = useState('');

    const submit = useCallback(() => {

        if (state.username != 'foo') {

            setNotify('Username is not valid');
            setTimeout(() => setNotify(''), 3000);
            return;
        }

        if (state.password != 'bar') {

            setNotify('Password is not valid');
            setTimeout(() => setNotify(''), 3000);
            return;
        }

        localStorage.setItem('loggedUser', 'foo');

        navigate('/home');
    });

    return (
        <div className="centerFlex">
            <div className="authBox">
                <h1>Login</h1>

                <Notify notification={notification} />

                <div className="centerFlex">
                    <input type="text" placeholder="Enter Username" onChange={(event) => Store.dispatch(SetUsername(event.target.value))} />
                    <input type="password" placeholder="Enter Password" onChange={(event) => Store.dispatch(SetPassword(event.target.value))} />
                </div>

                <div>
                    <button className="bttn" onClick={() => submit()} >Login</button>
                </div>
            </div>
        </div>
    );
}
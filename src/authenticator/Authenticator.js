import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Authenticator(properties) {

    const navigate = useNavigate();

    useEffect(() => {

        let user = localStorage.getItem('loggedUser');

        if(user === 'foo') {

            if(properties.path === 'login') navigate('/home');
            return;
        }

        if(user != 'foo') {
            
            if(properties.path === 'home') navigate('/');
            return;
        }
    });

    return null;
}
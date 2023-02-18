import Authenticator from '../../authenticator/Authenticator';
import Home from './Home';

export default function Index() {

    return (
        <>
            <Authenticator path='home' />
            <Home />
        </>
    );
}
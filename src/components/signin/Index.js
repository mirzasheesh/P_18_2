import Authenticator from '../../authenticator/Authenticator';
import Signin from './Signin';

export default function Index() {

    return (
        <>
            <Authenticator path='login' />
            <Signin />
        </>
    );
}
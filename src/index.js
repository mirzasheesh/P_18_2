import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Components
import Home from './components/Home/Index';
import Signin from './components/signin/Index';

function Index() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signin />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Index />);
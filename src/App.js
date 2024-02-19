import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'; //add Navigate later
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NoPage />} />
            </Route>             
        </Routes>
    )
}

export default App;

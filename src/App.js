import './App.css';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'; //add Navigate later
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                </Route>             
            </Routes>
        </div>
    )
}

export default App;

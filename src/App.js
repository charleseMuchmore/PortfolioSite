import './App.css';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'; //add Navigate later
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';

function App() {
    return (
        <div classname="App">
            <header className="App-header">
            <Routes>
                <Route className="App-link" path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NoPage />} />
                </Route>             
            </Routes>
            </header>
        </div>
    )
}

export default App;

import './App.css';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'; //add Navigate later
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';

function App() {
    return (
        <div classname="App">
            <header className="App-header">
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
                </a>
            </header>
            <Routes>
                <Route className="App-link" path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NoPage />} />
                </Route>             
            </Routes>
        </div>
    )
}

export default App;

import { ToastContainer } from 'react-toastify';
import './customStyle/customStyle.css';
import RouterWrapper from './routes/RouterWraper';
import { Link } from 'react-router-dom';

function App() {
    return (
        <>
        <Link to='sheradeals://Shop/Daraz' >Go</Link>  
            <ToastContainer position="top-center" />
            <RouterWrapper />
        </>
    );
}

export default App;

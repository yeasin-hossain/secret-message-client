import { ToastContainer } from 'react-toastify';
import './customStyle/customStyle.css';
import RouterWrapper from './routes/RouterWraper';

function App() {
    return (
        <>

            <ToastContainer position="top-center" />
            <RouterWrapper />
        </>
    );
}

export default App;

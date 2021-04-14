import { ToastContainer } from 'react-toastify';
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

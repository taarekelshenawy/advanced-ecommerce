
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Approuter from '@routes/Approuter/Approuter';
import './styles/global.css';
import { Provider } from 'react-redux';
import store from './store/index';



createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Approuter/>
     </Provider>

)

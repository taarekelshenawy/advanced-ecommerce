
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Approuter from '@routes/Approuter/Approuter';
import './styles/global.css'



createRoot(document.getElementById('root')!).render(
<Approuter/>
)

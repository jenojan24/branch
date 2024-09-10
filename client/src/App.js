

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//import SideBar from './components/SideBar.js';
import ClientChangePassword from './pages/ClientChangePassword.js';
import ClientInvoiceView from './pages/ClientInvoiceView.js';
import ClientServiceInvoice from './pages/ClientServiceInvoice.js';
import NavBar from './components/NavBar.js';
import SideBar from './components/SideBar.js';
import Footer from './components/footer.js';
function App() {
  return (
    <div>
 <BrowserRouter>
     
       <NavBar/>
    
  <SideBar/> 
         <Footer/>
      <Routes>
      <Route path='/changePassword' element={<ClientChangePassword/>} />
        
          <Route path='/Invoices' element={<ClientInvoiceView/>} />
          <Route path='/serviceInvoice' element={<ClientServiceInvoice/>} />
          

        </Routes>
         
       
     
      </BrowserRouter>

    
    </div>
  );
}

export default App;

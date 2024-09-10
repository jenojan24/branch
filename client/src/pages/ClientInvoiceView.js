      import React,{useState,useEffect}from 'react';
      import axios from 'axios';
      import { Link } from 'react-router-dom';
      export default function ClientInvoiceView() {


        const[invoice,setInvoice]=useState([]);

        // useEffect(()=>{
        //   axios.get('')
        //   .then(response =>{
        //     setInvoice(response.data);
        //   })
        //   .catch(error=>{
        //     console.error('there was an error fetching the invoices!',error);
        //   });


        // },[])
        return (
          <div className="container col-7 mt-5 custom-container ">
             <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
         Invoice
          </li>
         
        </ol>
      </nav>
            <h1>Invoice</h1>
            <div class="col-md-5 mt-5 ">
              <input class="form-control  " type="search" placeholder="Invoice Id / name" aria-label="Search"/>
              </div>
                <form class="d-flex pb-4 pt-4" role="search">
               
              <button class="btn  btn-primary me-3" type="submit">Search</button>
             
              
            </form>
          <table class="table table-responsive table-bordered  table-hover">
            <thead class="table-light">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Invoice id</th>
            <th scope="col">Company Name</th>
            <th scope="col">Creation Date</th>
            <th scope="col">Contact Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Thornton</td>
            <td><a href="./serviceInvoice" class="btn btn-secondary">View</a></td>
          </tr>
        
          {/* {invoices.map((invoice,index)=>(
            <tr key={invoice.id}>
            <th scope="row">{index+1}</th>
            <td>{invoice.invoice_id}</td>
            <td>{invoice.company_name}</td>
            <td>{invoice.creation_date}</td>
            <td>{invoice.contact_name}</td>
            <td><a href="./serviceInvoice" className="btn btn-primary">View</a></td>
            </tr>

          ))} */}
        
          
        </tbody>
      </table>
      </div>
          
        )
      }

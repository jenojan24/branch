import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import {useParams,Link} from "react-router-dom";
import {useReactToPrint} from "react-to-print";



export default function ClientServiceInvoice() {
    const componentPDF = useRef();
    // const {id}=useParams();
     //const [invoice,setInvoice] =useState(null);

    // useEffect(()=>{
    //     axios.get()
    //     .then(response =>{
    //         setInvoice(response.data);
    //     })
    //     .catch(error =>{
    //         console.error('There was an error fetching the invoice details!',error);
    //     });
    // },[id]);

    // if (!invoice)return <div>Loading ....</div>;


    
    const handlePrint = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: 'User Data',
      });
    
  return (
    <div className="container custom-container col-7 mt-4" ref={componentPDF} >
         <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/Invoices">Invoice</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            View Invoices
          </li>
        </ol>
      </nav>
        <h1 class="fw-bold">Invoice</h1>
        <label for="Invoice" class="form-label text-dark fw-bold mt-5">Invoice</label>
  <table class="table table-bordered  print-table" style={{ marginBottom: '40px' }}>
    <thead class="table-light">
        <tr>
            <th colspan="4" class="text-center bg-secondary text-white">Client Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th class="bg-light text-dark">Company Name</th>
            <td>Gamage Recruiters</td>
            {/*<td>{invoice.company_name}</td> */}
            <th class="bg-light text-dark">Contact Name</th>
            <td>Maryrajanat</td>
              {/*<td>{invoice.conatct_name}</td> */}
        </tr>
        <tr>
            <th class="bg-light text-dark">Contact No</th>
            <td>+94 770457110</td>
              {/*<td>{invoice.company_no}</td> */}
            <th class="bg-light text-dark">Email</th>
            <td><a href="mailto:vjixavi@gmail.com">vjixavi@gmail.com</a></td>
           {/*<td><a href={`mailto:${invoice.email}`}>{invoice.email}</a></td>*/}
        </tr>
        <tr>
            <th class="bg-light text-dark">Account ID</th>
            <td>87043072</td>
            {/*<td>{invoice.account_id}</td> */}
            <th class="bg-light text-dark">Invoice Date</th>
            <td>2024.07.19 11:20</td>
                {/*<td>{invoice.invoice_date}</td> */}
        </tr>
    </tbody>
</table>
<table class="table table-bordered print-table">
    <thead class="table-light">
        <tr>
            <th colspan="3" class="text-center bg-secondary text-white" style={{ marginTop: '40px' }}>Service Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th class="bg-light text-dark">No</th>
            <th class="bg-light text-dark">Service</th>
            <th class="bg-light text-dark">Cost</th>
        </tr>
        <tr>
            {/*{invoice.services && invoices.map((service,index)=>(
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{service.name}</td>
                <td>${service.cost}</td>
                </tr>
            ))} 
             <tr>
            <th colSpan="2" className="bg-light text-dark text-center"><strong>Grand Total</strong></th>
            <th>${invoice.total_cost}</th>
          </tr>
            */}
            <td>1</td>
            <td>Web Development</td>
            <td>$ 121</td>
        </tr>
       
        <tr>
            <th colspan="2" class="bg-light text-dark text-center"><strong/>Grand Total</th>
            <th>$ 441</th>
        </tr>
    </tbody>
</table>
<form className="mt-3 d-flex justify-content-center">
  <button className="btn" type="button" onClick={handlePrint}>
    <img className='print_button' src='./print.png' alt="icon" style={{ width: "8vh",height: "8vh"}}/>
  </button>
</form>

    </div>
  )
}

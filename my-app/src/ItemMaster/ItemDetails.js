import React, { useState } from "react";
import "./ItemDetails.css";

export const Details  = ({ closeModal, onSubmit, defaultValue }) => {

  const [formState, setFormState] = useState(defaultValue || {
    ItemCode: "",
    Description: "",
    Standardqty: "",
    ContainerQty: "",
    Rate: "",
    QtyOnHand: "", 
    RefNO: "",
    BatchCode: "",
    BatchSrNo: "",
    UnitCost: "",
    Active: "",
    UOM: "",
    HSNCode:"",
    PrimeCust:""

  });
 
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);

    closeModal();
  };



  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="ItemCode">ItemCode:</label>
            <input
              type="text"
              name="ItemCode"
              onChange={handleChange}
              value={formState.ItemCode}
            />
      
            <label htmlFor="Description">Description:</label>
            <input
              name="Description"
              onChange={handleChange}
              value={formState.Description}
             
            />
    
            <label htmlFor="StandardQty">StandardQty:</label>
            <input
              name="StandardQty"
              onChange={handleChange}
              value={formState.StandardQty}
           
            />
         
            <label htmlFor="ContainerQty">ContainerQty:</label>
            <input
              name="ContainerQty"
              onChange={handleChange}
              value={formState.ContainerQty}
              
            />
          
            <label htmlFor="Rate">Rate:</label>
            <input
              name="Rate"
              onChange={handleChange}
              value={formState.Rate}
           
            />
    
            <label htmlFor="QtyOnHand">QtyOnHand:</label>
            <input
              name="QtyOnHand"
              onChange={handleChange}
              value={formState.QtyOnHand}
            
            />

            <label htmlFor="RefNO">RefNO:</label>
            <input
              name="RefNO"
              onChange={handleChange}
              value={formState.RefNO}
            
            />
         
            <label htmlFor="BatchCode">Batch Code:</label>
            <input
              name="BatchCode"
              onChange={handleChange}
              value={formState.BatchCode}
            
            />
     
            <label htmlFor="BatchSrNo">BatchSrNo:</label>
            <input
              name="BatchSrNo"
              onChange={handleChange}
              value={formState.BatchSrNo}
            />
    
            <label htmlFor="UnitCost">UnitCost:</label>
            <input
              name="UnitCost"
              onChange={handleChange}
              value={formState.UnitCost}
        
            />
       
            <label htmlFor="UOM">Uom:</label>
            <input
              name="UOM"
              onChange={handleChange}
              value={formState.UOM}
          
            />
    
            <label htmlFor="HSNCode">HsnCode:</label>
            <input
              name="HSNCode"
              onChange={handleChange}
              value={formState.HSNCode}
      
            />
       
            <label htmlFor="PrimeCust">PrimeCust:</label>
            <input
              name="PrimeCust"
              onChange={handleChange}
              value={formState.PrimeCust}
              
            />
         
          <div className="radiobtn">
          
           <input
           type="radio"
           id="activeRadio"
           name="Active"
           value="Active"
           checked={formState.Active === "Active"}
           onChange={handleRadioChange}
          />
           <label htmlFor="Active">Active</label>
           </div>
         <div>
         <input
             type="radio"
             id="inactiveRadio"
             name="Active"
             value="InActive"
             checked={formState.Active === "InActive"}
             onChange={handleRadioChange}
          />
           <label htmlFor="InActive">InActive</label>
          </div>
          <div className="form-group">
            <label htmlFor="ItemPic">ItemPic:</label>
           
          </div>
          </div>
          <button type="submit" className="btns" onClick={handleSubmit}>
          Submit
        </button>
        </form>
     
      </div>
 
    </div>
  );
};

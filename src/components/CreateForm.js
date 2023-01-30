import React, { useState } from "react";
// import axios from "axios";
import "./CreateForm.css";

function CreateForm(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return props.trigger ? (
    <div className="CreateForm">
      <div className="uploadPost">
        <h2>Report A Found Item</h2>
        <label>What item did you find?</label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Category</label>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option>-- Please Select Category --</option>
          <option value="Animals/Pets">Animals/Pets</option>
          <option value="Bags,Baggage,Luggage">Bags,Baggage,Luggage</option>
          <option value="Books">Books</option>
          <option value="Clothing">Clothing</option>
          <option value="Credit/ATM Card">Credit/ATM Card</option>
          <option value="Currency/Money">Currency/Money</option>
          <option value="Documents">Documents</option>
          <option value="Electronics">Electronics</option>
          <option value="Glasses">Glasses</option>
          <option value="Household/Tools">Household/Tools</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Keys">Keys</option>
          <option value="Musical Equipment">Musical Equipment</option>
          <option value="Sporting Goods">Sporting Goods</option>
          <option value="Toys">Toys</option>
          <option value="Wallets">Wallets</option>
          <option value="Others">Others</option>
        </select>
        <label>Where did you find it?</label>
        <input
          type="text"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <label>Description</label>
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <h2>Contact Information</h2>
        <label>Please enter your name</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Please enter your email</label>
        <input
          type="text"
          placeholder="example@gmail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Please enter your phone number</label>
        <input
          type="text"
          placeholder="(703)888-8888"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <h3>Thanks for your help!</h3>
        <button>Submit</button>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default CreateForm;

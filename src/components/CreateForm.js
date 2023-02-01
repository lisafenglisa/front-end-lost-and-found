import React, { useState } from "react";
import axios from "axios";
import "./CreateForm.css";
import FileUpload from "./FileUpload";
import FileList from "./FileList";

function CreateForm(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [files, setFiles] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  const submitForm = () => {
    axios.post("http://localhost:3000/api/v1/items", {
      title: title,
      category: category,
      location: location,
      description: description,
      finder_name: name,
      email: email,
      phone: phone,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setCategory("");
    setLocation("");
    setDescription("");
    setName("");
    setEmail("");
    setPhone("");
    setFiles([]);
  };

  return props.trigger ? (
    <form
      onSubmit={handleSubmit}
      className="CreateForm"
      action="/api/v1/items/"
      method="POST"
      encType="multipart/form-data"
    >
      <div className="uploadPost">
        <h2>Report A Found Item</h2>
        <label>What item did you find?</label>
        <input
          type="text"
          value={title}
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Category</label>
        <select
          value={category}
          name="category"
          onChange={(e) => setCategory(e.target.value)}
        >
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
          value={location}
          name="location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <label>Description</label>
        <textarea
          value={description}
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <h2>Contact Information</h2>
        <label>Please enter your name</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Please enter your email</label>
        <input
          type="text"
          value={email}
          name="email"
          placeholder="example@gmail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Please enter your phone number</label>
        <input
          type="text"
          value={phone}
          name="phone"
          placeholder="(703)888-8888"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label>Upload file</label>
        <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
        <FileList files={files} removeFile={removeFile} />
        <h3>Thanks for your help!</h3>
        <button type="submit" onClick={submitForm}>
          Submit
        </button>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
      </div>
    </form>
  ) : (
    ""
  );
}

export default CreateForm;

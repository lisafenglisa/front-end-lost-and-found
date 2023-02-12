import React, { useState } from "react";
import axios from "axios";
import "./CreateForm.css";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function CreateForm(props) {
  // handle empty input error
  const [showText, setShowText] = useState(false);
  const [error, setError] = useState(false);
  // handle upload image file
  const [imageUpload, setImageUpload] = useState(null);
  // handle all the input data
  const [category, setCategory] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    description: "",
    finder_name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const uploadImage = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref);
    // console.log("uploadImage", url);
    return url;
  };

  // text shows after form submitted
  const Text = () => <h2 className="thanks">Thanks for your help!</h2>;

  // submit form
  const submitForm = async () => {
    if (
      formData.title.length === 0 ||
      formData.finder_name.length === 0 ||
      formData.email.length === 0
    ) {
      setError(true);
    }
    if (formData.title && formData.finder_name && formData.email) {
      const url = await uploadImage();
      axios.post("https://lost-n-found.herokuapp.com/api/v1/items", {
        ...formData,
        category: category,
        image_url: url,
      });
      setShowText(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory("");
    setFormData({
      title: "",
      location: "",
      date: "",
      description: "",
      finder_name: "",
      email: "",
      phone: "",
    });
  };

  return props.trigger ? (
    <div>
      <form onSubmit={handleSubmit} className="CreateForm">
        <div className="uploadPost">
          <div className="report">
            <div className="report-item">
              <h2>Report A Found Item</h2>
              <label>What item did you find? *</label>
              <input
                type="text"
                value={formData.title}
                name="title"
                onChange={handleChange}
              />
              {error ? <p className="error">Item title can't be empty</p> : ""}
              <label>Category</label>
              <select
                value={category}
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>-- Please Select Category --</option>
                <option value="Animals/Pets">Animals/Pets</option>
                <option value="Bags,Baggage,Luggage">
                  Bags,Baggage,Luggage
                </option>
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
                value={formData.location}
                name="location"
                onChange={handleChange}
              />
              <label>When did you find it?</label>
              <input
                type="text"
                value={formData.date}
                name="date"
                placeholder="MM/DD/YYYY"
                onChange={handleChange}
              />
              <label>Description</label>
              <textarea
                value={formData.description}
                name="description"
                onChange={handleChange}
              />
            </div>
            <div className="contact-info">
              <h2>Contact Information</h2>
              <label>Please enter your name *</label>
              <input
                type="text"
                value={formData.finder_name}
                name="finder_name"
                onChange={handleChange}
              />
              {error ? <p className="error">Name can't be empty</p> : ""}
              <label>Please enter your email *</label>
              <input
                type="text"
                value={formData.email}
                name="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
              />
              {error ? <p className="error">Email can't be empty</p> : ""}
              <label>Please enter your phone number</label>
              <input
                type="text"
                value={formData.phone}
                name="phone"
                placeholder="(703)888-8888"
                onChange={handleChange}
              />
            </div>
          </div>
          <label>Upload Image</label>
          <div className="upload">
            <div className="file-input">
              <input
                type="file"
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />
            </div>
          </div>
          <button
            className="button-78"
            type="submit"
            onClick={(event) => {
              submitForm();
            }}
          >
            Submit
          </button>
          <div>{showText ? <Text /> : null}</div>
          <button
            className="close-btn"
            onClick={(event) => {
              props.setTrigger(false);
              setShowText(false);
              setError(false);
            }}
          >
            X
          </button>
        </div>
      </form>
    </div>
  ) : (
    ""
  );
}

export default CreateForm;

import React from "react";
import "./category.css";

const Category = () => {
  return (
    <div>
      <h1 className="category-title">Browse by Category</h1>
      <div className="category-wrap">
        <div className="cate pet">Animals/Pets</div>
        <div className="cate bag">Bags,Baggage,Luggage</div>
        <div className="cate book">Books</div>
        <div className="cate cloth">Clothing</div>
        <div className="cate card">Credit/ATM Card</div>
        <div className="cate money">Currency/Money</div>
        <div className="cate doc">Documents</div>
        <div className="cate elec">Electronics</div>
        <div className="cate glass">Glasses</div>
        <div className="cate tool">Household/Tools</div>
        <div className="cate jew">Jewelry</div>
        <div className="cate key">Keys</div>
        <div className="cate music">Musical Equipment</div>
        <div className="cate sport">Sporting Goods</div>
        <div className="cate toy">Toys</div>
        <div className="cate wallet">Wallets</div>
        <div className="cate other">Others</div>
      </div>
    </div>
  );
};

export default Category;

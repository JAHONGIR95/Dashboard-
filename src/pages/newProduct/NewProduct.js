import { Publish } from "@material-ui/icons"
import React from "react"
import "./newProduct.scss"

function NewProduct() {
    return (
        <div className="new-product">
            <h1 className="product-title">New Product</h1>
            <form className="product-form">
                <div className="new-product-item">
                    <label htmlFor="file">Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="new-product-item">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Apple Airpods" />
                </div>
                <div className="new-product-item">
                    <label htmlFor="stock">stock</label>
                    <input type="file" id="stock" placeholder="123" />
                </div>
                <div className="new-product-item">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="product-button">Update</button>
            </form>
        </div>
    )
}

export default NewProduct

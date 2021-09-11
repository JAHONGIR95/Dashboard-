import { Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { productChart } from '../../chartData'
import Chart from '../../components/chart/Chart'
import './product.scss'

function Product() {
    return (
        <div className="product">
            <div className="product-container">
                <h1 className="product-title">Product</h1>
                <Link to="/newproduct">
                    <button className="product-add-button">Create</button>
                </Link>
            </div>
            <div className="product-top">
                <div className="product-top-left">
                    <Chart data={productChart} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="product-top-right">
                    <div className="product-info-top">
                        <img src="https://w0.peakpx.com/wallpaper/313/555/HD-wallpaper-emily-rudd-2019-emily-rudd-model-girls-actress-celebrities.jpg" alt="" className="info-top-img" />
                        <span className="product-name">Apple airpods</span>
                    </div>
                    <div className="product-info-bottom">
                        <div className="bottom-container">
                            <span className="product-info-key">id:</span>
                            <span className="product-info-value">123</span>
                        </div>
                        <div className="bottom-container">
                            <span className="product-info-key">sales:</span>
                            <span className="product-info-value">5123</span>
                        </div>
                        <div className="bottom-container">
                            <span className="product-info-key">active:</span>
                            <span className="product-info-value">yes</span>
                        </div>
                        <div className="bottom-container">
                            <span className="product-info-key">in stock:</span>
                            <span className="product-info-value">no</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form className="product-form">
                    <div className="product-form-left">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpods"/>
                        <label>in Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="product-form-right">
                        <div className="product-upload">
                            <img src="https://w0.peakpx.com/wallpaper/313/555/HD-wallpaper-emily-rudd-2019-emily-rudd-model-girls-actress-celebrities.jpg" alt="" className="upload-img" />
                            <label htmlFor="file"><Publish /></label>
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <button className="product-button">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product

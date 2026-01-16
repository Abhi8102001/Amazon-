import React, { useState } from 'react';
import './products.css';

import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../../redux/actions/actions';
const Products = () => {
    const handleAddtoCart = () => {

    }
    const [cart, setCart] = useState([]);

    const Products = [
        {
            id: 1,
            title: "Samsung Galaxy M07 (Black, 4GB RAM, 64GB Storage) | MediaTek Helio G99 | IP54 Rating | 50MP Camera | 5000mAh Battery",
            price: 7849,
            image: "https://m.media-amazon.com/images/I/610lbucItmL._AC_UL320_.jpg",
        },
        {
            id: 2,
            title: "Redmi A4 5G (Sparkle Purple, 4GB RAM, 128GB Storage) | 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging",
            price: 8799,
            image: "https://m.media-amazon.com/images/I/81BGKLI+cWL._AC_UL320_.jpg",
        },
        {
            id: 3,
            title: "Redmi A4 5G (Sparkle Purple, 6GB RAM, 128GB Storage) | SD 4s Gen 2 | 6.88in 120Hz | 50MP Dual Camera",
            price: 8799,
            image: "https://m.media-amazon.com/images/I/81BGKLI+cWL._AC_UL320_.jpg",
        },
        {
            id: 4,
            title: "Redmi A4 5G (Starry Black, 4GB RAM, 128GB Storage) | 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging",
            price: 8799,
            image: "https://m.media-amazon.com/images/I/718HzJbvY1L._AC_UL320_.jpg",
        },
        {
            id: 5,
            title: "iQOO Z10x 5G (Ultramarine, 6GB RAM, 128GB Storage) | 6500 mAh Battery | Dimensity 7300 | Military-Grade",
            price: 14999,
            image: "https://m.media-amazon.com/images/I/61oa+zoqwmL._AC_UL320_.jpg",
        },
    ];
    //Add to cart handler
    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log(product);
        alert(`${product.title} added to cart!`);
        console.log("Cart:", [...cart, product]);
    };
    console.log(cart)
    return (
        <div className="productpage">

            {/* TOP BANNER */}
            <div className="producttopbanner">
                <div className="producttopbanneritems">Electronics</div>
                <div className="producttopbanneritemssubmenu">Mobiles & Accessories</div>
                <div className="producttopbanneritemssubmenu">Laptops & Accessories</div>
                <div className="producttopbanneritemssubmenu">TV & Home Entertainment</div>
                <div className="producttopbanneritemssubmenu">Audio</div>
                <div className="producttopbanneritemssubmenu">Cameras</div>
                <div className="producttopbanneritemssubmenu">Computer Peripherals</div>
                <div className="producttopbanneritemssubmenu">Smart Technology</div>
                <div className="producttopbanneritemssubmenu">Office & Stationary</div>
            </div>

            <div className="productspagemain">

                {/* LEFT SIDEBAR */}
                <div className="productspagemainleftcateogry">
                    {/* CATEGORY */}
                    <div className="productspagemainleftcateogrytitle">Category</div>
                    <div className="breadcrumb">&lt; Electronics</div>

                    <div className="productspagemainleftcateogrytitle">
                        Mobiles & Accessories
                        <div className="productspagemainleftcateogrytitlecontent">Mobiles Accessories</div>
                        <div className="productspagemainleftcateogrytitlecontent">SIM Cards</div>
                        <div className="productspagemainleftcateogrytitlecontent">Mobile Broadband Devices</div>
                        <div className="productspagemainleftcateogrytitlecontent">Smartphones & Basic Mobiles</div>
                        <div className="productspagemainleftcateogrytitlecontent">SmartWatches</div>
                    </div>

                    {/* AMAZON PRIME */}
                    <div className="filterblock">
                        <div className="filtertitle">Amazon Prime</div>
                        <label className="checkboxrow">
                            <input type="checkbox" />
                            <span>✅</span>
                            <span className="primetext">prime</span>
                        </label>
                    </div>

                    {/* DELIVERY DAY */}
                    <div className="filterblock">
                        <div className="filtertitle">Delivery Day</div>
                        <label className="checkboxrow">
                            <input type="checkbox" />
                            <span>Get it by Tomorrow</span>
                        </label>
                    </div>

                    {/* CUSTOMER REVIEWS */}
                    <div className="filterblock">
                        <div className="filtertitle">Customer Reviews</div>
                        <div className="reviewrow"><span className="stars">★★★★★</span>&nbsp;& Up</div>
                        <div className="reviewrow"><span className="stars">★★★★☆</span>&nbsp;& Up</div>
                        <div className="reviewrow"><span className="stars">★★★☆☆</span>&nbsp;& Up</div>
                    </div>

                    {/* ITEM CONDITION */}
                    <div className="filterblock">
                        <div className="filtertitle">Item Condition</div>
                        <label className="checkboxrow">
                            <input type="checkbox" />
                            <span>New</span>
                        </label>
                    </div>

                    {/* PRICE */}
                    <div className="filterblock">
                        <div className="filtertitle">Price</div>
                        <div className="linkrow">Under ₹1,000</div>
                        <div className="linkrow">₹1,000 – ₹5,000</div>
                        <div className="linkrow">₹5,000 – ₹10,000</div>
                        <div className="linkrow">₹10,000 – ₹20,000</div>
                        <div className="linkrow">Over ₹20,000</div>
                    </div>

                    {/* DEALS */}
                    <div className="filterblock">
                        <div className="filtertitle">Deals & Discounts</div>
                        <div className="linkrow">All Discounts</div>
                        <div className="linkrow">Buy More, Save More</div>
                        <div className="linkrow">Coupons</div>
                        <div className="linkrow">Today's Deals</div>
                    </div>

                    {/* MADE FOR AMAZON */}
                    <div className="filterblock">
                        <div className="filtertitle">Made for Amazon Brands</div>
                        <label className="checkboxrow">
                            <input type="checkbox" />
                            <span>Made for Amazon</span>
                        </label>
                    </div>

                    {/* SELLER */}
                    <div className="filterblock">
                        <div className="filtertitle">Seller</div>
                        {[
                            'Cocoblu Retail',
                            'Clicktech Retail Private Ltd',
                            'Clicktech Business',
                            'TheGiftKart',
                            'Pikkme',
                            'Spigen India',
                            'LuxuryKase'
                        ].map((seller, i) => (
                            <label key={i} className="checkboxrow">
                                <input type="checkbox" />
                                <span>{seller}</span>
                            </label>
                        ))}
                    </div>

                    {/* TOP BRANDS */}
                    <div className="filterblock">
                        <div className="filtertitle">Top Brands in Electronics</div>
                        <label className="checkboxrow">
                            <input type="checkbox" />
                            <span>Top Brands</span>
                        </label>
                    </div>

                    {/* NEW ARRIVALS */}
                    <div className="filterblock">
                        <div className="filtertitle">New Arrivals</div>
                        <div className="linkrow">Last 30 days</div>
                        <div className="linkrow">Last 90 days</div>
                    </div>

                    {/* AVAILABILITY */}
                    <div className="filterblock">
                        <div className="filtertitle">Availability</div>
                        <label className="checkboxrow">
                            <input type="checkbox" />
                            <span>Include Out of Stock</span>
                        </label>
                    </div>

                    {/* DISCOUNT */}
                    <div className="filterblock">
                        <div className="filtertitle">Discount</div>
                        <div className="linkrow">10% Off or more</div>
                        <div className="linkrow">25% Off or more</div>
                        <div className="linkrow">35% Off or more</div>
                        <div className="linkrow">50% Off or more</div>
                        <div className="linkrow">60% Off or more</div>
                        <div className="linkrow">70% Off or more</div>
                    </div>

                </div>
                <div className="productspagemainright">
                    <div classNAme="productspagemainrighttopbanner">
                        1-12 of over 80,000 results for <span className='productspagemainrighttopbannerspan'>Mobiles & Accessories</span>
                    </div>
                    <div className="itemsimageproductpage">


                        {/* PRODUCT CARD 1*/}


                        <div className="itemsimageproductpageone">
                            <span className="bestseller">Best seller</span>

                            <div className="imgblockitemsimageproductpageone">
                                <img
                                    src="https://m.media-amazon.com/images/I/610lbucItmL._AC_UL320_.jpg"
                                    className="productimageproduct"
                                    alt=""
                                />
                            </div>

                            <div className="productdetails">
                                <p className="producttitle">
                                    Samsung Galaxy M07 (Black, 4GB RAM, 64GB Storage) | MediaTek Helio G99 | IP54 Rating | 50MP Auto Focus Camera | 7.6mm Slim | 5000mAh Battery| 25W Fast Charging | 6 Gen..
                                </p>

                                <div className="ratingrow">
                                    <span className='number'>4.2</span>
                                    <span className="stars">★★★★☆</span>
                                    <i class="a-icon a-icon-popover"></i>
                                    <span className="ratingcount">(4.2)</span>
                                </div>

                                <p className="boughttext">5K+ bought in past month</p>

                                <p className="price">
                                    ₹7,849 <span className="mrp">₹9,999</span> <span className="off">(22% off)</span>
                                </p>

                                <p className="delivery">
                                    <span className='payment'>Up to 5% back with Amazon Pay ICICI card</span><br />
                                    FREE delivery <b>Wed, 14 Jan</b><br />
                                    Or fastest delivery <b>Tomorrow, 13Jan</b>
                                </p>
                                <button className="addtocartbtn" onClick={() => addToCart(Products)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>


                        {/* PRODUCT CARD 2*/}


                        <div className="itemsimageproductpageone">
                            <span className="bestseller">Best seller</span>

                            <div className="imgblockitemsimageproductpageone">
                                <img src="https://m.media-amazon.com/images/I/81BGKLI+cWL._AC_UL320_.jpg" className="productimageproduct" alt="" />
                            </div>

                            <div className="productdetails">
                                <p className="producttitle">
                                    Redmi A4 5G (Sparkle Purple, 4GB RAM, 128GB Storage) | Segment Largest 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging | Charger in The Box
                                </p>

                                <div className="ratingrow">
                                    <span classname="number">4.0</span>
                                    <span className="stars">★★★★☆</span>
                                    <i class="a-icon a-icon-popover"></i>
                                    <span className="ratingcount">(461)</span>
                                </div>

                                <p className="boughttext">5K+ bought in past month</p>

                                <p className="price">
                                    ₹8799 <span className="mrp">₹11,999</span>
                                    <span className="off">(27% off)</span>
                                </p>
                                <p className="delivery">
                                    <span className='payment'>Up to 5% back with Amazon Pay ICICI card</span><br />
                                    FREE delivery <b>Wed, 14 Jan</b><br />
                                    Or fastest delivery <b>Tomorrow, 13 Jan</b>
                                </p>
                                <button className="addtocartbtn" onClick={() => addToCart(Products)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>


                        {/* PRODUCT CARD 3*/}


                        <div className="itemsimageproductpageone">
                            <span className="bestseller">Best seller</span>

                            <div className="imgblockitemsimageproductpageone">
                                <img src="https://m.media-amazon.com/images/I/81BGKLI+cWL._AC_UL320_.jpg" className="productimageproduct" alt="" />
                            </div>

                            <div className="productdetails">
                                <p className="producttitle">
                                    Redmi A4 5G (Sparkle Purple, 6GB RAM, 128GB Storage) | Global Debut SD 4s Gen 2 | Segment Largest 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging
                                </p>
                                <div className="ratingrow">
                                    <span classname="number">4.0</span>
                                    <span className="stars">★★★★☆</span>
                                    <i class="a-icon a-icon-popover"></i>
                                    <span className="ratingcount">(11.1K)</span>
                                </div>

                                <p className="boughttext">5K+ bought in past month</p>

                                <p className="price">
                                    ₹8799 <span className="mrp">₹11,999</span>
                                    <span className="off">(27% off)</span>
                                </p>
                                <p className="delivery">
                                    <span className='payment'>Up to 5% back with Amazon Pay ICICI card</span><br />
                                    FREE delivery <b>Wed, 14 Jan</b><br />
                                    Or fastest delivery <b>Tomorrow, 13 Jan</b>
                                </p>
                                <button className="addtocartbtn" onClick={() => addToCart(Products)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>


                        {/* PRODUCT CARD 4*/}


                        <div className="itemsimageproductpageone">
                            <span className="bestseller">Best seller</span>

                            <div className="imgblockitemsimageproductpageone">
                                <img src="https://m.media-amazon.com/images/I/718HzJbvY1L._AC_UL320_.jpg" className="productimageproduct" alt="" />
                            </div>

                            <div className="productdetails">
                                <p className="producttitle">
                                    Redmi A4 5G (Starry Black, 4GB RAM, 128GB Storage) | Segment Largest 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging | Charger in The Box                                </p>
                                <div className="ratingrow">
                                    <span classname="number">4.0</span>
                                    <span className="stars">★★★★☆</span>
                                    <i class="a-icon a-icon-popover"></i>
                                    <span className="ratingcount">(11.1K)</span>
                                </div>

                                <p className="boughttext">5K+ bought in past month</p>

                                <p className="price">
                                    ₹8799 <span className="mrp">₹11,999</span>
                                    <span className="off">(27% off)</span>
                                </p>
                                <p className="delivery">
                                    <span className='payment'>Up to 5% back with Amazon Pay ICICI card</span><br />
                                    FREE delivery <b>Wed, 14 Jan</b><br />
                                    Or fastest delivery <b>Tomorrow, 13 Jan</b>
                                </p>
                                <button className="addtocartbtn" onClick={() => addToCart(Products)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>


                        {/* PRODUCT CARD 5*/}


                        <div className="itemsimageproductpageone">
                            <span className="bestseller">Best seller</span>

                            <div className="imgblockitemsimageproductpageone">
                                <img src="https://m.media-amazon.com/images/I/61oa+zoqwmL._AC_UL320_.jpg" className="productimageproduct" alt="" />
                            </div>

                            <div className="productdetails">
                                <p className="producttitle">
                                    iQOO Z10x 5G (Ultramarine, 6GB RAM, 128GB Storage) | 6500 mAh Large Capacity Battery | Dimensity 7300 Processor | Military-Grade Durability
                                </p>
                                <div className="ratingrow">
                                    <span classname="number">4.4</span>
                                    <span className="stars">★★★★☆</span>
                                    <i class="a-icon a-icon-popover"></i>
                                    <span className="ratingcount">(9.2K)</span>
                                </div>

                                <p className="boughttext">5K+ bought in past month</p>

                                <p className="price">
                                    ₹14,999 <span className="mrp">₹17,499</span>
                                    <span className="off">(14% off)</span>
                                </p>
                                <p className="delivery">
                                    <span className='payment'>Up to 5% back with Amazon Pay ICICI card</span><br />
                                    FREE delivery <b>Wed, 14 Jan</b><br />
                                    Or fastest delivery <b>Tomorrow, 13 Jan</b>
                                    <button className="addtocartbtn" onClick={() => addToCart(Products)}>
                                        Add to Cart
                                    </button>
                                </p>
                            </div>
                        </div>

                        {/* PRODUCT CARD 6*/}

                        <div className="itemsimageproductpageone">
                            <span className="bestseller">Best seller</span>

                            <div className="imgblockitemsimageproductpageone">
                                <img src="https://m.media-amazon.com/images/I/61WM6IDaBPL._AC_UL320_.jpg" className="productimageproduct" alt="" />
                            </div>

                            <div className="productdetails">
                                <p className="producttitle">
                                    iQOO Z10R 5G (Aquamarine, 8GB RAM, 128GB Storage) | 32MP 4K Selfie Camera | Quad-Curved AMOLED Display | Dimensity 7400 Processor with 750K+ AnTuTu"                                </p>
                                <div className="ratingrow">
                                    <span classname="number">4.3</span>
                                    <span className="stars">★★★★☆</span>
                                    <i class="a-icon a-icon-popover"></i>
                                    <span className="ratingcount">(3.1K)</span>
                                </div>

                                <p className="boughttext">3K+ bought in past month</p>

                                <p className="price">
                                    ₹20,999 <span className="mrp">₹23,499</span>
                                    <span className="off">(11% off)</span>
                                </p>
                                <p className="delivery">
                                    <span className='payment'>Save extra with No Cost EMI</span><br />
                                    FREE delivery <b>Thu, 15 Jan</b><br />
                                    Or fastest delivery <b>Tomorrow, 14 Jan</b>
                                    <button className="addtocartbtn" onClick={() => addToCart(Products)}>
                                        Add to Cart
                                    </button>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Products;

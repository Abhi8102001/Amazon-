import React from 'react'
import './cart.css'

const Cart = () => {
  return (
    <div className="cart">

      <div className="topleftcart">
        <div className="topleftcarttitle">Shopping Cart</div>
        <div className="cartpricetextdivider">Price</div>

        {/*CARD DETAILS 1*/}

        <div className="cartitemblock">

          {/* IMAGE */}
          <div className="cartitemleftblockimage">
            <img
              src="https://m.media-amazon.com/images/I/61oa+zoqwmL._AC_AA180_.jpg"
              alt="product"
            />
          </div>

          {/* DETAILS */}
          <div className="cartitemdetails">

            <div className="cartitemproductname">
              iQOO Z10x 5G (Ultramarine, 6GB RAM, 128GB Storage) | 6500 mAh Large Capacity Battery | Dimensity 7300 Processor | Military-Grade…
            </div>

            <div className="instockcart">In stock</div>

            <div className="eligiblefreeshop">
              Eligible for FREE Shipping
            </div>

            <img
              className="fullfilling"
              src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.jpg"
              alt="fulfilled"
            />

            <div className="giftoption">
              <input type="checkbox" />
              <span>This will be a gift</span>
              <span className="learnmore">Learn more</span>
            </div>

            <div className="productmeta">
              <div><b>Size:</b> 6GB+128GB</div>
              <div><b>Colour:</b> Ultramarine</div>
            </div>

            {/* ACTIONS */}
            <div className="cartactionrow">

              <div className="qtybox">
                <span className="trash">-</span>
                <span className="qty">1</span>
                <span className="plus">+</span>
              </div>

              <span className="actionlink">Delete</span>
              <span className="actionlink">Save for later</span>
              <span className="actionlink">See more like this</span>
              <span className="actionlink">Share</span>

            </div>
          </div>

          {/* PRICE */}
          <div className="cartitemprice">
            ₹14,999.00
          </div>

        </div>

        {/*CARD DETAILS 2*/}

        <div className="cartitemblock">

          {/* IMAGE */}
          <div className="cartitemleftblockimage">
            <img
              src="https://m.media-amazon.com/images/I/610lbucItmL._AC_AA180_.jpg"
              alt="product"
            />
          </div>

          {/* DETAILS */}
          <div className="cartitemdetails">

            <div className="cartitemproductname">
                Samsung Galaxy M07 (Black, 4GB RAM, 64GB Storage) | MediaTek Helio G99 | IP54 Rating | 50MP Auto Focus Camera | 7.6mm Slim | 5…            </div>

            <div className="instockcart">In stock</div>

            <div className="eligiblefreeshop">
              Eligible for FREE Shipping
            </div>

            <img
              className="fullfilling"
              src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.jpg"
              alt="fulfilled"
            />

            <div className="giftoption">
              <input type="checkbox" />
              <span>This will be a gift</span>
              <span className="learnmore">Learn more</span>
            </div>

            <div className="productmeta">
              <div><b>Size:</b> 4GB+64GB</div>
              <div><b>Colour:</b>Black</div>
            </div>
            {/* ACTIONS */}
            <div className="cartactionrow">
              <div className="qtybox">
                <span className="trash">-</span>
                <span className="qty">1</span>
                <span className="plus">+</span>
              </div>

              <span className="actionlink">Delete</span>
              <span className="actionlink">Save for later</span>
              <span className="actionlink">See more like this</span>
              <span className="actionlink">Share</span>

            </div>
          </div>

          {/* PRICE */}
          <div className="cartitemprice">
            ₹7,499.00
          </div>
          

        </div>

        {/*CARD DETAILS 3*/}

        <div className="cartitemblock">

          {/* IMAGE */}
          <div className="cartitemleftblockimage">
            <img
              src="https://m.media-amazon.com/images/I/81BGKLI+cWL._AC_AA180_.jpg"
              alt="product"
            />
          </div>

          {/* DETAILS */}
          <div className="cartitemdetails">

            <div className="cartitemproductname">
                Redmi A4 5G (Sparkle Purple, 4GB RAM, 128GB Storage) | Segment Largest 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging | Cha…            
            </div>
            <div className="instockcart">In stock</div>

            <div className="eligiblefreeshop">
              Eligible for FREE Shipping
            </div>

            <img
              className="fullfilling"
              src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.jpg"
              alt="fulfilled"
            />

            <div className="giftoption">
              <input type="checkbox" />
              <span>This will be a gift</span>
              <span className="learnmore">Learn more</span>
            </div>

            <div className="productmeta">
              <div><b>Size:</b> 4GB+128GB</div>
              <div><b>Colour:</b>Sparkale Purple</div>
            </div>

            {/* ACTIONS */}
            <div className="cartactionrow">

              <div className="qtybox">
                <span className="trash">-</span>
                <span className="qty">1</span>
                <span className="plus">+</span>
              </div>

              <span className="actionlink">Delete</span>
              <span className="actionlink">Save for later</span>
              <span className="actionlink">See more like this</span>
              <span className="actionlink">Share</span>

            </div>
          </div>

          {/* PRICE */}
          <div className="cartitemprice">
            ₹8.799.00
          </div>

        </div>

      </div>

      <div className='toprightcart'>
        <div className='subtotaltitle'>Subtotal({2}items): <span className='subtotaltitlespan'>₹31,297.00</span>
        <div className='giftaddto'>
            <input type='checkbox'/>
            <div>This orders contains a gift</div>
        </div>
        <div className='proceedtobuy'>Proceed To Buy</div>
        </div>
      </div>
    </div>
  )
}

export default Cart

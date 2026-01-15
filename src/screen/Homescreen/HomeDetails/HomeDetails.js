import React, { useRef } from "react";
import "./HomeDetails.css";
const HomeDetails = () => {
  const scroll1 = useRef(null);
  const scroll2 = useRef(null);

  const slideLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const slideRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="HomeDetails">

      {/* ===== CARD 1 ===== */}
      <div className="HomeDetaillongcard">
        <div className="HomeDetaillongcardtitle">
          Starting ₹70,348 | From daily commutes to weekend thrills
        </div>

        <div className="sliderWrapper">
          <button className="navBtn left" onClick={() => slideLeft(scroll1)}>‹</button>

          <div className="scrolldiv" ref={scroll1}>
            {[
              "71zKnIsrqML","61BLhBS-1tL","711g1waxWpL","71Wnw7s8XHL",
              "41cPVqv6fML","71RfLrAqGgL","71hbadRlx-L","51UAsPAhpFL",
              "615tp46ZxWL","717D4EU0adL","71eVxoBbUsL","71JVMUr1k5L",
              "711g1waxWpL","71dIZrsz2LL","617VVyhYS9L","51Dh4tQ8jiL"
            ].map((img, i) => (
              <div className="HomeDetaillongcarditem" key={i}>
                <img
                  className="HomeDetaillongcarditemimg"
                  src={`https://m.media-amazon.com/images/I/${img}._AC_SY200_.jpg`}
                  alt=""
                />
              </div>
            ))}
          </div>

          <button className="navBtn right" onClick={() => slideRight(scroll1)}>›</button>
        </div>
      </div>

      {/* ===== CARD 2 ===== */}
      <div className="HomeDetaillongcard">
        <div className="HomeDetaillongcardtitle">
          Up to 60% off | Cookware, kitchen tool & more | Amazon Launchpad
        </div>

        <div className="sliderWrapper">
          <button className="navBtn left" onClick={() => slideLeft(scroll2)}>‹</button>

          <div className="scrolldiv" ref={scroll2}>
            {[
              "51WLLO95EmL","619sSmzbUjL","71wGvVv88uL","513QTB9p4hL",
              "71aHbP5M2HL","51WmCssta3L","41ggFXk-slL","512wpyNp2qL",
              "51BERzTThLL","615-8A+JnRL","510ndNm8mBL","81A+DM0nS-L",
              "51sTasV5+cL","513bEiC74lL","51WkwwaN8TL"
            ].map((img, i) => (
              <div className="HomeDetaillongcarditem" key={i}>
                <img
                  className="HomeDetaillongcarditemimg"
                  src={`https://m.media-amazon.com/images/I/${img}._AC_SY200_.jpg`}
                  alt=""
                />
              </div>
            ))}
          </div>
          <button className="navBtn right" onClick={() => slideRight(scroll2)}>›</button>
        </div>        
      </div>
    </div>
    
  );
};

export default HomeDetails;

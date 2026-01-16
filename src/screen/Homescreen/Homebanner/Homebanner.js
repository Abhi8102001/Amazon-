import react from 'react';
import './Homebanner.css'
const bannerimages = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Dhananjaya/Category-Hero_Asin-PC_Day-1-onwards_WM_2x._CB773498629_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debaishx/Mipoco/Category-Hero_Asin-PC_3000x1200_Day-0._CB773501130_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/rabhinak/wd/gw/pc/GW_Hero_Pc__Budget_Unrec._CB773498819_.jpg"
];
const Homebanner = () => {
    return(
        <div className="Homebanner">
            <img className="Homebannerimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/Nov25Bx/D335634842_PC_1_1x._CB779735513_.jpg"/>
            <div className="graybackgroundHomebanner"></div>
            <div className="HomebannerItemDiv">
                <div className= "HomebannerItemDivcard">
                    <div className="HomebannerItemDivcardtitle">Revamp your home in style & Furnitures</div>
                    <div className= "imgHomebannerItemDivcard">
                        <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"/>
                            <div className="imgbannerimgname">Cushion covers, bedsheets & more</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"/>
                            <div className="imgbannerimgname">Figurines, vases & more</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"/>
                            <div className="imgbannerimgname">Home Storage</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"/>
                            <div className="imgbannerimgname">Lighting Solutions</div>
                        </div>
                    </div>
                    <a href='#' className ="seemorehomebanner">Explore all</a>
                </div>
                <div className= "HomebannerItemDivcard">
                    <div className="HomebannerItemDivcardtitle">Bulk order discounts + Up to 18% GST savings</div>
                    <div className= "imgHomebannerItemDivcard">
                        <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/Laptops_186_116_10._SY116_CB777673831_.jpg"/>
                            <div className="imgbannerimgname">Up to 45% off | Laptops</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/KitchenAppliances_186_116_10._SY116_CB777673831_.jpg"/>
                            <div className="imgbannerimgname">Up to 60% off | Kitchen appliances</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/OfficeChairs_186_116_10._SY116_CB777673831_.jpg"/>
                            <div className="imgbannerimgname">Min. 50% off | Office furniture</div>
                        </div>
                        <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/dec/bau/ain/gw/ABdelivery_186_116._SY116_CB776314701_.jpg"/>
                            <div className="imgbannerimgname">Up to 60% off | for Business Purchases</div>
                        </div>
                    </div>
                    <a href='#' className ="seemorehomebanner">Create a free account</a>
                </div>
                <div className= "HomebannerItemDivcard">
                    <div className="HomebannerItemDivcardtitle">Appliances for your home | Up to 55% off</div>
                    <div className= "imgHomebannerItemDivcard">
                        <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"/>
                            <div className="imgbannerimgname">Air conditioners</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"/>
                            <div className="imgbannerimgname">Refrigerators</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"/>
                            <div className="imgbannerimgname">Microwaves</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"/>
                            <div className="imgbannerimgname">Washing Machines</div>
                        </div>
                    </div>
                    <a href='#' className ="seemorehomebanner">See More</a>
                </div>
                <div className= "HomebannerItemDivcard">
                    <div className="HomebannerItemDivcardtitle">Starting ₹49 | Deals on home essentials</div>
                    <div className= "imgHomebannerItemDivcard">
                        <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg"/>
                            <div className="imgbannerimgname">Cleaning supplies</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg"/>
                            <div className="imgbannerimgname">Bathroom accessories</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg"/>
                            <div className="imgbannerimgname">Home tools</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg"/>
                            <div className="imgbannerimgname">Wallpapers</div>
                        </div>
                    </div>
                    <a href='#' className ="seemorehomebanner">Explore all</a>
                </div>
                <div className= "HomebannerItemDivcard">
                    <div className="HomebannerItemDivcardtitle">Automotive essentials | Up to 60% off</div>
                    <div className= "imgHomebannerItemDivcard">
                        <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg"/>
                            <div className="imgbannerimgname">Cleaning accessories</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"/>
                            <div className="imgbannerimgname">Tyre & rim care</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"/>
                            <div className="imgbannerimgname">Helmets</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"/>
                            <div className="imgbannerimgname">Vacuum cleaner</div>
                        </div>
                    </div>
                    <a href='#' className ="seemorehomebanner">See More</a>
                </div>
                <div className= "HomebannerItemDivcard">
                    <div className="HomebannerItemDivcardtitle">Starting ₹199 | Amazon Brands & more</div>
                    <div className= "imgHomebannerItemDivcard">
                        <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg"/>
                            <div className="imgbannerimgname">Starting ₹199 | bedsheets</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg"/>
                            <div className="imgbannerimgname">Starting ₹199 | curtains</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg"/>
                            <div className="imgbannerimgname">Minimum 40% off | ironing boards & more</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg"/>
                            <div className="imgbannerimgname">Up to 60% off | Home decor</div>
                        </div>
                    </div>
                    <a href='#' className ="seemorehomebanner">See more</a>
                </div>
                <div className= "HomebannerItemDivcard">
                    <div className="HomebannerItemDivcardtitle">Up to 50% off | Baby care & toys | Amazon Brands</div>
                    <div className= "imgHomebannerItemDivcard">
                        <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_2_1x._SY116_CB788857785_.jpg"/>
                            <div className="imgbannerimgname">Up to 50% off | Baby diapers & wipes</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_1_1x._SY116_CB788857785_.jpg"/>
                            <div className="imgbannerimgname">up to 50% off | Ride ons </div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_3_1x._SY116_CB788857785_.jpg"/>
                            <div className="imgbannerimgname">Starting ₹649 | RC cars</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_4_1x._SY116_CB788857785_.jpg"/>
                            <div className="imgbannerimgname">up to 50% off | Baby safety essentials</div>
                        </div>
                    </div>
                    <a href='#' className ="seemorehomebanner">See all offers</a>
                </div>
                <div className= "HomebannerItemDivcard">
                    <div className="HomebannerItemDivcardtitle">Starting ₹149 | Headphones</div>
                    <div className= "imgHomebannerItemDivcard">
                        <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg"/>
                            <div className="imgbannerimgname">Starting ₹249 | boAt</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg"/>
                            <div className="imgbannerimgname">Starting ₹349 | boult</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg"/>
                            <div className="imgbannerimgname">Starting ₹649 | Noise</div>
                        </div>
                         <div className="imgbannerhomeDiv">
                            <img className="imgbannerhomeDivimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg"/>
                            <div className="imgbannerimgname">Starting ₹149 | Zebronics</div>
                        </div>
                    </div>
                    <a href='#' className ="seemorehomebanner">See all offers</a>
                </div>
                
            </div>
        </div>
    )
}
export default Homebanner
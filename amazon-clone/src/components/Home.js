import React from "react";
import "./Home.css";
import Product from "./Product";

function Banner() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__banner">
          <img
            className="home__banner__img"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          />
        </div>
        <div className="home__product__row">
          <Product
            id="1"
            title="Corsair Vengeance LPX 16GB (2 X 8GB) DDR4 3600 (PC4-28800) C18 1.35V Desktop Memory - Black (CMK16GX4M2D3600C18)"
            price={84.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51kHiPeTSmL._AC_SL1000_.jpg"
          />
          <Product
            id="2"
            title="CORSAIR VENGEANCE RGB 16GB (2x8GB) DDR4 4266MHz C19 Desktop Memory - Black"
            price={99.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71ylQfVaclL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__product__row">
          <Product
            id="3"
            title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
            price={179.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_UL400_SR300,400_.jpg"
          />
          <Product
            id="4"
            title="MSI Arsenal Gaming AMD Ryzen 2ND and 3rd Gen AM4 M.2 USB 3 DDR4 DVI HDMI Crossfire ATX Motherboard (B450 TOMAHAWK MAX II)"
            price={159.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91td3mS0aRL._AC_SS450_.jpg"
          />
          <Product
            id="5"
            title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler
            Visit the AMD Store"
            price={379.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
          />
        </div>
        <div className="home__product__row">
          <Product
            id="6"
            title="
            SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
            price={1599.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61SQz8S%2BfEL._AC_SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

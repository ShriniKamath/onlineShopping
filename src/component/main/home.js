import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import ActionHome from "material-ui/svg-icons/action/home";
import muiThemeable from "material-ui/styles/muiThemeable";
import HeaderComponent from '../common/HeaderComponent'
import MenuBarComponent from '../common/MenuBarComponent'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends Component {
  state = {
    purchaseEntry: false
  };
  onPurchaseClick = () => {
    window.open("/purchaseEntry", "_self");
  };
  componentDidMount(){
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <HeaderComponent/>  
        <MenuBarComponent/>
      
       <div className="section">
         <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="./img/shop01.png" alt=""/>
                </div>
                <div className="shop-body">
                  <h3>Laptop Collection</h3>
                  <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="./img/shop03.png" alt=""/>
                </div>
                <div className="shop-body">
                  <h3>Accessories Collection</h3>
                  <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="./img/shop02.png" alt=""/>
                </div>
                <div className="shop-body">
                  <h3>Cameras Collection</h3>
                  <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">New Products</h3>
                <div className="section-nav">
                  <ul className="section-tab-nav tab-nav">
                    <li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                    <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                    <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                    <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
                  </ul>
                </div>
              </div>
            </div>
             <div className="col-md-12">
              <div className="row">
                <div className="products-tabs">
                   <div id="tab1" className="tab-pane active">
                    <div className="products-slick" id="products-slick1" data-nav="#slick-nav-1">
                    <Slider {...settings}>
       
      
                       <div className="product">
                        <div className="product-img">
                          <img src="./img/product01.png" alt=""/>
                          <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Category</p>
                          <h3 className="product-name"><a href="#">product name goes here</a></h3>
                          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                        </div>
                      </div>
                       <div className="product">
                        <div className="product-img">
                          <img src="./img/product02.png" alt=""/>
                          <div className="product-label">
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Category</p>
                          <h3 className="product-name"><a href="#">product name goes here</a></h3>
                          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                        </div>
                      </div>
                       <div className="product">
                        <div className="product-img">
                          <img src="./img/product03.png" alt=""/>
                          <div className="product-label">
                            <span className="sale">-30%</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Category</p>
                          <h3 className="product-name"><a href="#">product name goes here</a></h3>
                          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                          <div className="product-rating">
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                        </div>
                      </div>
                       <div className="product">
                        <div className="product-img">
                          <img src="./img/product04.png" alt=""/>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Category</p>
                          <h3 className="product-name"><a href="#">product name goes here</a></h3>
                          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                        </div>
                      </div>
                      <div className="product">
                        <div className="product-img">
                          <img src="./img/product05.png" alt=""/>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Category</p>
                          <h3 className="product-name"><a href="#">product name goes here</a></h3>
                          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                        </div>
                      </div>
                      </Slider>
                    </div>
                    <div id="slick-nav-1" className="products-slick-nav"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  <div id="hot-deal" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hot-deal">
                <ul className="hot-deal-countdown">
                  <li>
                    <div>
                      <h3>02</h3>
                      <span>Days</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>10</h3>
                      <span>Hours</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>34</h3>
                      <span>Mins</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>60</h3>
                      <span>Secs</span>
                    </div>
                  </li>
                </ul>
                <h2 className="text-uppercase">hot deal this week</h2>
                <p>New Collection Up to 50% OFF</p>
                <a className="primary-btn cta-btn" href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
  
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">Top selling</h3>
                <div className="section-nav">
                  <ul className="section-tab-nav tab-nav">
                    <li className="active"><a data-toggle="tab" href="#tab2">Laptops</a></li>
                    <li><a data-toggle="tab" href="#tab2">Smartphones</a></li>
                    <li><a data-toggle="tab" href="#tab2">Cameras</a></li>
                    <li><a data-toggle="tab" href="#tab2">Accessories</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="products-tabs">
                  <div id="tab2" className="tab-pane fade in active">
                    <div className="products-slick" data-nav="#slick-nav-2">
                      <div className="product">
                        <div className="product-img">
                          <img src="./img/product06.png" alt=""/>
                          <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Category</p>
                          <h3 className="product-name"><a href="#">product name goes here</a></h3>
                          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                        </div>
                      </div>
                      <div className="product">
                        <div className="product-img">
                          <img src="./img/product07.png" alt=""/>
                          <div className="product-label">
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Category</p>
                          <h3 className="product-name"><a href="#">product name goes here</a></h3>
                          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                        </div>
                      </div>
                       <div className="product">
                        <div className="product-img">
                          <img src="./img/product08.png" alt=""/>
                          <div className="product-label">
                            <span className="sale">-30%</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Category</p>
                          <h3 className="product-name"><a href="#">product name goes here</a></h3>
                          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                          <div className="product-rating">
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                        </div>
                      </div>
                       <div className="product">
                        <div className="product-img">
                          <img src="./img/product09.png" alt=""/>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Category</p>
                          <h3 className="product-name"><a href="#">product name goes here</a></h3>
                          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                        </div>
                      </div>
                       <div className="product">
                        <div className="product-img">
                          <img src="./img/product01.png" alt=""/>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Category</p>
                          <h3 className="product-name"><a href="#">product name goes here</a></h3>
                          <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                        </div>
                      </div>
                     </div>
                    <div id="slick-nav-2" className="products-slick-nav"></div>
                  </div>
                   </div>
              </div>
            </div>
           </div>
         </div>
       </div>
       <div className="section">
         <div className="container">
           <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title">Top selling</h4>
                <div className="section-nav">
                  <div id="slick-nav-3" className="products-slick-nav"></div>
                </div>
              </div>
  
              <div className="products-widget-slick" data-nav="#slick-nav-3">
                <div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product07.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product08.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product09.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                 </div>
  
                <div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product01.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product02.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product03.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
  
            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title">Top selling</h4>
                <div className="section-nav">
                  <div id="slick-nav-4" className="products-slick-nav"></div>
                </div>
              </div>
  
              <div className="products-widget-slick" data-nav="#slick-nav-4">
                <div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product04.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                  <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product05.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                  <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product06.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                 </div>
  
                <div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product07.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product08.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product09.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
  
            <div className="clearfix visible-sm visible-xs"></div>
  
            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title">Top selling</h4>
                <div className="section-nav">
                  <div id="slick-nav-5" className="products-slick-nav"></div>
                </div>
              </div>
  
              <div className="products-widget-slick" data-nav="#slick-nav-5">
                <div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product01.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product02.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product03.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                 </div>
  
                <div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product04.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product05.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                   <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product06.png" alt=""/>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
  
          </div>
         </div>
       </div>
       
       <div id="newsletter" className="section">
         <div className="container">
           <div className="row">
            <div className="col-md-12">
              <div className="newsletter">
                <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                <form>
                  <input className="input" type="email" placeholder="Enter Your Email"/>
                  <button className="newsletter-btn"><i className="fa fa-envelope"></i> Subscribe</button>
                </form>
                <ul className="newsletter-follow">
                  <li>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         </div>
       </div>
       <footer id="footer">
         <div className="section">
           <div className="container">
             <div className="row">
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">About Us</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                  <ul className="footer-links">
                    <li><a href="#"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
                    <li><a href="#"><i className="fa fa-phone"></i>+021-95-51-84</a></li>
                    <li><a href="#"><i className="fa fa-envelope-o"></i>email@email.com</a></li>
                  </ul>
                </div>
              </div>
  
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Categories</h3>
                  <ul className="footer-links">
                    <li><a href="#">Hot deals</a></li>
                    <li><a href="#">Laptops</a></li>
                    <li><a href="#">Smartphones</a></li>
                    <li><a href="#">Cameras</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </div>
              </div>
  
              <div className="clearfix visible-xs"></div>
  
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Information</h3>
                  <ul className="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Orders and Returns</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>
  
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Service</h3>
                  <ul className="footer-links">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">View Cart</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Track My Order</a></li>
                    <li><a href="#">Help</a></li>
                  </ul>
                </div>
              </div>
            </div>
           </div>
         </div>
         <div id="bottom-footer" className="section">
          <div className="container">
             <div className="row">
              <div className="col-md-12 text-center">
                <ul className="footer-payments">
                  <li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
                  <li><a href="#"><i className="fa fa-credit-card"></i></a></li>
                  <li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
                  <li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
                  <li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
                  <li><a href="#"><i className="fa fa-cc-amex"></i></a></li>
                </ul>
                <span className="copyright">
                   Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                 </span>
              </div>
            </div>
           </div>
         </div>
       </footer>
      
      </div>
    );
  }
}

export default (Home);

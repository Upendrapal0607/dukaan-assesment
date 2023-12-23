// Useful import 
import React from "react";
import styled from "styled-components";
import payment from "../Images/payment.png";
import image from "../Images/Image.png";
import select from "../Images/select-icon.png";
import home from "../Images/Home.png";
import catalog from "../Images/Catalogue.png";
import analytics from "../Images/Analytics.png";
import appearence from "../Images/Appearance.png";
import customer from "../Images/Customers.png";
import delivary from "../Images/Delivery.png";
import discount from "../Images/Discounts.png";
import manage from "../Images/Manage.png";
import marketing from "../Images/Marketing.png";
import order from "../Images/Orderse.png";
import Pages from "../Images/Pages.png";
import plugin from "../Images/Plugin.png";

// Side navbar componant
export const SideNavbar = () => {
  return (
    <DIV>
      <div className="side-nav-content">
        <div className="image-icon">
          <div className="img">
            <img src={image} alt="" />
            <div className="logo-containt">
              <p className="nishyan">Nishyan</p>
              <a className="visit" href="#">
                Visit store
              </a>
            </div>
          </div>
          <div className="select-icon">
            <img src={select} alt="" />
          </div>
        </div>
        <div className="options">
          <img src={home} alt="home" />
          <p>Home</p>
        </div>
        <div className="options">
          <img src={order} alt="order" />
          <p>Orders</p>
        </div>
        <div className="options">
          <img src={catalog} alt="catologs" />
          <p>Products</p>
        </div>
        <div className="options">
          <img src={delivary} alt="delivery" />
          <p>Delivery</p>
        </div>
        <div className="options">
          <img src={marketing} alt="marketing" />
          <p>Marketing</p>
        </div>
        <div className="options">
          <img src={analytics} alt="analytics" />
          <p>Analytics</p>
        </div>
        <div className="payout options">
          <img src={payment} alt="payment" />
          <p>Payouts</p>
        </div>
        <div className="options">
          <img src={discount} alt="discount" />
          <p>Discounts</p>
        </div>
        <div className="options">
          <img src={customer} alt="customer" />
          <p>Audience</p>
        </div>
        <div className="options">
          <img src={appearence} alt="appearence" />
          <p>Appearence</p>
        </div>
        <div className="options">
          <img src={plugin} alt="plugin" />
          <p>Plugins</p>
        </div>
      </div>
      <div className="valid-creadit">
        <div className="valid-creadit-content">
          <div className="valet-img">
            <img src={payment} alt="payment" />
          </div>
          <div className="valet-text">
            <p className="available-credits-text">Available credits</p>
            <p className="available-credits-number">222.10</p>
          </div>
        </div>
      </div>
    </DIV>
  );
};

// Style of side navbar 
const DIV = styled.div`
  width: 224px;
  height: 922px;
  background-color: #1e2040;

  .image-icon {
    display: flex;
    width: 192px;
    align-items: center;
    justify-content: space-between;
    border: 0px solid green;
    gap: 12px;
    padding: 8px 16px;
  }
  .select-icon > img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    display: flex;
    width: 20px;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
  }
  .img {
    display: flex;
    gap: 12px;
  }
  .image-icon > .img {
    width: 120px;
    height: 39px;
    position: relative;
    left: 0.5px;
    top: 0.5px;
    display: flex;
    align-items: center;
  }
  .img > img {
    width: 40px;
    height: 30px;
    padding: 0px;
    cursor: pointer;
  }
  .logo-containt {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .payout {
    background-color: #353c53;
  }
  .nishyan {
    align-self: stretch;
    color: #fff;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
  .visit {
    color: #ffffff93;
    font-family: Galano Grotesque;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    text-decoration-line: underline;
    align-self: stretch;
    width: 100px;
  }

  .select-icon > img {
    display: flex;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    align-items: flex-start;
    gap: 12px;
    padding: 0px;
    cursor: pointer;
  }

  .side-nav-content {
    width: 208px;
    height: 820px;
    gap: 24px;
    margin: 6px auto;
  }
  .options {
    color: #fff;
    display: flex;
    width: 208px;
    padding: 8px 16px;
    align-items: flex-start;
    gap: 12px;
    border-radius: 4px;
    cursor: pointer;
  }

  .options > img {
    display: flex;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    align-items: flex-start;
    gap: 12px;
  }
  .options > p {
    color: #fff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  .valid-creadit {
    border: 0px solid blue;
    width: 192px;
    height: 54px;
    padding: 6px, 12px, 6px, 12px;
    border-radius: 4px;
    gap: 10px;
    margin: 35px auto;
  }
  .valid-creadit-content {
    display: flex;
    border: 0px solid blue;
    padding: 6px, 12px, 6px, 12px;
    width: 149px;
    height: 42px;
    border-radius: 4px;
    gap: 12px;
    margin: 6px auto;
    background-color: #353c53;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
  }

  img {
    background-color: #fff;
  }

  .valet-text {
    text-align: left;
  }
  .available-credits-text {
    color: #ffffff83;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  .available-credits-number {
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;

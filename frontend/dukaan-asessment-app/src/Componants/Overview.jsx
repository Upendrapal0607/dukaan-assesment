// Import
import React from "react";
import styled from "styled-components";
import select from "../Images/select-icon.png";
import help from "../Images/Help.png";

// Overview componant
export const Overview = () => {
  return (
    <DIV>
      <div className="overview-main">
        <div className="month">
          <div className="overview-btn-box">
            <button>Overview</button>
          </div>
          <div className="this-month-box">
            <p>This Month</p>
            <img src={select} alt="" />
          </div>
        </div>
        <div className="next-payout">
          <div className="green-card">
            <div className="light-green-card">
              <div className="amount-proceed-main amount-proceed-main-color">
                <p>Next Payout</p>
                <img className="help" src={help} alt="help" />
              </div>
              <div className="order-1">
                <h2>₹2,312.23</h2>
                <a href="#">23 oreders {">"}</a>
              </div>
            </div>
            <div className="dark-green-card"></div>
          </div>
          <div className="amount-pending">
            <div className="amount-pending-top">
              <div className="amount-proceed-main">
                <p>Amount Pending</p>
                <img className="help" src={help} alt="help" />
              </div>
              <div className="order-2">
                <h2>₹92,312.20</h2>
                <a href="#">23 oreders {">"}</a>
              </div>
            </div>
            <div></div>
          </div>
          <div className="amount-proceed">
            <div className="amount-proceed-top">
              <div className="amount-proceed-main">
                <p>Amount Processed</p>
                <img className="help" src={help} alt="help" />
              </div>
              <div className="order-3">
                <h2>₹23,92,312.19</h2>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </DIV>
  );
};

// Overview style
const DIV = styled.div`
  .overview-main {
    width: 1152px;
    height: 214px;
    margin: 32px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    background-color: #f2f2f2;
  }
  .month {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }

  .amount-proceed-main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .amount-proceed-main-color {
    color: #fff;
  }
  .overview-btn-box > button {
    color: #1a181e;
    font-family: Galano Grotesque;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
  }
  .this-month-box {
    display: flex;
    justify-content: center;
    gap: 8px;
    align-items: center;
  }
  .this-month-box > p {
    color: #4d4d4d;
    font-family: Galano Grotesque;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .this-month-box > img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
  .next-payout {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
  }
  .green-card {
    width: 370.66px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);
  }
  .light-green-card {
    display: flex;
    height: 118px;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    border-radius: 8px 8px 0px 0px;
    background: #146eb4;
  }
  .order-1 > h2 {
    color: #fff;
    font-family: Galano Grotesque;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
  }
  .order-1 > a {
    color: #fff;
    font-family: Galano Grotesque;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration-line: underline;
  }
  .order-3,
  .order-2,
  .order-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
  .dark-green-card {
    display: flex;
    width: 370.67px;
    height: 36px;
    padding: 8px 24px;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 0px 0px 8px 8px;
    background: #0e4f82;
  }
  .amount-pending {
    width: 370.66px;
    height: 118px;

    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex: 1 0 0;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);
  }
  .amount-pending-top {
    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
  }
  .order-3 > h2,
  .order-2 > h2 {
    color: #1a181e;
    font-family: Galano Grotesque;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
  }
  .order-2 > a {
    color: #146eb4;
    font-family: Galano Grotesque;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration-line: underline;
  }

  .amount-proceed {
    width: 370.66px;
    height: 118px;

    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex: 1 0 0;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);
  }
  .amount-proceed-top {
    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
  }
`;

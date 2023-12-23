//  Important import 
import React, { useState } from "react";
import styled from "styled-components";
import search from "../Images/Search.png";
import download from "../Images/download.png";
import sort from "../Images/Sort.png";
import triangle from "../Images/Triangle.png";
import ellipse1 from "../Images/Ellipse1.png";
import ellipse2 from "../Images/Ellipse2.png";
//  List of transaction
let sowData = [
  {
    status: "Processing",
    transactionId: "131634495747",
    orderAmount: "10,125.00",
    transactionFees: "1,125.00",
    total: "9,312",
  },
  {
    status: "Processing",
    transactionId: "131634495747",
    orderAmount: "10,125.00",
    transactionFees: "1,125.00",
    total: "9,312",
  },
  {
    status: "Successful",
    transactionId: "131634495747",
    orderAmount: "10,125.00",
    transactionFees: "1,125.00",
    total: "9,312",
  },
  {
    status: "Successful",
    transactionId: "131634495747",
    orderAmount: "10,125.00",
    transactionFees: "1,125.00",
    total: "9,312",
  },
  {
    status: "Successful",
    transactionId: "131634495747",
    orderAmount: "10,125.00",
    transactionFees: "1,125.00",
    total: "9,312",
  },
  {
    status: "Successful",
    transactionId: "131634495747",
    orderAmount: "10,125.00",
    transactionFees: "1,125.00",
    total: "9,312",
  },
  {
    status: "Successful",
    transactionId: "131634495747",
    orderAmount: "10,125.00",
    transactionFees: "1,125.00",
    total: "9,312",
  },
  {
    status: "Successful",
    transactionId: "131634495747",
    orderAmount: "10,125.00",
    transactionFees: "1,125.00",
    total: "9,312",
  },
  {
    status: "Processing",
    transactionId: "131634495747",
    orderAmount: "10,125.00",
    transactionFees: "1,125.00",
    total: "9,312",
  },
  {
    status: "Successful",
    transactionId: "131634495747",
    orderAmount: "10,125.00",
    transactionFees: "1,125.00",
    total: "9,312",
  },
];
// Transaction Componant
export const Transaction = () => {
  const [transactionHistory, setTransactionHistory] = useState(sowData);

  return (
    <DIV>
      <div className="transaction-main">
        <p className="transactions">Transactions | This Month</p>

        <div className="refund">
          <button className="btn-1">Payout{"(22)"}</button>
          <button className="btn-2">Refunds{"(2)"}</button>
        </div>
        <div className="title">
          <div className="title-top">
            <div className="input-icon">
              <img src={search} alt="icon" />
              <input type="text" />
            </div>
            <div className="sort-download">
              <div className="sort-icon">
                <p>sort</p>
                <img src={sort} alt="sort" />
              </div>
              <img src={download} alt="download" />
            </div>
          </div>
          <div className="title-bottom">
            <div>
              <img src={triangle} alt="triangle" />
            </div>
            <p className="spacer-2"></p>
            <p className="transaction-id">Transaction ID</p>
            <p className="order-amount">Order amount</p>
            <p className="transaction-fees">Transaction fees</p>
            <p className="total">Total</p>
          </div>
        </div>
        <div className="history-data-main">
          {transactionHistory.map((el, index) => (
            <div key={index} className="title-bottom">
              <div></div>
              <div className="spacer-main">
                <img
                  src={el.status == "Successful" ? ellipse1 : ellipse2}
                  alt=""
                />
                <p className="spacer-2">{el.status}</p>
              </div>
              <p className="transaction-id">{el.transactionId}</p>
              <p className="order-amount">₹{el.orderAmount}</p>
              <p className="transaction-fees">₹{el.transactionFees}</p>
              <p className="total">₹{el.total}</p>
            </div>
          ))}
        </div>
      </div>
    </DIV>
  );
};

// Style of transaction componants
const DIV = styled.div`
  .transaction-main {
    width: 1152px;
    height: 548px;
    margin: 12px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .transactions {
    color: #1a181e;
    font-family: Galano Grotesque;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
  }
  .refund {
    display: flex;
    gap: 12px;
  }
  .btn-1,
  .btn-2 {
    display: flex;
    padding: 6px 16px;
    align-items: center;
    gap: 6px;
  }
  .btn-1 {
    border-radius: 40px;
    background: #146eb4;
  }
  .btn-2 {
    border-radius: 40px;
    background: #e6e6e6;
  }
  .title {
    display: flex;
    flex-direction: column;
    width: 98%;
    margin: 2px auto;
  }
  .title-top {
    display: flex;
    justify-content: space-between;
  }
  .input-icon {
    display: flex;
    padding: 10px 16px;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    width: 248px;
    align-items: flex-start;
  }
  .input-icon > img {
    width: 14px;
    height: 14px;
    margin-right: -35px;
    margin-top: 5px;
    z-index: 1;
  }
  .input-icon > input {
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    outline: none;
    color: #999;
    font-family: Galano Grotesque;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .sort-download {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .sort-download > img {
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    padding: 3px;
    border: 1px solid #f2f2f2;
    cursor: pointer;
  }
  .sort-icon {
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid #f2f2f2;
    padding: 0px 8px;
  }
  .sort-icon > p {
    color: #4d4d4d;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .sort-icon > img {
    width: 16px;
    height: 16px;
    padding: 2px;
    cursor: pointer;
  }

  .title-bottom {
    border: 0px solid green;
    display: flex;
    background-color: #f2f2f2;
    justify-content: space-between;
    padding: 4px;
  }
  .title-bottom > div {
    border: 0px solid blue;
    width: 151px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .title-bottom > div > img {
    width: 8px;
    height: 8px;
    margin-left: 40px;
  }
  .order-amount,
  .transaction-fees,
  .total {
    width: 151px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: -1px;
    flex: 1 0 0;
    color: #4d4d4d;
    text-align: right;
    font-family: Galano Grotesque;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  .spacer-2,
  .transaction-id {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: -1px;
    flex: 1 0 0;
    color: #4d4d4d;
    text-align: right;
    font-family: Galano Grotesque;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  .spacer-main {
    display: flex;
    align-items: flex-start;
    gap: 2px;
    flex: 1 0 0;
    color: #4d4d4d;
    text-align: right;
    font-family: Galano Grotesque;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  .history-data-main {
    display: flex;
    flex-direction: column;
    width: 98%;
    margin: -23px auto;
  }
  .history-data-main > div {
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    padding: 8px 4px;
  }
`;

// Important import 
import React from "react";
import styled from "styled-components";
import search from "../Images/Search.png";
import group from "../Images/Group.png";
import menu from "../Images/Menu.png";
import help from "../Images/Help.png";

// Dashboard componant
export const Dashboard = () => {
  return (
    <DIV>
      <div className="dashboard-main">
        <div className="message">
          <img className="help" src={help} alt="help" />
          <p className="message-text">How it works</p>
        </div>
        <div className="search">
          <img className="search-icon" src={search} alt="search" />
          <input
            className="search-input"
            type="text"
            placeholder="Search features, tutorials, etc."
          />
        </div>
        <div className="notification">
          <img src={group} alt="group" className="anounce-icon" />
          <img src={menu} alt="menu" className="tag-icon" />
        </div>
      </div>
    </DIV>
  );
};

// Dasboard style
const DIV = styled.div`
  .dashboard-main {
    display: flex;
    width: 1216px;
    padding: 12px 32px;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid #d9d9d9;
    background: #fff;
  }
  .message {
    width: 360px;
    display: flex;
    justify-content: center;
    gap: 16px;
    flex: 1 0 0;
    gap: 12px;
    flex: 1 0 0;
  }
  .message-text {
    color: #4d4d4d;
    font-family: Galano Grotesque;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  .help {
    width: 14px;
    height: 14px;
  }
  .search {
    display: flex;
    width: 400px;
    padding: 9px 16px;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 6px;
    background: #f2f2f2;
  }
  .search-input {
    color: #808080;
    font-family: Galano Grotesque;
    font-size: 15px;
    width: 90%;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    outline: none;

    background-color: #f2f2f2;
    border-radius: 4px;
  }
  .search-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
  .notification {
    width: 360px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    flex: 1 0 0;
  }
  .anounce-icon {
    width: 20px;
    height: 20px;
    padding: 0px;
  }
  .tag-icon {
    width: 24px;
    height: 24px;
    padding: 0px;
  }
`;

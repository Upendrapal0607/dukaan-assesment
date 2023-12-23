
import styled from "styled-components";
import { SideNavbar } from "./Componants/SideNavbar";
import { Dashboard } from "./Componants/Dashboard";
import { Transaction } from "./Componants/Transaction";
import { Overview } from "./Componants/Overview";
function App() {
  return (
    <DIV className="App">
      <SideNavbar />
      <div className="payout-page">
        <Dashboard/>
        <Overview/>
        <Transaction/>
      </div>
    </DIV>
  );
}

// Basic style of App coponants
export default App;
const DIV = styled.div`
  display: flex;
  width: 1440px;
  height: 922px;
  top: 22552px;
  left: 107260px;
  border: 0px solid red;
  margin: auto;
  .payout-page{
    width: 1236px;
    border: 0px solid green;
  }
`;

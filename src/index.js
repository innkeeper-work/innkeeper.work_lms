import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import { TeamsCard } from "./components/AllCards/InnkeeperPhaseTwoCards/AllUsersCards";
import { CreateTeamsStudentsCard } from "./components/AllCards/InnkeeperPhaseTwoCards/AllUsersCards";
import { AllStudentsCard } from "./components/AllCards/InnkeeperPhaseTwoCards/AllUsersCards";
import { FacilitatorsCard } from "./components/AllCards/InnkeeperPhaseTwoCards/AllUsersCards";
import { StudentsCard } from "./components/AllCards/InnkeeperPhaseTwoCards/AllUsersCards";
import { CustomerCareCard } from "./components/AllCards/InnkeeperPhaseTwoCards/AllUsersCards";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sassfiles/styles.min.css";

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <TeamsCard />
    <CreateTeamsStudentsCard />
    <AllStudentsCard />
    <FacilitatorsCard />
    <StudentsCard />
    <CustomerCareCard />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

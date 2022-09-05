import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sassfiles/styles.min.css";
import { MaterialsCard } from "./components/AllCards/InnkeeperPhaseTwoCards/InfoDetailsCards";
import { CurriculumCard } from "./components/AllCards/InnkeeperPhaseTwoCards/InfoDetailsCards";
import { AnnounceCard } from "./components/AllCards/InnkeeperPhaseTwoCards/InfoDetailsCards";
import { ViewTaskButton } from "./components/Buttons/AllTasksButtons";
import { CreateTaskButton } from "./components/Buttons/AllTasksButtons";
import { GotItButton } from "./components/Buttons/AllTasksButtons";
import { ViewAllTasksButton } from "./components/Buttons/AllTasksButtons";
import { EditTaskButton } from "./components/Buttons/AllTasksButtons";
import { PublishTaskButton } from "./components/Buttons/AllTasksButtons";
import { UpdateTaskButton } from "./components/Buttons/AllTasksButtons";
import { SubmitTaskButtonPryStyle } from "./components/Buttons/AllTasksButtons";
import { SubmitTaskButtonSec } from "./components/Buttons/AllTasksButtons";
import { ViewSubmissionsButton } from "./components/Buttons/AllTasksButtons";
import { HowItWorksButton } from "./components/Buttons/AllTasksButtons";
// import { ShowAllSubmissionsButton } from "./components/Buttons/AllTasksButtons";
import { ViewTaskButton2 } from "./components/Buttons/AllTasksButtons";

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <CurriculumCard />
    <AnnounceCard />
    <MaterialsCard />
    <ViewTaskButton />
    <ViewTaskButton2 />
    <CreateTaskButton />
    <GotItButton />
    <ViewAllTasksButton />
    <EditTaskButton />
    <PublishTaskButton />
    <UpdateTaskButton />
    <SubmitTaskButtonPryStyle />
    <ViewSubmissionsButton />
    <HowItWorksButton />
    {/* <ShowAllSubmissionsButton /> */}
    <SubmitTaskButtonSec />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

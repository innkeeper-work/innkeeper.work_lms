// List of components to be created

import React from "react";
import Data from "../../../data/InfoDetailsCards/InfoDetailsCard.json";
import { Icon } from "@iconify/react";

// AnnouncementsCard;

const StudentAnnouncementsCard = (props) => {
  const { intro, content, day, time, author } = props;
  return (
    <>
      <div className="row col col-sm-10 col-md-12 col-lg-12">
        <div className="announcementCard card shadow mx-auto ">
          <div className="">
            <h3 className="mt-4 ms-5">Announcement</h3>
            <div className="">
              <tr className=" colorText d-flex justify-content-between mb-3 announcementTable ">
                <th className="ms-4">TITILE</th>
                <th>CATEGORY</th>
              </tr>
            </div>

            <table>
              <div className="announcementContentStyle">
                <tr className="row ps-5 pb-5 ">
                  <td className="announcementintrostyle announcementSMFontSize">
                    {intro}
                  </td>
                  <td className=" announcementSMFontSize">{content}</td>
                  <td className="smallScreenFontSize">{day}</td>
                  <td className="smallScreenFontSize">{time}</td>
                  <td className="smallScreenFontSize">{author}</td>
                </tr>
              </div>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export const AnnounceCard = () => {
  return (
    <div>
      <div>
        {Data.Announcement.map((curriculum) => {
          return (
            <div className="">
              <div className="">
                <StudentAnnouncementsCard
                  {...curriculum}
                ></StudentAnnouncementsCard>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// // CurriculumCard

const Curriculum = (props) => {
  const { week, title } = props;
  return (
    <div>
      <div
        className="card shadow list-group list-group-flush m-5 curriculumCardBody "
        style={{ width: "20rem" }}
      >
        <table class="table text-center">
          <thead>
            <tr className="colorText">
              <th scope="col">HTML</th>
              {/* <th scope="col">Last</th> */}
              <th scope="col">2 WEEK</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td>{week}</td>
              {/* <td>Otto</td> */}
              <td>{title}</td>
            </tr>
            <tr>
              <td>{week}</td>
              {/* <td>Otto</td> */}
              <td>{title}</td>
            </tr>
            <tr>
              <td>{week}</td>
              {/* <td>Otto</td> */}
              <td>{title}</td>
            </tr>
            <tr>
              <td>{week}</td>
              {/* <td>Otto</td> */}
              <td>{title}</td>
            </tr>
            <tr>
              <td>{week}</td>
              {/* <td>Otto</td> */}
              <td>{title}</td>
            </tr>
            <tr>
              <td>{week}</td>
              {/* <td>Otto</td> */}
              <td>{title}</td>
            </tr>
            <tr>
              <td>{week}</td>
              {/* <td>Otto</td> */}
              <td>{title}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const CurriculumCard = () => {
  return (
    <div className="p-4 m-3">
      <h3 className="text-center colorText">Frontend Development Curriculum</h3>
      <div className="row p-1 d-flex justify-content-between ">
        {Data.CurriculumCard.map((curriculum) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <Curriculum {...curriculum}></Curriculum>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// MaterialsCard

export const MaterialsCard = () => {
  return (
    <>
      <div className="row col-md-4 col-sm-12 col-lg-12">
        <div className="card materialsCard mx-auto mb-5 pt-5 shadow">
          <table className="materialsTable ">
            <thead>
              <tr className="text-center colorText">
                <th className="blueText">NAME</th>
                <th className="blueText">OWNER</th>
                <th className="blueText">FILE SIZE</th>
                <th className="blueText">DOWNLOAD</th>
              </tr>
            </thead>

            <Icon
              className="iconStyle mt-3"
              icon="akar-icons:file"
              color="#787878"
              width="25"
              inline={true}
            />
            <tr className="text-center smallScreenFontSize">
              <td className="">How to create a react app</td>
              <td>Facilitator 2</td>
              <td>5MB</td>
              <a href="https://github.com">
                <td>https://github.com</td>
              </a>
            </tr>

            <Icon
              className="iconStyle mt-3"
              icon="akar-icons:file"
              color="#787878"
              width="25"
              inline={true}
            />
            <tr className="text-center smallScreenFontSize">
              <td className="">How to create a react app</td>
              <td>Facilitator 2</td>
              <td>5MB</td>
              <a href="https://github.com">
                <td>https://github.com</td>
              </a>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

// List of components to be created

// TasksCard
// LeaderboardCard
// LeaderboardExplanationCard
// SubmissionsCard
// GradingCard

// Images
import Gold_medal from "../../../assets/images/Phase_Two/Leaderboard/Gold_medal.png";
import Silver_medal from "../../../assets/images/Phase_Two/Leaderboard/Silver_medal.png";
import Bronze_medal from "../../../assets/images/Phase_Two/Leaderboard/Bronze_medal.png";
import clock from "../../../assets/images/Phase_Two/Leaderboard/Clock.svg";
import cross from "../../../assets/images/Phase_Two/Leaderboard/cross_icon.svg";
import person from "../../../assets/images/Phase_Two/Leaderboard/person.svg";
import Complete_task from "../../../assets/images/Phase_Two/Leaderboard/Complete_task.svg";

export const TasksCard = () => {
  return (
    <div className="Card-background">
      {/* <h1>Frontend Development</h1> */}
      <div className="card card-wrap">
        <table>
          <tr className="Card-heading">
            <td className="first">TASK TITLE</td>
            <td>TASK POINTS</td>
            <td>SUBMISSION STATUS</td>
            <td>DEADLINE</td>
            <td className="last">...</td>
          </tr>
          <tr className="Card-details ">
            <td className="first">Introduction to javascript.</td>
            <td>10</td>
            <td>Submitted</td>
            <td>July 12</td>
            <td className="last">View</td>
          </tr>
          <tr className="Card-details">
            <td className="first">Introduction to javascript.</td>
            <td>10</td>
            <td>Submitted</td>
            <td>July 12</td>
            <td className="last">View</td>
          </tr>
          <tr className="Card-details">
            <td className="first">Introduction to javascript.</td>
            <td>10</td>
            <td>Submitted</td>
            <td>July 12</td>
            <td className="last">View</td>
          </tr>
          <tr className="Card-details">
            <td className="first">Introduction to javascript.</td>
            <td>10</td>
            <td>Submitted</td>
            <td>July 12</td>
            <td className="last">View</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export const LeaderboardCard = () => {
  return (
    <div className="Card-background">
      <div className="card card-wrap">
        <table>
          <tr className="Card-heading LeaderboardCard-heading">
            <td className="first">POSITION</td>
            <td>NAME</td>
            <td className="last">POINTS</td>
          </tr>
          <tr className="Card-details ">
            <td className="first leaderboard-serial">
              <img
                className="achievement-badge"
                src={Gold_medal}
                alt="Gold medal"
              />
            </td>
            <td className="LeaderboardCard-studentName">Student 1</td>
            <td className="last LeaderboardCard-pts">450</td>
          </tr>
          <tr className="Card-details">
            <td className="first leaderboard-serial">
              <img
                className="achievement-badge"
                src={Silver_medal}
                alt="Silver medal"
              />
            </td>
            <td className="LeaderboardCard-studentName">Student 2</td>
            <td className="last LeaderboardCard-pts">450</td>
          </tr>
          <tr className="Card-details">
            <td className="first leaderboard-serial">
              <img
                className="achievement-badge"
                src={Bronze_medal}
                alt="Bronze medal"
              />
            </td>
            <td className="LeaderboardCard-studentName">Student 3</td>
            <td className="last LeaderboardCard-pts">450</td>
          </tr>
          <tr className="Card-details">
            <td className="first leaderboard-serial">4</td>
            <td className="LeaderboardCard-studentName">Student 4</td>
            <td className="last LeaderboardCard-pts">450</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export const LeaderboardExplanationCard = () => {
  return (
    <div className="card Card-background lec-background">
      <img className="lec-close" src={cross} alt="close" />
      <h1 className="lec-title mb-4">How the Leaderboard Works</h1>
      <div className="d-flex align-center mb-4">
        <img className="lec-img" src={clock} alt="clock" />
        <div>
          <h3 className="lec-explainTitle">Attendance</h3>
          <p className="lec-explainDetail">15 pts each</p>
        </div>
      </div>
      <div className="d-flex align-center mb-4">
        <img className="lec-img" src={Complete_task} alt="clock" />
        <div>
          <h3 className="lec-explainTitle">Tasks Completion</h3>
          <p className="lec-explainDetail">
            100pts on-time, 50pts late, 125pt bonus if among first ten completed
          </p>
        </div>
      </div>
      <div className="d-flex align-center mb-4">
        <img className="lec-img" src={person} alt="clock" />
        <div>
          <h3 className="lec-explainTitle">Time in Classroom</h3>
          <p className="lec-explainDetail">1pt / minute</p>
        </div>
      </div>
    </div>
  );
};

//SubmissionsCard
export const SubmissionsCard = () => {
  return (
    <div className="sc-background">
      <p className="sc-date text-end">JULY 23,2022</p>
      <h1 className="sc-topic text-center">Creating three page website</h1>
    </div>
  );
};

export const GradingCard = () => {
  let courseTitle = "Frontend Development";
  return (
    <>
      <div className="card usersCard mx-auto shadow">
        <h3 className="card-title usersCardHead  text-center mb-3 p-4 blueText">
          {courseTitle}
        </h3>
        <table className="usersTable">
          <thead>
            <tr className="text-center">
              <th className="blueText">STUDENT</th>
              <th className="blueText">SUBMISSION LINK</th>
              <th className="blueText">TASK NAME</th>
              <th className="blueText">SCORE</th>
            </tr>
          </thead>
          <tr className="text-center">
            <td className="col">
              <p className="m-0 gc-text">Student 1</p>{" "}
              <span className="text-muted gc-studentId">I4G016994XIN</span>
            </td>{" "}
            <td className="gc-text">https://github.com</td>
            <td className="gc-text">Javascript</td>
            <td>
              {" "}
              <div className="dropdown">
                <button
                  className="btn btn-secondary btn-sm dropdown-toggle grading-btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  10
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <p className="dropdown-item">20</p>
                  <p className="dropdown-item">30</p>
                  <p className="dropdown-item">40</p>
                  <p className="dropdown-item">50</p>
                  <p className="dropdown-item">60</p>
                  <p className="dropdown-item">70</p>
                  <p className="dropdown-item">80</p>
                  <p className="dropdown-item">90</p>
                  <p className="dropdown-item">100</p>
                </div>
              </div>
            </td>
          </tr>
          <tr className="text-center">
            <td className="col">
              <p className="m-0 gc-text">Student 1</p>{" "}
              <span className="text-muted gc-studentId">I4G016994XIN</span>
            </td>{" "}
            <td className="gc-text">https://github.com</td>
            <td className="gc-text">Javascript</td>
            <td className="blueText">Profile</td>
          </tr>
        </table>
      </div>
    </>
  );
};

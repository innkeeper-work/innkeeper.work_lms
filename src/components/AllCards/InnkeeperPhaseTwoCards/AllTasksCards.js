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

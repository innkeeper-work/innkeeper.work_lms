// List of components to be created

// FacilitatorsCard
// StudentsCard
// CustomerCareCard
// AllStudentsCard
export const AllStudentsCard = () => {
  let courseTitle = "Frontend Development";
  return (
    <>
      <div className="card usersCard mx-auto">
        <h3 className="card-title usersCardHead  text-center mb-3 p-4 blueText">
          {courseTitle}
        </h3>
        <table className="usersTable">
          <thead>
            <tr className="text-center">
              <th className="blueText">NAME</th>
              <th className="blueText">TOTAL POINTS</th>
              <th className="blueText">STUDENT ID</th>
              <th className="blueText">...</th>
            </tr>
          </thead>
          <tr className="text-center">
            <td>Profile</td>
            <td>Profile</td>
            <td>Profile</td>
            <td className="blueText">Profile</td>
          </tr>
          <tr className="text-center">
            <td>Profile</td>
            <td>Profile</td>
            <td>Profile</td>
            <td className="blueText">Profile</td>
          </tr>
        </table>
      </div>
    </>
  );
};
// TeamsCard
export const TeamsCard = () => {
  let courseTitle = "Frontend Development";
  return (
    <>
      <div className="card shadow mx-auto usersCard px-3 ">
        <h3 className="card-title usersCardHead  text-center mb-3 p-4 blueText">
          {courseTitle}
        </h3>
        <table className="usersTable">
          <thead>
            <tr className="text-center">
              <th className="blueText">Team Name</th>
              <th className="blueText">Team Members</th>
              <th className="blueText">Team Task</th>
            </tr>
          </thead>
          <tr className="text-center">
            <td className="blueText">Flee</td>
            <td className="blueText">Flee</td>
            <td className="taskInstructions text-start w-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              tempore sed quasi distinctio. Est vel earum sit, assumenda harum
              debitis.
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export const CreateTeamsStudentsCard = () => {
  return (
    <>
      <div className="card studentTeamsCard mx-auto mt-5">
        <p className="card-title studentTeamsCardHead text-center">Students</p>
        <table className="usersTable">
          <tr>
            <td className="blueText">Student Name</td>
            <td>Student Id</td>
          </tr>
        </table>
      </div>
    </>
  );
};

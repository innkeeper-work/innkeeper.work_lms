import { CourseinfoHero } from "../components/Hero";
import edubancimg from "../images/edubancimg.png";
import { GetStartedButton } from "../components/Buttons";

let Studentloan = () => {
  return (
    <>
      <CourseinfoHero coursename="Learn Now, Pay Later" />
      <AbouttheLoan />
      <RegProcess />
      
    </>
  );
};

let AbouttheLoan = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-5 my-3">
          <img src={edubancimg} class="card-img" alt="..." />
        </div>
        <div className="col-lg-6 col-md-7 my-auto">
          <div className="card-body">
            <h5 className="card-title">
              Innkeeper partners with Sterling bank to make students’ loan
              available for preferred course.{" "}
            </h5>
            <p className="card-text">
              This loan is available as a payment agreement- Edubanc (T and C
              apply) between the student and Sterling Bank. Students are
              required to apply for training under the desired academy
              (tech-academy/business-support-academy) to complete registration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

let RegProcess = () => {
  return (
    <div className="">
      {/* row-cols-1 row-cols-md-2 */}
      <div className="row g-0 p-lg-5 mainBg justify-content-around">
        {" "}
        <h3 className="text-center py-4">Application Procedure</h3>
        <div className="col-lg-5 col-md-6 p-3">
          <div className="card h-100 studentLoan">
            <div className="card-body ">
              <h5 className="card-title">Step 1</h5>
              <p className="card-text">
                To access the student loan to finance your training on
                Innkeeper/8thGear, you need to Sign Up as a new user or if you
                are an existing user, Sign In
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 p-3">
          <div className="card h-100 studentLoan">
            <div className="card-body">
              <h5 className="card-title">Step 2</h5>
              <p className="card-text">
                Select join Edpay as a parent/student, then click on continue.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 p-3">
          <div className="card h-100 studentLoan">
            <div className="card-body">
              <h5 className="card-title">Step 3</h5>
              <p className="card-text">Type <strong>"8thGear Partners Ltd"</strong> in the search box.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 p-3">
          <div className="card h-100 studentLoan">
            <div className="card-body">
              <h5 className="card-title">Step 4</h5>
              <p className="card-text">
                It takes you to your dashboard where you are prompted to provide
                your BVN and then you can access the loan.
              </p>
            </div>
          </div>
        </div>
        <GetStartedButton />
      </div>
    </div>
  );
};

export default Studentloan;

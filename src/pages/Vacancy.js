//External import
import React from "react";

// Components
import { VacancypageHero } from "../components/Hero";
import { VacancyApplyButton } from "../components/Buttons";
import { AvailableOpenings } from "../components/Card";
import availableopenings from "../data/availableopenings.json";

//Images
import favicon from "../assets/images/vacancy/favicon.png";

const Vacancy = () => {
  return (
    <div>
      <VacancypageHero />
      <Openings />
    </div>
  );
};

export let Openings = () => {
  return (
    <div className="container-fluid py-4">
      <div className="card-body">
        <h3 className="card-title text-center">Available Openings</h3>
        <div className="row justify-content-center mt-4">
          {availableopenings.openings.map((opening) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-10
                    "
                key={opening.id}
              >
                <AvailableOpenings {...opening}></AvailableOpenings>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Vacancy;

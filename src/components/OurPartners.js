import React from "react";
import netacad from "../images/netacad.png";
import vmware from "../images/vmware.png";
import eightgear from "../images/eightgear.png";
import microsoft from "../images/microsoft.png";

export let OurPartners = () => {
  return (
    <div className="container partnersBg">
      <div className="row ">
        <div className="col-lg-12 col-md-12 text-center position-relative">
          <img
            src={netacad}
            alt=""
            className="m-5"
            style={{ width: "15%", height: "3.3rem" }}
          />
        </div>
        <div>
          <img
            src={vmware}
            alt=""
            className="m-5"
            style={{ width: "15%", height: "3.3rem" }}
          />
        </div>
        <div>
          <img
            src={eightgear}
            alt=""
            className="m-5"
            style={{ width: "15%", height: "3.3rem" }}
          />
        </div>
        <div>
          <img
            src={microsoft}
            alt=""
            className="m-5"
            style={{ width: "15%", height: "3.3rem" }}
          />
        </div>
      </div>
    </div>
  );
};

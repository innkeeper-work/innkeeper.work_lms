// Externam import
import React from "react";

// Images
import netacad from "../images/netacad.png";
import vmware from "../images/vmware.png";
import eightgear from "../images/eightgear.png";
import microsoft from "../images/microsoft.png";

export let OurPartners = () => {
  return (
    <div className="container partnersBg">
      <div className="row my-3 d-flex justify-content-around align-items-center">
        {/* <div className="col-lg-12 col-md-12 text-center position-relative"> */}
        <img
          src={netacad}
          alt=""
          className="partners"
          // style={{ width: "25%", height: "30%" }}
        />
        {/* </div> */}
        {/* <div> */}
        <img
          src={vmware}
          alt=""
          className="partners"
          // style={{ width: "25%", height: "30%" }}
        />
        {/* </div> */}
        {/* <div> */}
        <img
          src={eightgear}
          alt=""
          className="partners"
          // style={{ width: "25%", height: "30%" }}
        />
        {/* </div> */}
        {/* <div> */}
        <img
          src={microsoft}
          alt=""
          className="partners"
          // style={{ width: "25%", height: "30%" }}
        />
        {/* </div> */}
      </div>
    </div>
  );
};

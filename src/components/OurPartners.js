import React from "react";
import netacad from "../assets/images/logos/netacad.png";
import vmware from "../assets/images/logos/vmware.png";
import eightgear from "../assets/images/logos/eightgear.png";
import microsoft from "../assets/images/logos/microsoft.png";

export let OurPartners = () => {
  return (
    <div className="container partnersBg">
      <div className="row my-3 d-flex justify-content-around align-items-center">
        {/* <div className="col-lg-12 col-md-12 text-center position-relative"> */}
        <img
          src={netacad}
          alt="netacad logo"
          className="partners"
          // style={{ width: "25%", height: "30%" }}
        />
        {/* </div> */}
        {/* <div> */}
        <img
          src={vmware}
          alt="vmware logo"
          className="partners"
          // style={{ width: "25%", height: "30%" }}
        />
        {/* </div> */}
        {/* <div> */}
        <img
          src={eightgear}
          alt="8thGear logo"
          className="partners"
          // style={{ width: "25%", height: "30%" }}
        />
        {/* </div> */}
        {/* <div> */}
        <img
          src={microsoft}
          alt="microsoft logo"
          className="partners"
          // style={{ width: "25%", height: "30%" }}
        />
        {/* </div> */}
      </div>
    </div>
  );
};

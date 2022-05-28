import { Avatar } from "@mui/material";
import React from "react";
import "./TattooInquiry.css";
import { Button } from "@mui/material";

function TattooInquiry() {
  return (
    <div className="tattoo-inquiry">
      <div className="inquiry__top">
        <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
        <div className="inquiry__contact">
          <div className="inquiry__contact__name">Azula M.</div>
          <div className="inquiry__contact__number">6204875643</div>
        </div>
        <div className="inquiry__style">Black & Grey Realism</div>
      </div>
      <div className="inquiry__middle">
        <div className="inquiry__middle__left">
          <img
            src="https://i.pinimg.com/550x/5e/29/d6/5e29d62a632d5c116416f257391bec5c.jpg"
            alt=""
          />
        </div>
        <div className="inquiry__middle__right">
          <div className="inquiry__middle__right__placement">
            <strong>Placement: </strong>Right Arm
          </div>
          <div className="inquiry__middle__right__comments">
            <strong>Additional Comments:</strong> A portrait of my father
          </div>
        </div>
      </div>
      <div className="inquiry__bottom">
        <div className="accept__button">
          <Button variant="contained" color="success">
            accept
          </Button>{" "}
        </div>
        <div className="reject__button">
          <Button variant="outlined" color="error">
            reject
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TattooInquiry;

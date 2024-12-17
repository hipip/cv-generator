import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import PersonalDetailsItem from "./PersonalDetailsItem";
import ResumeEduItem from "./ResumeEduItem";
import React from "react";
import ResumeExperienceItem from "./ResumeExperienceItem";

export default function Resume({
  personalDetails,
  education,
  experience,
  color,
}) {
  const { fullName, email, phoneNumber, address, imgUrl } = personalDetails;
  return (
    <div id="resume">
      <div
        className="resume-personal-details"
        style={{ backgroundColor: color }}
      >
        <img className="profile-pic" src={imgUrl} alt="a profile picture"></img>
        <div>
          <p id="fullname">{fullName}</p>
          <div className="another-container">
            <PersonalDetailsItem
              value={email}
              iconName={faEnvelope}
              key="email"
            />
            <PersonalDetailsItem
              value={phoneNumber}
              iconName={faPhone}
              key="phone-number"
            />
            <PersonalDetailsItem
              value={address}
              iconName={faLocationDot}
              key="address"
            />
          </div>
        </div>
      </div>
      <div className="resume-education-section">
        <h2 className="resume-education-section-title" style={{ color: color }}>
          Education
        </h2>
        {education.map((edu, idx) => (
          <>
            <ResumeEduItem edu={edu} idx={idx} color={color} key={edu.id} />
            {idx !== education.length - 1 && (
              <hr
                className="line-break"
                style={{ backgroundColor: color }}
              ></hr>
            )}
          </>
        ))}
      </div>
      <div className="resume-experience-section">
        <h2
          className="resume-experience-section-title"
          style={{ color: color }}
        >
          Experience
        </h2>
        {experience.map((exp, idx) => (
          <>
            <ResumeExperienceItem exp={exp} color={color} key={exp.id} />
            {idx !== experience.length - 1 && (
              <hr
                className="line-break"
                style={{ backgroundColor: color }}
              ></hr>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
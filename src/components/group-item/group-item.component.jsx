import React from "react";

import "./group-item.styles.scss";

const GroupItem = ({ avatar, name, members }) => (
  <div className="group-item">
    <img src={avatar} className="group-item__avatar" alt="avatar" />

    <p className="group-item__title">{name}</p>
    <p className="group-item__members">{`${members} members`}</p>
    <button className="group-item__button">View Group</button>
  </div>
);

export default GroupItem;

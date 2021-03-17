import React from "react";
import "./members-more-than-five.styles.scss";
import GroupItem from "../group-item/group-item.component";

const MembersMoreThanFive = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="group__container">
        <p className="group__container--title">More than five members</p>
        <div className="group-items">
          {data
            .filter((group, idx) => idx < 3)
            .map((group) => (
              <GroupItem
                key={group.id}
                name={group.name}
                avatar={group.avatar}
                members={group.groupMember.length}
              ></GroupItem>
            ))}
        </div>
      </div>
    </>
  );
};

export default MembersMoreThanFive;

import React from "react";
import "./members-less-five.styles.scss";
import GroupItem from "../group-item/group-item.component";

const MembersLessThanFive = ({ data }) => {
  return (
    <>
      <div className="group">
        {data
          .filter((group, idx) => idx < 4)
          .map((group) => (
            <GroupItem
              key={group.id}
              name={group.name}
              avatar={group.avatar}
              members={group.groupMember.length}
            ></GroupItem>
          ))}
      </div>
    </>
  );
};

export default MembersLessThanFive;

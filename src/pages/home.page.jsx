import React from "react";

import Header from "../components/header/header.component";
import "./homepage.styles.scss";
import MembersLessThanFive from "../components/members-less-than-five/members-less-five.components";
import MembersMoreThanFive from "../components/members-more-than-five/members-more-than-five.component";
import DATA from "../data/community_groups.json";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupData: DATA,
    };
  }
  fetchData = () => {};
  fetchLessThanFive = () => {
    let res = this.state.groupData.groups.filter(
      (group) => group.groupMember.length < 5
    );
    console.log(res.length);
    return res;
  };
  fetchMoreThanFive() {
    let res = this.state.groupData.groups.filter(
      (group) => group.groupMember.length > 5
    );
    console.log(res.length);
    return res;
  }

  render() {
    return (
      <>
        {" "}
        <Header />
        <div className="home">
          <div className="groups__container">
            <div className="title">Groups</div>
            <MembersLessThanFive data={this.fetchLessThanFive()} />
            <MembersMoreThanFive data={this.fetchMoreThanFive()} />
          </div>
        </div>
      </>
    );
  }
}

export default Home;

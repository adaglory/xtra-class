import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import "./css/votePanel.css";
import { useState } from "react";
import CoreMembers from "./coreMembers";
const VotePanel = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="votePanel">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Core Members
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Auxillary Members
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <CoreMembers />
        </TabPane>
        <TabPane tabId="2"></TabPane>
      </TabContent>
    </div>
  );
};

export default VotePanel;

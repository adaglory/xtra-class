import "./css/coreMembers.css";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from "reactstrap";
import classnames from "classnames";
import Members from "./members";
import { useState } from "react";
import member1 from "./images/member1.png";
const CoreMembers = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [members] = useState([
    { img: member1, name: "Adojah Frimpong", description: "Adojah the leader", colorTag: "BlueTeam", id: 1 },
    { img: member1, name: "Adojah Frimpong", description: "Adojah the leader", colorTag: "BlueTeam", id: 2 },
    { img: member1, name: "Adojah Frimpong", description: "Adojah the leader", colorTag: "BlueTeam", id: 3 },
  ]);
  return (
    <div className='coremembers'>
      <Container>
        <Row>
          <Col md='4'>
            <Nav tabs vertical pills>
              <NavItem className='coremembers__nav'>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Presdential
                </NavLink>
              </NavItem>
              <NavItem className='coremembers__nav'>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Vice President
                </NavLink>
              </NavItem>
              <NavItem className='coremembers__nav'>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Financial Secretary
                </NavLink>
              </NavItem>
              <NavItem className='coremembers__nav'>
                <NavLink
                  className={classnames({ active: activeTab === "4" })}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  General Secretary
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md='8'>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <Members members={members} />
              </TabPane>
              <TabPane tabId='2'>
                <h2>Tab 2</h2>
              </TabPane>
              <TabPane tabId='3'></TabPane>
              <TabPane tabId='4'></TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoreMembers;

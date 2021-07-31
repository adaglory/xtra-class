import "./css/coreMembers.css";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from "reactstrap";
import { useState } from "react";
import classnames from "classnames";
import Members from "./members";
import member1 from "./images/member1.png";
const CoreMembers = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
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
                <Container>
                  <Row>
                    <Col md='6'>
                      <Members img={member1} name={"Adojah Frimpong"} description={"adojah the leader"} colorTag={"Blue Team"} />
                    </Col>
                    <Col md='6'>
                      <Members img={member1} name={"Adojah Frimpong"} description={"adojah the leader"} colorTag={"Blue Team"} />
                    </Col>
                  </Row>
                </Container>
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

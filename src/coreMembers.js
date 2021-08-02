import "./css/coreMembers.css";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from "reactstrap";
import classnames from "classnames";
import Members from "./members";
import { useState } from "react";
import member1 from "./images/member1.png";
import member2 from "./images/image2.png";
import member3 from "./images/image3.png";
import member4 from "./images/image4.png"
const CoreMembers = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [members, setMembers] = useState([
    { img: member1, name: "Adojah Frimpong", description: "Adojah the leader", colorTag: "#000", teamColor: "Black", voteStatus: false, id: 1 },
    { img: member2, name: "Obed Ananing", description: "Obed the leader", colorTag: "#0000ff", teamColor:"Blue", voteStatus: false, id: 2 },
    { img: member3, name: "Afua Laura", description: "Laura the leader", colorTag: "#ff0000", teamColor:"Red", voteStatus: false, id: 3 },
    { img: member4, name: "Caleb Gymafi", description: "Gymafi the leader", colorTag: "#FF00FF", teamColor:"Red", voteStatus: false, id: 4 },
  ]);
  const handleVote = (id)=>{
    // const index = members.findIndex((m)=> m.id === id)
    // const member = members[index]
    // member.voteStatus = true;
    const newMembers = [...members].map((m)=>{
      if (m.id === id){
        m.voteStatus = !m.voteStatus
      }
      return m
    })
    setMembers(newMembers)
  }
  const hasVoted = members.some((m)=>m.voteStatus)
  return (
    <div className='coremembers'>
      <Container>
        <Row>
          <Col md='5'>
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
          <Col md='7'>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <Members members={members}  handleVote={handleVote}/>
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

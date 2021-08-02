import { Button, Col, Container, Row } from "reactstrap";
import "./css/members.css";
import fingerprint from "./images/fingerprint.png";
import {MdStars} from "react-icons/md"
const Members = ({members, handleVote,}) => {
const hasVoted = members.some((m)=>m.voteStatus)
  return (
    <Container className="member__container">
      <Row>
        {members &&
          members.map((member) =>{
            console.log(member)
            return (
            <Col md='6'>
              <div className='members__card' key={member.id}>
           
                <div className='member__card__content'>
                  <img top width='100%' src={member.img} className='img-fluid' alt='' />
                  <div className='card__body'>
                    <h5>{member.name}</h5>
                    <p>{member.description}</p>
                  </div>
                  <div className='color__tag' style={{backgroundColor: member.colorTag}}>
                    <p>{member.teamColor} team</p>
                  </div>
                </div>
                {/* {member.voteStatus ? (<div className='card__hover'>
                  <img src={fingerprint} alt='' />
                  <Button size='lg' outline color='primary' onClick={()=>handleVote(member.id)}>
                    UnVote
                  </Button>
                </div>):(<div />)} */}
                     {member.voteStatus ? (<div className='voted__tag'>
                       <MdStars />
                      <p>Voted</p>
                </div>):(<div />)}
           
                  {!member.voteStatus && !hasVoted ? (<div className='card__hover'>
                  <img src={fingerprint} alt='' />
                  <Button size='lg' outline color='primary' onClick={()=>handleVote(member.id)}>
                    Vote
                  </Button>
                </div>):(<div />)}
              </div>
            </Col>
          )
          } )}
      </Row>
    </Container>
  );
};

export default Members;

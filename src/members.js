import { Button, Col, Container, Row } from "reactstrap";
import "./css/members.css";
import fingerprint from "./images/fingerprint.png";
const Members = (props) => {
  const members = props.members;
  console.log(props, members);

  return (
    <Container>
      <Row>
        {members &&
          members.map((member) => (
            <Col md='6'>
              <div className='members__card' key={member.id}>
                <div className='member__card__content'>
                  <img top width='100%' src={member.img} className='img-fluid' alt='' />
                  <div className='card__body'>
                    <h5>{member.name}</h5>
                    <p>{member.description}</p>
                  </div>
                  <div className='color__tag'>
                    <p>{member.colorTag}</p>
                  </div>
                </div>
                <div className='card__hover'>
                  <img src={fingerprint} alt='' />
                  <Button size='lg' outline color='primary'>
                    Vote
                  </Button>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Members;

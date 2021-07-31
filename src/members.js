import { Button } from "reactstrap";
import "./css/members.css";
import fingerprint from "./images/fingerprint.png";
const Members = ({ img, name, description, colorTag }) => {
  return (
    <div className='members__card'>
      <div className='member__card__content'>
        <img top width='100%' src={img} className='img-fluid' alt='' />
        <div className='card__body'>
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
        <div className='color__tag'>
          <p>{colorTag}</p>
        </div>
      </div>
      <div className='card__hover'>
        <img src={fingerprint} alt='' />
        <Button size='lg' outline color='primary'>
          Vote
        </Button>
      </div>
    </div>
  );
};

export default Members;

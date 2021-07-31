import "./css/App.css";
import NavBar from "./navbar";
import xtraimage from "./images/xtra-image-1.png";
import { Container } from "reactstrap";
import VotePanel from "./votePanel";
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='app'>
        <div style={{ backgroundImage: `url(${xtraimage})` }} className='hero__bg'>
          <Container maxWidth='lg'>
            <div className='hero__description'>
              <h2>CCHN - Winneba</h2>
              <p>
                College of Community Health Nursing <br />
                2020/2021 Academic Year Elections
              </p>
            </div>
          </Container>
        </div>
        <div className=''>
          <Container>
            <VotePanel />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;

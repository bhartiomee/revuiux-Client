import React,{ useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Img3 from '../../../Assets/image/Carousel-image-3.png';
import Img2 from '../../../Assets/image/Carousel-image-2.png';
import Img1 from '../../../Assets/image/Carousel-image-1.png'

import Img4 from '../../../Assets/image/Logo-Large.png';
import './SubComponent/css/LandingPage.css';
import PATHS from '../../../routes/routes-path';
import { LOCAL_STORAGE_USER_KEY } from '../../../constants/app';

const styleButton = {
  color: "#12c2e9",
  backgroundColor: "white",
  border: "2px solid #12c2e9"
}

const LandingPage = (props) => {
const{next}=props;
const history = useHistory();
const NewResearcher = () =>{ 
  let path = `signUp/researcher`; 
  history.push(path);
}

const NewParticipant = () =>{ 
  let path = `signUp/participant`;
  history.push(path);
}

const loginpage = () =>{ 
  let path = `login`; 
  history.push(path);
}
  function ControlledCarousel() {
    
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
    };

    useEffect(() => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (user) {
        if(JSON.parse(user).potential_user_type === 1){
          history.push(next || PATHS.listProductParticipant);
        }else{
          history.push(next || PATHS.listProduct); 
        }
      }
    }, []);

    return (
      <Carousel fade activeIndex={index} onSelect={handleSelect} slide={false} prevLabel={null} prevIcon={null} nextLabel={null} nextIcon={null} >
        <Carousel.Item interval={5000}  >
          <img src={Img1} className="d-block d-80" alt="First slide" />
          <p className="carousel-caption-temp" style={{color: "#f64f59"}}>Incorporate User Feedback for a Successful Product Release.</p>
        </Carousel.Item>
        <Carousel.Item interval={5000}  >
          <img src={Img2} className="d-block d-80" alt="Second slide"/>
          <p className="carousel-caption-temp" style={{color:"#c471ed"}}>Capture User Insights Before Product Launch.</p>
        </Carousel.Item>
        <Carousel.Item interval={5000}  >
          <img src={Img3} className="d-block d-80" alt="Third slide"/>
          <p className="carousel-caption-temp">Turn Your Product Idea into Reality.</p>
        </Carousel.Item>
      </Carousel>
      );

    }
    
    return ( 

      <div className="styleLanding">
         {/* <LeftBar/> */}
          <div className="styleColumnA">
            <img className="styleLogo" src={Img4}  alt="LogoImg"/>
            <div className="content" >
              <h1 className="styleUranch" >URanch</h1>
              {/* <h2 className="styleUranch2" >Create.Research.Analyse</h2> */}
              <p><b>Optimize Your User Research to Create User Centric product</b></p>
              <p>URanch is a digital workspace to conduct User Research with<br></br> capabilities such as creating a review product, meet interested<br></br> review participants and collate all the reviews on the tool.</p>
            </div>
            <div className="styleButtons" >
              <button onClick={NewResearcher} className="buttonResearcher" >New Researcher</button>
              <button onClick={NewParticipant} className="buttonResearcher" style={styleButton}>New Participant</button>
            </div>
          </div>

          <div className="styleColumnB" > 
            <button onClick={loginpage}className="loginButtons" >Login</button>
            <div className="carouselDiv">
              <ControlledCarousel />    
            </div>
          
        </div>
      </div>
     );
}
export default LandingPage;
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import './../styles.css';

function HomePage() {

  
  const [Mails, setMails] = useState([])

  useEffect(() => {
      axios.post('/api/email/getMails')
          .then(response => {
              if (response.data.success) {
                  setMails(response.data.mails)
                  console.log(response.data.mails);
              } else {
                  alert('Failed to get Courses');
              }
          })
  }, [Mails])        


  const render=Mails.map((Pro, index) =>{
    return(
        <div class="group">
          <Row>
            <Col md="2">
              <h4>To:<h5 class="" >{Pro.rec_email}</h5> </h4>
              {/* <img class="proimg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Profile pics"></img> */}
            </Col>
            <Col>

              <span class="" >Subject </span>{Pro.subject}
              <p><span>CC</span>{Pro.cc}</p>
            </Col>
          </Row>
          <hr />
        </div>
    )
  })

  return (
      <div>
        <h1 class="rightf">Your send mails</h1>
        <br />
         {render}
             
      </div>
  );
}

export default HomePage;
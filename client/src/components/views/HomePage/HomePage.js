import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";

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
        <div>
          <Row>
            <Col md="3" xs="3">
              <img class="proimg" style={{width:"45%", marginLeft:"1rem"}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Profile pics"></img>
            </Col>
            <Col>
              <h5 class="rightf">{Pro.rec_email}</h5>
              <span class="rightf">Subject </span>{Pro.subject}
              <p><span>CC</span>{Pro.cc}</p>
            </Col>
          </Row>
          <hr />
        </div>
    )
  })

  return (
      <div>
        <h1 style={{marginLeft:"1rem" , fontWeight:"bold"}} class="rightf">Your send mails</h1>
        <br />
         {render}
             
      </div>
  );
}

export default HomePage;
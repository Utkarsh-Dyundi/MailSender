import React, { useState, useEffect} from "react";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";

function HistoryPage() {

  // const [Providers, setProviders] = useState([])

  // useEffect(() => {
  //   axios.post('/api/email/getMail',service)
  //       .then(response => {
  //           if (response.data.success) {
  //               // console.log(response.data.providers);
  //               setProviders(response.data.providers)
  //           } else {
  //               alert('Failed to get Data');
  //           }
  //       })
  // },)

  // const render=Providers.map((Pro, index) =>{
  //   return(
  //       <div>
  //         <Row>
  //           <Col md="3" xs="3">
  //             <img class="proimg" style={{width:"75%", marginLeft:"1rem"}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Profile pics"></img>
  //           </Col>
  //           <Col>
  //             <h5 class="rightf">{Pro.name}</h5>
  //             <span class="rightf">Mobile No. </span>{Pro.contact}
  //             <p><span>Address</span>{Pro.address}</p>
  //           </Col>
  //         </Row>
  //         <hr />
  //       </div>
  //   )
  // })

  return (
      <div>
        <h1 style={{marginLeft:"1rem" , fontWeight:"bold", textAlign:"center", fontFamily:"Monospace"}} class="rightf">Mails Sent</h1>
        <br />
        
        {/* {render} */}
        <div>
          <Row>
            <Col md="2" xs="3">
              <h5>TO</h5>
            </Col>
            <Col>
              <h5>Subject here</h5>
            </Col>
          </Row>
          <Row>
            <Col md="2" xs="3">
              <h5>TO</h5>
            </Col>
            <Col>
              <h5>Subject here</h5>
            </Col>
          </Row>
        </div>

        {/* <div >
           <div class="row">
             <Col class="col md-6">heloo</Col>
             <Col class="col md-6">byee</Col>
           </div>
        </div> */}
            
      </div>
  );
}

export default HistoryPage;
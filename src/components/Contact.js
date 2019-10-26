import React, { Fragment } from 'react';
import '../Css/Portfolio.css';
import MediaQuery from 'react-responsive';
import Typing from 'react-typing-animation';
import { Card, Button } from 'react-bootstrap';

const Contact = () => {
  const onClick = url => {
    window.open(url);
  };

  return (
    <Fragment>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={1024}>
        <div className='Mobile-Container'>
          <div className='Mobile-profile-content'>
            <div className='Mobile-profile'>
              <div className='Mobile-Header'>Contact</div>
              <div className='Main-Padding'></div>
              <div className='Mobile-job'>
                Feel free to contact me for any questions or information.
              </div>
            </div>
          </div>
          <div>
            <div className='Mobile-Text-Content '>
              <div className='Sub-Header '>Contact me</div>
              <div className='Mobile-Details'>
                <li>Name: Eden Elmalich.</li>
                <li>Phone: 0543241787.</li>
                <li> Email: eelmalich2@gmail.com.</li>
                <li>Profile in Linkedin.</li>

                <button
                  type='button'
                  className='btn btn-outline-dark'
                  onClick={() =>
                    onClick(
                      'https://www.linkedin.com/in/eden-elmalich-6ba820192/'
                    )
                  }
                >
                  <label>View Profile in Linkedin</label>
                </button>
              </div>
            </div>
          </div>
          <footer className='app-footer'>
            <div>&copy; 2019 Eden Elmalich</div>
          </footer>
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280} maxDeviceWidth={2560}>
        <div className='Page-Container'>
          <div className='Portfolio-Container'>
            <div className='Portfolio-Header'>Contact</div>
            <div id='Port-Position' className='Portfolio-Header'>
              Feel free to contact me for any questions or information.
            </div>
          </div>
          <div className='Portfolio-Content'>
            <Typing className='Typist-Att'>
              <Card bg='light' className='Main-Card-width'>
                <Card.Header>Contact me</Card.Header>
                <Card.Body>
                  <Card.Text>Name: Eden Elmalich.</Card.Text>
                  <Card.Text>Phone: 0543241787.</Card.Text>
                  <Card.Text>Email: eelmalich2@gmail.com</Card.Text>
                  <Card.Text>
                    <Button
                      variant='light'
                      onClick={() =>
                        onClick(
                          'https://www.linkedin.com/in/eden-elmalich-6ba820192/'
                        )
                      }
                    >
                      Linkedin Profile
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Typing>
          </div>
        </div>
        <footer className='App-footer'>
          <div>&copy; 2019 Eden Elmalich</div>
        </footer>
      </MediaQuery>
    </Fragment>
  );
};

export default Contact;

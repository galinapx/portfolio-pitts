import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout title="Galina Pitts - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">Feel free to read a short description about me.</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>My name is Galina Pitts and I am an inspiring web developer. </p>
                <p>
                I have a Bachelor degree in Social Work and I have a minor in Business Management. 
                </p>
                <p>
                Throughout my career, I have done amazing things! I am an ambitious problem solver with a passion for online business, and who would like to join a team of like-minded developers. I am precise in everything I do, I keen interest in technology, mobile applications and users experience. I am someone who takes full responsibility for my own personal development, I am continually evaluating and upgrating my skills so that I can stay at the cutting edge of web developer. 
                <p></p>
                I feel that my greatest strengths are at developing
                and maintaining a close working relationship with every
                company client, something which in turn helps me to gain
                an in-depth understanding of their individual needs. My real passion for Web Development as a whole, an obsession which allows me to spot trends and develop best practise processes.
                </p>
                
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;

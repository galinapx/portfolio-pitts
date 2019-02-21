import React from 'react';
import { Card, CardHeader, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import PortfolioCardDetail from './PortfolioCardDetail';

export default class PortfolioCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { portfolio, children } = this.props;
    const { isOpen } = this.state;

    return (
      <span onClick={this.handleToggle}>

        <PortfolioCardDetail toggle={this.handleToggle} portfolio={portfolio} isOpen={isOpen}/>

        <Card className="portfolio-card">
         
          <CardBody>
           
            <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
            {/* <CardText className="portfolio-card-text">{portfolio.description}</CardText> */}
            <CardText className="portfolio-card-text">
            <img src={portfolio.img_link} alt='alt' width='300' height='300'/>
            {/* <a href={portfolio.url_link}><img src={portfolio.img_link} alt='alt' width='300' height='300'/></a> */}
            </CardText>
            <div className='readMore'>
              {children}
            </div>
          </CardBody>
        </Card>
      </span>
    )
  }
}

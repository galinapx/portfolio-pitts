import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';

class PortfolioCardDetail extends React.Component {


  render() {
    const { isOpen, toggle, portfolio } = this.props;

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>{portfolio.title}</ModalHeader>
          <ModalBody>
            <p><b>Description: </b>{portfolio.description}</p>
            <p><a href={portfolio.url_link} target="_blank">{"Go to "+ portfolio.title} </a></p>
            <p><b>Start Date: </b>{moment(portfolio.startDate).format('MMMM YYYY')}</p>
            <p><b>End Date: </b>{portfolio.endDate ? moment(portfolio.endDate).format('MMMM YYYY') : 'Still Working Here'}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PortfolioCardDetail;

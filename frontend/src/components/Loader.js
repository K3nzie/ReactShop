import React from 'react';
import { Placeholder, Card, Row } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';

const Loader = () => {
  return (
    <>
    <Row>
      <Card className="my-3 p-3 rounded" style={{ width: '24rem' }}>
      <Card.Body>
        <Placeholder animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
    <Card className="my-3 p-3 rounded" style={{ width: '24rem' }}>
    <Card.Body>
      <Placeholder animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
    </Card.Body>
  </Card>
  <Card className="my-3 p-3 rounded" style={{ width: '24rem' }}>
  <Card.Body>
    <Placeholder animation="glow">
      <Placeholder xs={6} />
    </Placeholder>
    <Placeholder animation="glow">
      <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
      <Placeholder xs={6} /> <Placeholder xs={8} />
    </Placeholder>
  </Card.Body>
  </Card>
</Row>
    </>
  )
};

export default Loader;

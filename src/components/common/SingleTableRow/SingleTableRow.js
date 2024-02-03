import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SingleTableRow = ({ table }) => {
  return (
    <Card
      style={{ borderRight: 'none', borderTop: 'none', borderLeft: 'none' }}
    >
      <Row style={{ marginBottom: '15px', marginTop: '15px' }}>
        <Col xs={2}>
          <h1>Table {table.id}</h1>
        </Col>
        <Col
          xs={8}
          style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}
        >
          <p style={{ fontWeight: 'bold', margin: '0', paddingRight: '20px' }}>
            Status:
          </p>
          <p style={{ margin: '0' }}>{table.status}</p>
        </Col>
        <Col
          xs={2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'right',
          }}
        >
          <Link to={`/table/${table.id}`}>
            <Button variant='primary'>Show more</Button>
          </Link>
        </Col>
      </Row>
    </Card>
  );
};

export default SingleTableRow;

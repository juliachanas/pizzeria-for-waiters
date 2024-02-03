import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

const TableForm = () => {
  return (
    <div>
      <h1>Table number</h1>
      <Form>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label column sm={1} style={{ fontWeight: 'bold' }}>
            Status:
          </Form.Label>
          <Col sm={4}>
            <Form.Select aria-label='Default select example'>
              <option>Choose status..</option>
              <option value='1'>Free</option>
              <option value='2'>Busy</option>
              <option value='3'>Cleaning</option>
              <option value='4'>Reserved</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label column sm={1} style={{ fontWeight: 'bold' }}>
            People:
          </Form.Label>
          <Col sm={4} style={{ display: 'flex', alignItems: 'center' }}>
            <Form.Control style={{ width: '60px' }} type='people-amount' />
            <p
              style={{
                marginBottom: '0px',
                fontSize: '20px',
                paddingRight: '10px',
                paddingLeft: '10px',
              }}
            >
              /
            </p>
            <Form.Control style={{ width: '60px' }} type='max-people-amount' />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3'>
          <Form.Label column sm={1} style={{ fontWeight: 'bold' }}>
            Bill:
          </Form.Label>
          <Col sm={4} style={{ display: 'flex', alignItems: 'center' }}>
            <p
              style={{
                marginBottom: '0px',
                fontSize: '20px',
                paddingRight: '10px',
                paddingLeft: '10px',
              }}
            >
              $
            </p>
            <Form.Control style={{ width: '60px' }} type='pay' />
          </Col>
        </Form.Group>
        <Button type='submit'>Update</Button>
      </Form>
    </div>
  );
};

export default TableForm;

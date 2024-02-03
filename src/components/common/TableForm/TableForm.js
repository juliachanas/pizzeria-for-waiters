import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { updateTable } from '../../../redux/tablesRedux';

const TableForm = ({ ...props }) => {
  const [status, setStatus] = useState(props.status || '');
  console.log(status);

  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || '0');
  console.log(peopleAmount);

  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    props.maxPeopleAmount || '0'
  );
  console.log(maxPeopleAmount);

  const [bill, setBill] = useState(props.bill || '0');
  console.log(bill);

  useEffect(() => {
    if (status === 'Cleaning' || status === 'Free') {
      setPeopleAmount('0');
    }

    if (maxPeopleAmount > 10) {
      setMaxPeopleAmount('10');
    }
    if (peopleAmount > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    }
  }, [status, peopleAmount, maxPeopleAmount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTable({
      status: status,
      peopleAmount: peopleAmount,
      maxPeopleAmount: maxPeopleAmount,
      bill: bill,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className='mb-3'>
        <Form.Label column sm={1} style={{ fontWeight: 'bold' }}>
          Status:
        </Form.Label>
        <Col sm={4}>
          <Form.Select
            aria-label='Default select example'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Choose status..</option>
            <option value='Free'>Free</option>
            <option value='Busy'>Busy</option>
            <option value='Cleaning'>Cleaning</option>
            <option value='Reserved'>Reserved</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className='mb-3'>
        <Form.Label column sm={1} style={{ fontWeight: 'bold' }}>
          People:
        </Form.Label>
        <Col sm={4} style={{ display: 'flex', alignItems: 'center' }}>
          <Form.Control
            style={{ width: '60px' }}
            type='number'
            value={peopleAmount}
            min={0}
            max={10}
            onChange={(e) => setPeopleAmount(e.target.value)}
          />
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
          <Form.Control
            style={{ width: '60px' }}
            type='number'
            min={0}
            max={10}
            value={maxPeopleAmount}
            onChange={(e) => setMaxPeopleAmount(e.target.value)}
          />
        </Col>
      </Form.Group>

      {status === 'Busy' && (
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
            <Form.Control
              style={{ width: '100px' }}
              type='number'
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </Col>
        </Form.Group>
      )}

      <Button type='submit'>Update</Button>
    </Form>
  );
};

export default TableForm;

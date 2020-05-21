import React, { useEffect, useState } from 'react';
import { message, Button, Input, List, Row, Col } from 'antd';

import ThingsAPI from './ThingsAPI';

const Things = () => {
  const [name, setName] = useState('');
  const [things, setThings] = useState([]);

  const createThing = async () => {
    try {
      const newThing = await ThingsAPI.createThing({
        name,
      });

      message.success(`${name} added as a thing`);

      setName('');
      setThings([...things, newThing]);
    } catch (err) {
      console.error(err);
    }
  };

  const getThings = async () => {
    try {
      const things = await ThingsAPI.getThings();

      setThings(things);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getThings();
  }, []);

  return (
    <>
      <h1>Things</h1>
      <List
        bordered
        dataSource={things}
        renderItem={(thing) => <List.Item>{thing.name}</List.Item>}
        style={{ marginBottom: '12px' }}
      />
      <Row>
        <Col flex="auto">
          <Input
            type="text"
            placeholder="New thing"
            style={{ paddingLeft: '24px' }}
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </Col>
        <Col>
          <Button type="primary" onClick={() => createThing()}>
            Add
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Things;

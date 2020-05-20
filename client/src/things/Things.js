import React, { useEffect, useState } from 'react';
import ThingsAPI from './ThingsAPI';

const Things = () => {
  const [name, setName] = useState('');
  const [things, setThings] = useState([]);

  const createThing = async () => {
    try {
      const newThing = await ThingsAPI.createThing({
        name,
      });

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
    <div>
      <h1>Things</h1>
      <ul>
        {things.map((thing) => (
          <li key={thing._id}>{thing.name}</li>
        ))}
        <li>
          <input
            type="text"
            placeholder="Thing"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <button onClick={() => createThing()}>Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Things;

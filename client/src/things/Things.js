import React, { useReducer, useRef } from 'react';

const initialState = {
  name: '',
  things: [{ _id: 1, name: 'Foo' }],
};

const [ADD_THING, UPDATE_NAME] = ['ADD_THING', 'UPDATE_NAME'];

function ThingsReducer(state, action) {
  switch (action.type) {
    case ADD_THING:
      return {
        name: '',
        things: [
          ...state.things,
          {
            _id: action.id,
            name: action.name,
          },
        ],
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      throw new Error();
  }
}

const Things = () => {
  const [state, dispatch] = useReducer(ThingsReducer, initialState);
  const { name, things } = state;
  let nextId = useRef(things.length);

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
            value={name}
            onChange={({ target }) =>
              dispatch({ type: UPDATE_NAME, name: target.value })
            }
          />
          <button
            onClick={() => dispatch({ type: ADD_THING, name, id: nextId++ })}
          >
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Things;

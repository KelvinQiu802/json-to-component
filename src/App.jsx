import './App.css';
import React from 'react';
import components from './components';

const data = {
  tag: 'Paper',
  props: {
    elevation: 3,
    square: false,
    style: { padding: '100px' },
    children: {
      tag: 'Paper',
      props: {
        elevation: 3,
        square: false,
        style: { padding: '100px' },
        children: {
          tag: 'Button',
          props: {
            text: 'Hello World',
            variant: 'contained',
            color: 'warning',
          },
        },
      },
    },
  },
};

function App() {
  return (
    <div>
      <Component data={data} />
    </div>
  );
}

function Component({ data }) {
  const Item = components[data.tag];
  if (typeof data.props.children == 'object') {
    return (
      <Item {...data.props}>
        <Component data={data.props.children} />
      </Item>
    );
  }
  return (
    <div className='App'>
      <Item {...data.props} />
    </div>
  );
}

export default App;

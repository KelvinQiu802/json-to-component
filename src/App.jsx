import './App.css';
import React from 'react';
import components from './components';

const data = {
  tag: 'Button',
  props: {
    text: 'Hello World',
    variant: 'contained',
    disabled: false,
    color: 'warning',
    size: 'small',
  },
};

function App() {
  const Item = components[data.tag];
  return (
    <div className='App'>
      <Item {...data.props} />
    </div>
  );
}

export default App;

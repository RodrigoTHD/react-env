import React from 'react';
import PropTypes from 'prop-types';

const App = React.forwardRef(function App(props, ref) {
  const { title } = props;
  return <div ref={ref}>{title}</div>;
});

App.propTypes = {
  title: PropTypes.string
};

App.defaultProps = {
  title: 'App default title...'
};

export default App;

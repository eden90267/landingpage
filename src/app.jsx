import React from 'react';
import ReactDOM from 'react-dom';

require('Source/less/theme.less');
import pic from 'Source/images/glenn-carstens-peters-203007.jpg';

ReactDOM.render(
  <img className="ui medium circular image" src={pic}/>,
  document.querySelector('#app')
);
import React from 'react';
import ReactDOM from 'react-dom';
import NameForm from './NameForm';
import EssayForm  from './EssayForm';
import FlavorForm  from './FlavorForm';
import Reservation  from './Reservation';
 


ReactDOM.render(
 [ <NameForm/>, <EssayForm/> , <FlavorForm/>  , <Reservation/>  ],
  document.getElementById('root')
);

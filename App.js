import React from 'react';


import CustomNav from './components/navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/todo.jsx';
import { BrowserRouter,Route } from 'react-router-dom';
import TodoMain from './components/todomain.jsx';


function App() {
  return (
    <div>
      <CustomNav />
    
      <BrowserRouter>
      <Route path="/" component={TodoMain} exact />
      <Route path="/edit" component={Todo} />
      </BrowserRouter>
    </div>
  );
}

export default App;

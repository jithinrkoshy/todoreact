import React, { Component } from 'react';
import './todo.css';
import Reminders from './reminders.jsx';
import {Link} from 'react-router-dom';

class TodoMain extends Component{
    
   constructor()
   {
      super();
   
    this.state = {
        reminders : [
            
        ],
        rem: "",
        date: new Date(),
        
    };
}
    handleEntailmentRequest(e) {
        e.preventDefault();
    
     
    }
    
   
     handleAdd = (e) => {
         this.handleEntailmentRequest(e);
        
     
     };

    render(){
        
        return(
            <React.Fragment>
            <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            
            <div className="container bg-contain content-bg">
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">    
            <h2 className="text-center"><i>Tasks To Do</i></h2>
             
            <div className="">
                
                <Link to="/edit" className="btn btn-default">
                <button className="btn btn-primary">ADD/EDIT</button>
                </Link>
                               
                </div>  
            </div>
            </div>
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
            <div className="list-group">
                 
                {this.state.reminders.map(reminders => <Reminders key={reminders.id} value={reminders.vrem} date={reminders.vdate} />)}
               </div>  
            </div>
            </div>
            </div> 
            </div> 
            </div>
            </div>
           
            </React.Fragment> 
        );
    }
}
export default TodoMain;
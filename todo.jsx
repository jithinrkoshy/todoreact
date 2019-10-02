import React, { Component } from 'react';
import './todo.css';
import Reminders from './reminders.jsx';
import { FaArrowLeft } from 'react-icons/fa';
import {Link} from 'react-router-dom';



class Todo extends Component{
    
   constructor()
   {
      super();
   
    this.state = {
        count: 0,
        reminders : [
            
        ],
        rem: "",
        date: new Date(),
        
    };
}
    handleEntailmentRequest(e) {
        e.preventDefault();
    
     
    }
    
    handleRemChange = (e) => {
        this.setState({rem: e.target.value});
        
     };
    handleDateChange = (e) => {
        this.setState({date: e.target.value});
        
     };
     handleAdd = (e) => {
         this.handleEntailmentRequest(e);
         if(this.state.rem&&this.state.date){
        
         const newitem = {id:this.state.count+1, vrem:this.state.rem,vdate:this.state.date};
        this.setState({
          count: this.state.count+1,
          reminders: [...this.state.reminders, newitem],
          rem: "",
          date: "" 
        });
    } 
     
     };

    render(){
        return(
            <React.Fragment>
                <div className="">
            <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div className="content-bg bg-contain">
            <div className="container">
            <form className="form-group">
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
            
                 
            <div className="">
                
            <Link to={{pathname:"/",
            data:this.state.reminders
            }} 
            className="btn btn-default"
            ><FaArrowLeft /></Link>
                {/* <button type="button" onClick={(e) => {this.handleEntailmentRequest(e)}} className="btn btn-primary">Mark</button> */}
                
            </div> 
                
            
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
            
                 
            <div>
                
                <button type="Submit" onClick={(e) => {this.handleAdd(e)}} className="btn btn-primary btn-right" >Add</button>
                {/* <button type="button" onClick={(e) => {this.handleEntailmentRequest(e)}} className="btn btn-primary">Mark</button> */}
                
            </div> 
                
            
            </div>
            </div>
            <div className="row">
            <div className="input-group">   
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
            <br />
           <input type="text" className="form-control" placeholder="Reminder" id="remind" onChange={this.handleRemChange} value={this.state.rem} /><br />
          
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
            
             <label>Date: <input type="date" className="form-control" onChange={this.handleDateChange} value={this.state.date} /></label><br />
            </div>
            </div>
            </div>
            </form>
            </div>
            <hr />
            <div className="container bg-contain">
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">    
            <h2><i>Tasks To Do</i></h2>
           
            <div className="list-group">
                
            {this.state.reminders.map(reminders => <Reminders key={reminders.id} value={reminders.vrem} date={reminders.vdate} />)}
           </div>    
            </div>
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
export default Todo;
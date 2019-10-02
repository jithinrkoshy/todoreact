import React , { Component } from 'react';
import './reminders.css';
class Reminders extends Component{
     
    constructor(props)
    {
        super(props);
       
        this.state = {
          isCheck: false,
        };
    }
    
    checkChange = () => {
        this.setState({
          isCheck: !this.state.isCheck,
        });
      }
    render(){
        const show = (this.state.isCheck) ? "bg-reminder" : "" ; 
    return(
        <div className="form-group">
            
            <button type="button" class={"list-group-item list-group-item-action "+ show} onClick={this.checkChange}>
              
             <div className="checkbox">          
            <input
            name="ischeck"
            type="checkbox"
            id="checkboxid"
            checked={this.state.isCheck}
           onChange={this.checkChange}
             style={{marginRight:5}}/>
             <label for="checkboxid" className="strikethrough">  
              {this.props.value}</label>
          </div>
           </button>
             
        </div>
    );
    }
}

export default Reminders;
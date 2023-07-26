
import React, { Component } from 'react';
 

class FormClass extends Component{
    state = {
        Name : '',
        Dept : '',
        Rating : '',
        EmpData : []
    }
    changeHandle = (event) => {
        this.setState({[event.target.name] : event.target.value})
        // console.log(this.state.EmpData);
        
    }
    clickHandle = (event) => {
        let newObj = {
            name: this.state.Name,
            dept: this.state.Dept,
            rating: this.state.Rating
        }
        this.state.EmpData.push(newObj);
        this.setState({EmpData : this.state.EmpData})
        console.log(this.state.EmpData);
        }

    render(){
        return(
            <>
            {/* <div class='main'> */}
            <form>
            <label htmlFor='name'><b>Name:</b></label>
            <input id='name' type='text' name='Name' placeholder='Enter Name' onChange={this.changeHandle} value={this.state.Name} required/><br/><br/><br/>

            <label htmlFor='dept'><b>Department:</b></label>
            <input id='dept' type='text' name='Dept' placeholder='Enter Department' onChange={this.changeHandle} value={this.state.Dept} required/><br/><br/><br/>

            <label htmlFor='rating'><b>Rating:</b></label>
            <input id='rating' type='number' name='Rating' placeholder='Enter Rating' onChange={this.changeHandle} value={this.state.Rating} required/><br/><br/><br/><br/>

            <button type="button" onClick={this.clickHandle}>Submit now</button>
            </form>

            <div className="andy">
            {this.state.EmpData.map((item, index) => {
                return(
                    <>
                    <div className="second">
                    <span>Name: {item.name} || Dept: {item.dept} || Rating: {item.rating}</span>
                    </div>
                    </>
                    
                )
            }
            )} 
            </div>
            
            {/* </div> */}
            </>

            
        )
    }
}

export default FormClass;
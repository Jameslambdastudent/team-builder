import React, {Component} from "react"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            email: "",
            role: "",
          }
    }

    handleRole = (e) => {
        console.log(e.target.value)
        this.setState({
            role: e.target.value
        })
    }

    handleEmail = (e) => {
        console.log(e.target.value)
        this.setState({
            email: e.target.value
        })
    }
   
   
   
   
    handleSubmit = (e) => {
        console.log("form submitted")
        e.preventDefault()
    }
    handleName = (e) => {
        console.log(e.target.value)
        this.setState({
           
            name: e.target.value,
           
           
        })
        
       
    }
    render() { 
        return ( <div>
             <form onSubmit={this.handleSubmit}>
            
            <label htmlFor="name">Name</label>
            <input name="name" type="text" id="name" onChange={this.handleName} value={this.state.name} />
            
            <label htmlFor="email">Email</label>
            <input name="name" type="text" id="email"  onChange={this.handleEmail} value={this.state.email} />,
            
            <label htmlFor="role">Role</label>
            <input name="name" type="text" id="role" onChange={this.handleRole} value={this.state.role} />,
            
            </form> 
    
        </div> );
    }
}
 
export default Form;
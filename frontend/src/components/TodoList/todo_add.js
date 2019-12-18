import React, { Component } from "react";

class CreateTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {itemVal:'',listOfitems:this.props.user_todos};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState({user_Id:this.props.userId});

	}
  
	handleChange(event) {
        this.setState({itemVal : event.target.value})
  }
  handleSubmit(event) {
        this.props.getvalue(this.state.itemVal);
        event.preventDefault();
  }
  componentWillReceiveProps(ItemsProps) {
    this.setState({listOfitems:ItemsProps.user_todos})
  }
  componentDidMount() {
 alert('1')
    this.props.handleList();
  }
  
    render() {
      var todoItems =[]
      if(this.state.listOfitems.length>0) {
        todoItems=this.state.listOfitems.map((num)=><li>{num.courseName} <input type="button" value="del" /></li>
                                            );
      }
         return (
            <form>
              <div style={{padding:'6%',width:'40%'}} >
              <h1>Todolist  Here</h1>
               <input  id="itemVal" label="Item" type="text" onChange={this.handleChange} value={this.state.item} />
               <br /><br />
              <button onClick={this.handleSubmit} type="submit">Add</button>
               <ul>
               {todoItems}
               </ul>
              </div>
            </form>
        );
  }
};


export default CreateTodo;
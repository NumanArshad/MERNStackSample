import React, { Component } from "react";
import { connect } from "react-redux";
import CreateTodo from './todo_add';
import { item_Status } from '../../constants/addItem.js';
import { item_Actions } from '../../constants/addItem.js';
import { itemServer } from '../../server/ItemServer.js';
const mapStateToProps = (state) => {
console.log("****************************state:", state);
return {
    item_status: state.todo_Reducer.item_status,
    user_todos:state.todo_Reducer.user_todos
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (item,username) => { dispatch(itemServer.handleAdd(item,username)) },
    handleList: (userId) =>{dispatch(itemServer.handleList(userId))},
  };
};
class todoView extends Component {
	constructor(props) {
      super(props);
     this.state = {todo_list:this.props.user_todos};
     this.getvalue = this.getvalue.bind(this);
     this.handleList= this.handleList.bind(this);
       this.callService=this.callService.bind(this);
	}
	componentWillReceiveProps(ItemsProps) {
		this.setState({todo_list:ItemsProps.user_todos})
	}
	getvalue(u){
	  	this.props.handleAdd(u,this.props.match.params.userId)
	}
	handleList(u=this.props.match.params.userId) {
		this.props.handleList(u);
	}
callService(){
    if (this.props.item_status=="ADD_NEW"){
          	this.props.handleList(this.props.match.params.userId);
    }
}
  render() {
this.callService();
    return (
      <CreateTodo userId={this.props.match.params.userId} getvalue={this.getvalue} handleList={this.handleList} user_todos={this.props.user_todos} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoView);

// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}


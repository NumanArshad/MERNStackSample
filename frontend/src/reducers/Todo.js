import {item_Actions} from '../constants/addItem'
import {item_Status} from '../constants/addItem'

const item_initialState = {
    item_status: item_Status.item_Create.NEW,
    user_todos:[]
  };

  export default function (state = item_initialState, action) {
   console.log(action.type);
    switch(action.type) {
    	case item_Actions.item_Create.FIND:// start fetching posts and set loading = true
        console.log("I am from Reduce New..");
       //     alert("passing todolist");
       // alert(action.payload.todolist.length);
        return { ...state, item_status: item_Status.item_Create.NEW,user_todos:action.payload.todoList};
        case item_Actions.item_Create.POST:// start fetching posts and set loading = true
        console.log("I am from Reduce Loading..");
        return { ...state, item_status: item_Status.item_Create.LOADING};
        case item_Actions.item_Create.FAILURE:
         console.log("I am from Reduce Failure..");
        return {...state, item_status: item_Status.item_Create.FAILURE}
        case item_Actions.item_Create.CREATED:
         console.log("I am from Reducer created..");
       //  alert(action.payload.todolist.length)
        return {...state, item_status: item_Status.item_Create.SUCCESS}
                    case item_Actions.item_Create.NEW:
         console.log("I am from Reducer created..");
       //  alert(action.payload.todolist.length)
        return {...state, item_status: item_Status.item_Create.CREATED}
      default:
     	console.log("default is firing");
        return {...state,item_status: item_Status.item_Create.NEW};

  }
};

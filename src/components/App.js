import React from 'react';
// import MainContainer from './containers/MainContainer.jsx';
import ReactDOM from 'react-dom/client';
import { useState, Fragment } from 'react';
// import path from 'path';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {nanoid} from 'nanoid';
import './style.scss';
// import * as Controller from './controller';
// import 'react-datepicker/dist/react-datepicker.css' ;
import data from './mock-data.json';
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';

const App = () => {
  // console.log(ControlledComponent())
  const [contents,setContents] = useState(data);
  const [editId, setEditId] = useState(null);

  const [addFormData , setAddFormData] = useState({
    exercise: '',
    weight: '',
    set: '',
    reps: '',
    comment: '',
  });
  const [editFormData, setEditFormData] = useState ({
    exercise: '',
    weight: '',
    set: '',
    reps: '',
    comment: '',
  })

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData ={...addFormData};
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact ={
      id: nanoid(),
      exercise: addFormData.exercise,
      weight: addFormData.weight,
      set: addFormData.set,
      reps:addFormData.reps,
      comment: addFormData.comment
    }
    const newContacts = [...contents, newContact];
    setContents(newContacts);
    
  }

const handleEditFormSubmit = (event) => {
  event.preventDefault();
  const editedContent = {
    id: editId,
    exercise: editFormData.exercise,
    weight: editFormData.weight,
    reps: editFormData.reps,
    comment: editFormData.comment
  }
  const newWorkout = [...contents];
  const index = contents.findIndex((el)=> el.id === editId);
  newWorkout[index] = editedContent;
  console.log(newWorkout)
  setContents(newWorkout);
  setEditId(null);
}
  
const handleEditFormChange = (event) => {
  event.preventDefault();
  const fieldName = event.target.getAttribute('name');
  const fieldValue = event.target.value;
  const newFormData = {...editFormData};
  newFormData[fieldName] = fieldValue;

  setEditFormData(newFormData);
}
const handleEditClick = (event, el) => {
  event.preventDefault();
  setEditId(el.id);

  const formValues = {
    exercise: el.exercise,
  weight: el.weight,
  reps: el.reps,
  comment: el.comment,
 
};

  setEditFormData(formValues);
}
const handleCancelClick = () => {
  setEditId(null)
}
const handleDeleteClick = (id) => {
  const newContents = [...contents];

  const index = contents.findIndex((content) => content.id === id );

  newContents.splice(index,1);

  setContents(newContents)
}
  return(
    //checkout hiearchy structure to ensure proper components 
    <div className = 'app-container'>
      <h1>Work Out Log</h1>
      {/* {Controller.date()}
      {Controller.ControlledComponent()}
      {Controller.Dropdown()} */}
      <form onSubmit = {handleEditFormSubmit}>

      <table>
        <thead>
          <tr>
            <th> Exercise </th>
            <th> Weight</th>
            <th> Set </th>
            <th> Reps</th>
            <th> Comment</th>
            <th> Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(el => (
            // {console.log('hello')}
            <Fragment> 
              {editId === el.id ? (
              <EditableRow editFormData = {editFormData} handleEditFormChange = {handleEditFormChange} handleCancelClick = {handleCancelClick}/>
              ) : (
              <ReadOnlyRow el = {el} handleEditClick = {handleEditClick} handleDeleteClick = {handleDeleteClick} />
              )}
              </Fragment>
          ))}
        </tbody>
      </table>
          </form>
      <h2>New Set</h2>
      <form onSubmit = {handleAddFormSubmit}>
        <input type = "text" name = "exercise" required = "required" placeholder= 'Exercise' onChange = {handleAddFormChange}/>
        <input type = "text" name = "weight" required = "required" placeholder= 'Weight' onChange = {handleAddFormChange}/>
        <input type = "text" name = "set" required = "required" placeholder= 'Set' onChange = {handleAddFormChange}/>
        <input type = "text" name = "reps" required = "required" placeholder= 'Reps' onChange = {handleAddFormChange}/>
        <input type = "text" name = "comment" placeholder= 'Optional Comment' onChange = {handleAddFormChange}/>
        <button type = 'submit'>Add</button>
      </form>
    </div>
  );
}
// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// root.render(<App />); 
export default App;
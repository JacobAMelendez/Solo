import React from "react";

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    // const {exercise,weight,reps,comment} = editFormData;
    return (
        // <form>

        <tr>
            <td>
                 <input type = "text" name = "exercise" required = "required" placeholder= 'Exercise' value = {editFormData.exercise} onChange = {handleEditFormChange}></input>
            </td>
            <td>
                <input type = "text" name = "weight" required = "required" placeholder= 'Weight' value = {editFormData.weight} onChange = {handleEditFormChange}></input>
            </td>
            <td>
                 <input type = "text" name = "reps" required = "required" placeholder= 'Reps' value = {editFormData.reps} onChange = {handleEditFormChange}></input>
            </td>
            <td>
                 <input type = "text" name = "comment" placeholder= 'Optional Comment' value = {editFormData.comment} onChange = {handleEditFormChange}></input>
            </td>
            <td>
                <button type = 'submit'>Save</button>
                <button type = 'cancel' onClick={handleCancelClick} > Cancel </button>
            </td>
        </tr>
        // {/* </form> */}
    )
}
export default EditableRow;
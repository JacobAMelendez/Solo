import React from "react";

const ReadOnlyRow = ({el, handleEditClick,handleDeleteClick}) => {
    const {exercise, weight, set , reps , comment, id} = el;
    return (
        <tr>
        <td>{exercise}</td>
        <td>{weight}</td>
        <td>{set}</td>
        <td> {reps}</td>
        <td> {comment}</td>
        <td>
            <button type ='button' onClick = {(event) => handleEditClick(event, el)}> Edit </button>
            <button type ='button' onClick = {() => handleDeleteClick(id)}> Delete </button>
        </td>
      </tr>
    )
}
export default ReadOnlyRow;
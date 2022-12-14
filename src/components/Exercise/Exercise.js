import React from 'react';
import './Exercise.css';
const Exercise = (props) => {
    // console.log(props.exercise);
    const { handleAddToList } = props;
    const { img, name, detail, age, time } = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className='exercise-info'>
                <p className='exercise-name'>{name}</p>
                <p><small>{detail}</small></p>
                <p>For Age : {age}</p>
                <p>Time Required : {time}s</p>
            </div>
            <button onClick={() => handleAddToList(props.exercise)} className='add-btn'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Exercise;
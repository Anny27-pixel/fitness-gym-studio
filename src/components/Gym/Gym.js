import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import List from '../List/List';
import './Gym.css';
const Gym = () => {
    const [exercises, setExercises] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, [])

    const handleAddToList = (exercise) => {
        // console.log(exercise);
        const newList = [...list, exercise];
        setList(newList);
    }


    return (
        <div className='gym-container'>
            <div>
                <h2>Select your Today's Exercises</h2>
                <div className='exercise-container'>
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.id}
                            exercise={exercise}
                            handleAddToList={handleAddToList}
                        ></Exercise>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <List list={list}></List>
            </div>
        </div>
    );
};

export default Gym;
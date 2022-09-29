import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Gym.css';
const Gym = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, [])
    return (
        <div className='gym-container'>
            <div>
                <h2>Select your Today's Exercises</h2>
                <div className='exercise-container'>
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.id}
                            exercise={exercise}
                        ></Exercise>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <h3>my profile</h3>
            </div>
        </div>
    );
};

export default Gym;
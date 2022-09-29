import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './List.css';
const List = ({ list }) => {
    return (
        <div className='list'>
            <div className='profile'>
                <h3>Jabin Tasmin Anny</h3>
                <p className='profile-info'>  <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                    <span>HSTU, Dinajpur</span>
                </p>
                <div className='personal-details'>
                    <div>
                        <p className='large-text'>46 <span>kg</span></p>
                        <p>Weight</p>
                    </div>
                    <div>
                        <p className='large-text'>4.10</p>
                        <p>Height</p>
                    </div>
                    <div>
                        <p className='large-text'>22 <span>years</span></p>
                        <p>Age</p>
                    </div>
                </div>
            </div>
            <p>selected exercise: {list.length}</p>
        </div>
    );
};

export default List;
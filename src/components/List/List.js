import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './List.css';
const List = ({ list }) => {
    // console.log(list);
    let total = 0;
    for (const exercise of list) {
        total = total + exercise.time;
    }
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
            <h3>Add a Break</h3>
            <div className='break-time'>
                <div className='single-time'>
                    <button>10 <span>s</span></button>
                </div>
                <div className='single-time'>
                    <button>20 <span>s</span></button>
                </div>
                <div className='single-time'>
                    <button>25 <span>s</span></button>
                </div>
                <div className='single-time'>
                    <button>30 <span>s</span></button>
                </div>
                <div className='single-time'>
                    <button>40 <span>s</span></button>
                </div>
            </div>
            <h3>Exercise Details</h3>
            <p className='exercise-detail'>Exercise Time :{total}s </p>
            <p className='exercise-detail'>Break Time: </p>
        </div>
    );
};

export default List;
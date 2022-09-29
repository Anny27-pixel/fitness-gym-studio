import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './List.css';
const List = ({ list }) => {
    // console.log(list);
    let total = 0;
    for (const exercise of list) {
        total = total + exercise.time;
    }

    const breakTime = (time) => {
        const breakTime = document.getElementById('break-time');
        breakTime.innerText = time;
        localStorage.setItem('break', time);

    }
    const displayBreakFromLS = () => {
        const savedBreak = localStorage.getItem('break');
        const displayedBreak = document.getElementById('break-time');
        displayedBreak.innerText = savedBreak;
    }
    displayBreakFromLS();
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
                <div>
                    <button onClick={() => breakTime('10')}>10 <span>s</span></button>
                    <button onClick={() => breakTime('20')}>20<span>s</span></button>
                    <button onClick={() => breakTime('30')}>30<span>s</span></button>
                    <button onClick={() => breakTime('40')}>40<span>s</span></button>
                    <button onClick={() => breakTime('50')}>50<span>s</span></button>
                </div>
            </div>
            <h3>Exercise Details</h3>
            <p className='exercise-detail'>Exercise Time :{total}s </p>
            <p className='exercise-detail break-time'>Break Time: <span id="break-time">0</span>s</p>
            <div>
                <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default List;
import React from 'react';

const List = ({ list }) => {
    return (
        <div>
            <h3>my profile</h3>
            <p>selected exercise: {list.length}</p>
        </div>
    );
};

export default List;
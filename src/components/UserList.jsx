import React from 'react';

const UserList = ({ users, deleteUser, selectUser }) => {


    console.log(users)
    return (
        <div className='list-content'>
            <h1>Users List</h1>
            <div >
                <ul >
                    {
                        users.map(user => (
                            <li key={user.email}>
                                <div className='list'>
                                <p><b>Name:</b>{" "}{user.first_name}{" "}{user.last_name}</p>
                                <p><b>Email:</b>{" "}{user.email}</p>
                                <p><b>Birthday:</b>{" "}{user.birthday}</p>
                                </div>
                                <div className='btn-list-content'>
                                    <button
                                    className='btn-list'
                                        onClick={() => deleteUser(user.id)}>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                    <button
                                    className='btn-list'
                                        onClick={() => selectUser(user)}>
                                        <i className="fa fa-pen-to-square">
                                        </i>
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default UserList;
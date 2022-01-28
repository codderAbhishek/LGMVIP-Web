import React from 'react'

const Users = ({ loading, users }) => {
    return loading ? (
        <div id="main">
            <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="Loaading.." className="loader" />
        </div>
    ) :
        (
            <div id="main">

                {users.map(user =>
                    <div className="project column3">
                        {
                            console.log(user)
                        }
                        <div className="profile">
                            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                            <p className="id">User ID: {user.id}</p>
                            <h1 className="name">{user.first_name} {user.last_name}</h1>
                            <p className="email">{user.email}</p>

                        </div>
                    </div>
                )
                }
            </div>
        )
}

export default Users;
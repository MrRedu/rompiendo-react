import { useEffect, useContext } from 'react'

import { UserState } from './contex/User/UserState'
import { UserContext } from './contex/User/UserContext'

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext)

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {users &&
          users.map(({ id, first_name, last_name, avatar }) => (
            <li
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                textAlign: 'center',
                gap: '0.5rem',
                backgroundColor: '#e3e3e3',
                color: '#121212',
                fontWeight: 'bold',
              }}
              key={id}
              onClick={() => getProfile({ id })}
            >
              <span>{`${first_name} ${last_name}`}</span>
              <img src={avatar} alt={`${first_name} ${last_name} avatar`} />
            </li>
          ))}
      </ul>
    </>
  )
}

const Profile = () => {
  const { selectedUser } = useContext(UserContext)
  return (
    <>
      {selectedUser ? (
        <div
          style={{
            textAlign: 'center',
            padding: '1rem',
            fontWeight: 'bold',
            gap: '0.5rem',
            backgroundColor: '#cfcfcf',
            color: '#080808',
            minHeight: '200px',
            maxWidth: '200px',
            // margin: '0 auto',
            margin: '100px auto',
          }}
        >
          <h3>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h3>
          <img
            src={selectedUser.avatar}
            alt={`${selectedUser.first_name} avatar`}
          />
        </div>
      ) : (
        <div>No user selected</div>
      )}
    </>
  )
}

export const ContextApp = () => {
  return (
    <>
      <h3>{`</ContextApp>`}</h3>
      <UserState>
        <UserList />
        <Profile />
      </UserState>
    </>
  )
}

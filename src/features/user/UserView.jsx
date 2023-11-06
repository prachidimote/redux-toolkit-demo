import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';
import { motion } from "framer-motion"

const UserView = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() =>  {
       dispatch(fetchUsers())
    }, [])
  return (
    <div>
        <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
        <h2>List of Users</h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ?<div>Error: {user.error}</div> : null}
        {!user.loading && user.users.length ? (
            <ul>
                {user.users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        ): null }
    </div>
  )
}

export default UserView
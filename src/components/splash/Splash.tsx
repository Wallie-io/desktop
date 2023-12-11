import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserId, selectUserId, selectUsername, clearUsername} from '../../hooks/redux/auth/userSlice'

const Splash = () => {
    const dispatch = useDispatch()
    const userId = useSelector(selectUserId);
    const username = useSelector(selectUsername);
    const [inputUsername, setInputUsername] = useState('')

    const handleUsernameChange = (e) => {
      setInputUsername(e.target.value);
    };
    
    const handleEnterUsername = () => {
      // Assuming you have some validation for the username
      if (inputUsername.trim() !== '') {
        dispatch(setUserId(username));
      }
    };
  return (
    <div>
    {!username && (
      <div>
        <h1>Splash Screen</h1>
        <p>Enter your username:</p>
        <input type="text" value={inputUsername} onChange={handleUsernameChange} />
        <button onClick={handleEnterUsername}>Enter</button>
      </div>
    )}

    {username && (
      <div>
        <h1>Welcome, {username}!</h1>
        <button onClick={() => dispatch(clearUsername())}>Logout</button>
      </div>
    )}
  </div>
  )
}

export default Splash
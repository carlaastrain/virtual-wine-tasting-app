import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import * as ApiService from '../ApiService';

interface Props {
  loginUser: (mail: string, password: string, userId: number, validated: boolean) => void
}

export default function Login({ loginUser }: Props) {

  // LOGIN - STATES
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(1);
  const [isRegistered, setIsRegistered] = useState(false);
  const [passwordFromDB, setPasswordFromDB] = useState("");


  // REGISTRATION - STATES
  const [newMail, setNewMail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(false);
  const [userExists, setUserExists] = useState(true);
  const [successfullyRegistrated, setSuccessfullyRegistrated] = useState(false);

  useEffect(() => {
    checkIfUserIsInDatabase()
  }, [mail])




  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (mail && password && isRegistered === true && password === passwordFromDB) {
      loginUser(mail, password, userId, true)
    } else setError(true);
  }

  async function checkIfUserIsInDatabase() {
    const users = await ApiService.getUsers()

    users.map((user) => {
      if (user.mail === mail) {
        setIsRegistered(true);
        setPasswordFromDB(user.password)
        setUserId(user.id)
        return
      }
    })
  }

  function handleChangeMail(event: ChangeEvent<HTMLInputElement>) {
    if (error) setError(false);
    setMail(event.target.value);
    checkIfUserIsInDatabase()
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    if (error) setError(false);
    setPassword(event.target.value);
  }

  //REGISTRATION - FUNCTIONS
  function handleChangeNewMail(event: ChangeEvent<HTMLInputElement>) {
    if (error) setError(false);
    setNewMail(event.target.value);
  }

  function handleChangeNewPassword(event: ChangeEvent<HTMLInputElement>) {
    if (error) setError(false);
    setNewPassword(event.target.value);
  }

  function handleRegistrationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (newMail && newPassword) {
      setNewMail(newMail);
      setNewPassword(newPassword);
      registerUser()
    } else setError(true);
  }

  function registerUser() {
    ApiService.postUser({ mail: newMail, password: newPassword });
    setSuccessfullyRegistrated(true);
    setTimeout(function () { setUserExists(true); }, 1500);
  }

  return (<div>

    {userExists === true ? (<div className="centered__container__login">
      <div className='login__headline'><h2>User Login</h2></div>
      <div className="login__form">
        <form onSubmit={handleSubmit}>
          <input
            className='input__login'
            type="text"
            value={mail}
            onChange={handleChangeMail}
            placeholder="Type in your user name ..."
          ></input>
          <input
            className='input__login'
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="Type in your password ..."
          ></input>
          <button type="submit" className='login__btn'>login</button>
        </form>
      </div>
      <div className='go__to__register'>to create a new user click <div onClick={() => setUserExists(false)} className='go__to__register__btn'>here</div></div>
    </div>) : successfullyRegistrated === false ? (<div className="centered__container__login">
      <div className='login__headline'><h2>Register new User</h2></div>
      <div className="login__form">
        <form onSubmit={handleRegistrationSubmit}>
          <input
            className='input__login'
            type="text"
            value={newMail}
            onChange={handleChangeNewMail}
            placeholder="Type in your user name ..."
          ></input>
          <input
            className='input__login'
            type="password"
            value={newPassword}
            onChange={handleChangeNewPassword}
            placeholder="Type in your password ..."
          ></input>
          <button type="submit" className='login__btn' onClick={() => console.log(newMail, newPassword)}>register</button>
        </form>
      </div>
    </div>) : (<div className='successfully__registred'>
      <div><FontAwesomeIcon icon={faCheck} size="5x" className='successfully__registred__logo' /></div>
      <div>User successfully registered</div>
    </div>
    )}

  </div>
  )

}


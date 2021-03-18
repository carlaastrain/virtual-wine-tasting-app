
import { User } from '../ApiService'

interface Props {
  user: User
}

export default function UserComponent({ user }: Props) {

  return (<div>

    <div className="centered__container__user">

      <div className='user__headline'>
        <h2>logged in as </h2>
      </div>

      <div className="user__data">


        <div>username: {user.mail}</div>
        <div>userId: {user.id}</div>
        {/* <button onClick={() => console.log(user)}></button> */}

        <div onClick={() => window.location.reload()} className="logout__btn">logout here</div>
      </div>
    </div>

  </div>

  )
}

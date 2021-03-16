import WineCard from '../WineCard/WineCard';
import * as ApiService from '../ApiService';
import { useEffect, useState } from 'react';


interface Props {
  user: ApiService.User
}

//user is just one key in the props object 
export default function WineList({ user }: Props) {

  const [wineListDB, setWineListDB] = useState<ApiService.Tasting[]>([])

  useEffect(() => {
    ApiService.getTastings(user.userId)
      .then((data) => setWineListDB(data))
  }, [user])

  // async function consoleLogDB () {
  //   //console.log("hola")
  //   const data =  await ApiService.getTastings();
  //   console.log(data)
  //   setWineListDB(data)
  // }

  return (<div>

    {/* <button onClick={() => consoleLogDB()}>get tastings from db</button> */}
    {/* <button onClick={() => console.log(wineListDB)}>winelist</button> */}

    {wineListDB ? <div className="wine__card__container">
      {wineListDB.map((wine, index) => {
        return (<div><WineCard wine={wine} /></div>)
      })}
    </div> : <div>LOADING DATA</div>}

  </div>)

}
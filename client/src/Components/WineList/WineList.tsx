import WineCard from '../WineCard/WineCard';
import * as ApiService from '../ApiService';
import { useEffect, useState } from 'react';

interface Tasting {
  id: number,
  "winery": "Malbec",
  "year": 1935,
  "grape": "malbec",
  "fruit": "1.5",
  "acidity": "2",
  "tannins": "3",
  "body": "1935",
  "dominantFlavors": [
    "Vanilla",
    "Blueberry"
  ],
  "arrPossibleFlavors": [
    [
      "Wild Iris"
    ],
    [
      "Clay Pot"
    ]
  ],
  "overallRating": "3",
  "createdAt": "2021-03-14T12:04:45.910Z",
  "updatedAt": "2021-03-14T12:04:45.910Z",
  "userId": 1
}

export default function WineList({ user }) {

  const [wineListDB, setWineListDB] = useState<Tasting[]>([])

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
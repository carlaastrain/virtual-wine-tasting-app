import { useState } from "react";
import WineDB, { Flavor, Wine } from '../wineDB/WineDB'

interface Props {
  updateDominantFlavors: (args: any) => void,
  grape: string,
  wineDB: { [key: string]: Wine }
}


export default function DominantFlavors({
  updateDominantFlavors,
  grape,
  wineDB,
}: Props) {


  const [flavors, setFlavors] = useState<Partial<Record<Flavor, Flavor>>>({});

  function updateFlavors(flavor: Flavor) {
    if (flavors[flavor]) {
      delete flavors[flavor];
      setFlavors((prev) => ({
        ...prev,
      }));
    } else {
      setFlavors((prev) => ({
        ...prev,
        [flavor]: flavor,
      }));
    }
  }

  return (<div>

    <div className={"centered__container__dominant__flavors"}>
      <span className="dominant__flavor__headline">
        <h2>dominant flavors in {grape}</h2>
      </span>
      <div className='container__and__button'>
        <div className="dominant__flavors__container">
          {wineDB[grape].dominantFlavors.map((flavor) => (
            <div onClick={() => updateFlavors(flavor)} className={(flavors[flavor] === flavor ? 'dominant__flavors__box__toggled' : 'dominant__flavors__box')}>{flavor}</div>

          ))}

        </div>
        <button
          className='dominant__flavor__btn'
          onClick={() =>
            updateDominantFlavors({ ratingCompleted: true, flavors: flavors })
          }
        >
          next
        </button>
      </div>
    </div>
  </div>
  );
}

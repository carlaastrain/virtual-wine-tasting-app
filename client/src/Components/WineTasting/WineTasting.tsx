import { useState, FormEvent, ChangeEvent } from "react";
import FruitRating from "../wineProfile/FruitRating";
import BodyRating from "../wineProfile/BodyRating";
import TanninsRating from "../wineProfile/TanninsRating";
import AcidityRating from "../wineProfile/AcidityRating";
import DominantFlavors from "../wineFlavors/DominantFlavors";
import PossibleFlavors from "../wineFlavors/PossibleFlavors";
import WineDB from "../wineDB/WineDB";
import OverallRating from "../wineOverallRating/OverallRating";
import { User, Tasting } from '../ApiService'


interface Props {
  user: User
}

export default function WineTasting({ user }: Props) {

  const [startTasting, setStartTasting] = useState(false);
  const [winery, setWinery] = useState("");
  const [year, setYear] = useState("");
  const [grape, setGrape] = useState("");
  const [error, setError] = useState(false);
  const [body, setBody] = useState(0);
  const [fruit, setFruit] = useState(0);
  const [tannins, setTannins] = useState(0);
  const [acidity, setAcidity] = useState(0);
  const [possibleFlavors, setPossibleFlavors] = useState<{ fruitFlavors: { [key: string]: string }, dryFruitFlavors: { [key: string]: string }, floralFlavors: { [key: string]: string }, herbalFlavors: { [key: string]: string }, spiceFlavors: { [key: string]: string }, earthFlavors: { [key: string]: string }, otherFlavors: { [key: string]: string }, ratingCompleted: boolean }>();
  const [dominantFlavors, setDominantFlavors] = useState<{ ratingCompleted: boolean, flavors: { [key: string]: string } }>();
  const [wineList, setWineList] = useState<Tasting>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (winery && year && grape) {
      setWinery(winery);
      setYear(year);
      setGrape(grape.toLowerCase());
      setStartTasting(true);
    } else setError(true);
  }

  function handleChangeWinery(event: ChangeEvent<HTMLInputElement>) {
    if (error) setError(false);
    setWinery(event.target.value);
  }

  function handleChangeYear(event: ChangeEvent<HTMLInputElement>) {
    if (error) setError(false);
    setYear(event.target.value);
  }

  function handleChangeGrape(event: ChangeEvent<HTMLSelectElement>) {
    if (error) setError(false);
    setGrape(event.target.value);
  }

  function showRatingOfFruit() {
    return startTasting === true && fruit === 0;
  }

  function showRatingOfAcidity() {
    return fruit !== 0 && acidity === 0;
  }

  function showRatingOfTannins() {
    return acidity !== 0 && tannins === 0;
  }

  function showRatingOfWineBody() {
    return tannins !== 0 && body === 0;
  }

  function updateBody(value: number) {
    setBody(value);
  }

  function updateFruit(value: number) {
    setFruit(value);
  }

  function updateTannins(value: number) {
    setTannins(value);
  }

  function updateAcidity(value: number) {
    setAcidity(value);
  }

  function submitRating(value: number) {
    console.log('hello')
    let arrDominantFlavors = Object.values(dominantFlavors?.flavors || {});
    // PossibleFlavors(Nested Object) will be transformed in a 1 dimensional Array

    const fruitFlavors = Object.values(possibleFlavors?.fruitFlavors || {})
    const dryFruitFlavors = Object.values(possibleFlavors?.dryFruitFlavors || {})
    const floralFlavors = Object.values(possibleFlavors?.floralFlavors || {})
    const herbalFlavors = Object.values(possibleFlavors?.herbalFlavors || {})
    const spiceFlavors = Object.values(possibleFlavors?.spiceFlavors || {})
    const earthFlavors = Object.values(possibleFlavors?.earthFlavors || {})
    const otherFlavors = Object.values(possibleFlavors?.otherFlavors || {})

    let arrPossibleFlavors = fruitFlavors.concat(dryFruitFlavors).concat(floralFlavors).concat(herbalFlavors).concat(spiceFlavors).concat(earthFlavors).concat(otherFlavors)
    arrPossibleFlavors
      .filter(value => Object.keys(value).length !== 0)
      .map(element => Object.values(element));

    console.log('THIS IS ARRPOSSIBLEFLAVORS', arrPossibleFlavors)
    // let arrPossibleFlavors = ['hello'];
    setWineList(
      {
        userId: user.id,
        winery: winery,
        year: parseInt(year),
        grape: grape,
        fruit: fruit,
        acidity: acidity,
        tannins: tannins,
        body: body,
        dominantFlavors: arrDominantFlavors,
        arrPossibleFlavors: arrPossibleFlavors,
        overallRating: value,
      }
    )
  }

  return (
    <div>
      {startTasting === false ? (<div className='centered__container__start__tasting'>
        {console.log("render happening")}
        <div className="form__container">

          <form onSubmit={handleSubmit}>
            <input
              className="start__tasting__input"
              type="text"
              value={winery}
              onChange={handleChangeWinery}
              placeholder="Type in name of winery ..."
            ></input>
            <input
              className="start__tasting__input"
              type='number'
              min={1930}
              max={2030}
              value={year}
              onChange={handleChangeYear}
              placeholder="Type in year ..."
            ></input>
            <select value={grape} onChange={handleChangeGrape} name="grape" className="start__tasting__input" data-testid='select'>
              <option disabled={true} value="" data-testid='select-option'>select grape variety </option>
              <option className='malbec' value='malbec' data-testid='select-option'>Malbec</option>
              <option className='merlot' value='merlot' data-testid='select-option'>Merlot</option>
              <option className='syrah' value='syrah' data-testid='select-option'>Syrah</option>
              <option className='riesling' value='riesling' data-testid='select-option'>Riesling</option>
              <option className='gewürztraminer' value='gewürztraminer' data-testid='select-option'>Gewürztraminer</option>
              <option className='cabernetSauvignon' value='cabernetSauvignon' data-testid='select-option'>CabernetSauvignon</option>
              <option className='pinotNoir' value='pinotNoir' data-testid='select-option'>PinotNoir</option>
            </select>
            <button type="submit" className="start__tasting__btn">start tasting</button>
          </form>
        </div> </div>) : (
        <></>
      )}

      {showRatingOfFruit() ? (
        <FruitRating fruit={fruit} updateFruit={updateFruit} />
      ) : (
        <></>
      )}

      {showRatingOfAcidity() ? (
        <AcidityRating acidity={acidity} updateAcidity={updateAcidity} />
      ) : (
        <></>
      )}

      {showRatingOfTannins() ? (
        <TanninsRating tannins={tannins} updateTannins={updateTannins} />
      ) : (
        <></>
      )}

      {showRatingOfWineBody() ? (
        <BodyRating body={body} updateBody={updateBody} />
      ) : (
        <></>
      )}

      {body !== 0 && !dominantFlavors?.ratingCompleted ? (
        <DominantFlavors
          updateDominantFlavors={setDominantFlavors}
          grape={grape}
          wineDB={WineDB}
        />
      ) : (
        <></>
      )}

      {dominantFlavors?.ratingCompleted && !possibleFlavors?.ratingCompleted ? (
        <PossibleFlavors
          updatePossibleFlavors={setPossibleFlavors}
          grape={grape}
          wineDB={WineDB}
        />
      ) : (
        <></>
      )}

      {possibleFlavors?.ratingCompleted === true ? (
        <OverallRating submitRating={submitRating} wineList={wineList} />
      ) : (
        <></>
      )}

    </div>

  );
}

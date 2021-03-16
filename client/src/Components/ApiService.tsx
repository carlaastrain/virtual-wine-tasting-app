import axios from 'axios';
const url = 'http://localhost:3001';

// GET ALL WINE TASTINGS FROM DB
export async function getTastings(id: number) {
  try {
    const response = await axios.get(url + '/api/tastings/' + id);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export interface Tasting {
  id: number,
  winery: string,
  year: number,
  grape: string,
  fruit: number,
  acidity: number,
  tannins: number,
  body: number,
  dominantFlavors: string[],
  arrPossibleFlavors: string[],
  overallRating: number,
  userId: number
}

// POST ONE TASTING TO DB
export function postTasting(options: Tasting) {
  axios.post(url + '/api/tastings', options)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);

    });
}

//DELETE TASTING BY ID
export function deleteTasting(id: number) {
  axios.delete(url + '/api/tastings/' + id)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// CREATE NEW USER
export function postUser(options: { mail: string, password: string }) {
  axios.post(url + '/api/user', options)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export interface User {
  userId: number,
  mail: string,
  password: string,
}

// GET ALL USERS
export async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get(url + '/api/allusers');
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error
  }

}

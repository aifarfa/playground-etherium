import Promise from 'bluebird'

const mockData = [
  {
    "name": "10K FOR LUCY AND DOWN'S SYNDROME SCOTLAND",
    "organizer": "MARK HOWELL",
    "story": "...",
    "target": 10000.0,
    "created": "2016-10-28T07:06:55.825Z" // new Date()
  }, {
    "name": "Help 51 Victim stallholders in Jurong West fire incident",
    "organizer": "Praveen Kumar Bandi",
    "story": "...",
    "target": 50000.0,
    "created": "2016-06-29T17:00:00.000Z" // new Date(2016, 5, 30)
  }
];

/**
 * [getFundraising description]
 * @return {Array} campaigns list
 */
export function getFundraising() {
  // TODO: calls constracts then return list of campaigns interface
  return mockData
}

/**
 * [getFundraisingAsync description]
 * @return {Promise} Promise of campaigns list
 */
export function getFundraisingAsync() {

  return new Promise((resolve, reject) => {
    // TODO: calls constracts then callback response => resolve(response)
    let error; // undefined
    if (error) {
      reject(error);
    }
    resolve(mockData);
  });
}

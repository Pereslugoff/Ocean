const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const dotenv = require('dotenv').config()
require('dotenv/config')

const personality = new PersonalityInsightsV3({
  authenticator: new IamAuthenticator({ apikey: `${process.env.PERSONALITY_INSIGHTS_APIKEY}` }),
  version: '2017-10-13',
});


const getPersonality = (text) => {
  const content = {
    "contentItems": [
      {
        "content": `${text}`,
        "contenttype": "text/plain",
        "created": 1447639154000,
        "id": "666073008692314113",
        "language": "en"
      },
    ]
  }
  return new Promise(function(resolve, reject){
    personality.profile({content}, (err, res) => {
      if(err){
        reject(err);
      } else {
        resolve(res);
      }
    })
  })
}

module.exports = getPersonality
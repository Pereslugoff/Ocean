const watson = require('watson-developer-cloud/personality-insights/v3')
const dotenv = require('dotenv').config()
require('dotenv/config')

const personality = new watson({
  version: '2017-10-13',
  iam_apikey: `${process.env.PERSONALITY_INSIGHTS_APIKEY}`,
  url: `${process.env.PERSONALITY_INSIGHTS_URL}`
});


const getPersonality = (text) => {
  return new Promise(function(resolve, reject){
    let res = {}
    personality.profile({text}, (err, res) => {
      if(err){
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = getPersonality
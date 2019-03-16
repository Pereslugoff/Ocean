const watson = require('watson-developer-cloud/personality-insights/v3')
const dotenv = require('dotenv').config()

const personality = new watson({
  version: '2017-10-13',
  iam_apikey: `DVjWAR6Yc22NtPLV4935Kstr0oBdJ9aIqEuAesMeOQ-j`,
  url: `https://gateway.watsonplatform.net/personality-insights/api`
  // iam_apikey: `${process.env.PERSONALITY_INSIGHTS_APIKEY}`,
  // url: `${process.env.PERSONALITY_INSIGHTS_URL}`
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

// getPersonality("Why should knowing we are indeed small in time, space, and size have anything to do with insignificance. Bacteria surely don't feel that way and they are billions of times smaller than us, yet they do most of our digesting. Ant's surely don't feel that way yet they likely represent nearly 20% of Earth's biomass. Why not instead think of how awesome it is that our 3lbs Human brain matter actually figured all this out. Why not look up to the clear night sky, and reflect on the fact that we don't simply live in this universe, but the universe lives within us -- through the atoms and molecules of our bodies, forged in the hearts of stars that long-ago gave their lives to the galaxy ... and to us. This is, of course, one aspect of the cosmic perspective that perhaps I and my astrophysics colleagues take for granted, but cannot be told often enough. -NDTyson")
// .then(result => console.log(result))
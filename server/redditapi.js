const axios = require('axios')
const Qs = require('qs')

const get = function(path, argsObj) {
  if (argsObj) {
    argsObj = `?${Qs.stringify(argsObj)}`
  }
  else {
    argsObj = '';
  }
  return axios.get(`https://reddit.com/${path}.json${argsObj}`)
  .then((response) => {
    return response.data;
  });
};

const getUser = function(username) {
  return get(`user/${username}/about`);
};

const getSubreddit = function(name) {
  return get(`r/${name}/about`);
};

const getPostComments = function(subredditName, linkId, options = {}) {
  return get(`r/${subredditName}/comments/${linkId}`, options);
};

const getSubredditListings = function(subredditName, listingType, options = {}) {
  return get(`r/${subredditName}/${listingType}`, options);
};

const getUserComments = (username) => {
  return get(`user/${username}/comments`)
}

module.exports = {
  getUser,
  getSubreddit,
  getPostComments,
  getSubredditListings,
  getUserComments
};

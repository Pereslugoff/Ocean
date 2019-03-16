const {
  getUser,
  getSubreddit,
  getPostComments,
  getSubredditListings,
  getUserComments
} = require("./redditapi");
const getPersonality = require('./watson')
module.exports = {

  Query: {
    user: (parentvalue, { username }) => getUser(username),
    subreddit: (parent, { name }) => getSubreddit(name),
    getPersonality: (parentvalue, { text }) => {
      return getPersonality(text)
      .then(result => {
        return result;
      })
      .catch(error => console.log(error));
    }
  },

  Comment: {
    author: comment => getUser(comment.data.author),
    id: comment => comment.data.id,
    body: comment => comment.data.body
  },

  User: {
    username: user => user.data.name,
    comments: (user, args) => getUserComments(user.data.name).then(data => data.data.children)
  },

  Post: {
    title: post => post.data.title,
    id: post => post.data.id,
    comments: (post, args) => getPostComments(post.data.subreddit, post.data.id, args).then(data => {
      return data[1].data.children
    })
  },

  Subreddit: {
    name: subreddit => subreddit.data.display_name,
    hot: (subreddit, args) => {
      let queryParams = args
      queryParams.t = args.timeInterval
      delete queryParams.timeInterval
      return getSubredditListings(
        subreddit.data.display_name,
        "hot",
        queryParams
      ).then(data => {
        return data.data.children;
      });
    },
    top: (subreddit, args) => {
      let queryParams = args
      queryParams.t = args.timeInterval
      delete queryParams.timeInterval
      return getSubredditListings(
        subreddit.data.display_name,
        "hot",
        queryParams
      ).then(data => {
        return data.data.children;
      })
    },
    newPosts: (subreddit, args) => {
      let queryParams = args
      queryParams.t = args.timeInterval
      delete queryParams.timeInterval
      return getSubredditListings(
        subreddit.data.display_name,
        "new",
        queryParams
      ).then(data => {
        return data.data.children;
      })
    },
    controversial: (subreddit, args) => {
      let queryParams = args
      queryParams.t = args.timeInterval
      delete queryParams.timeInterval
      return getSubredditListings(
        subreddit.data.display_name,
        "controversial",
        queryParams
      ).then(data => {
        return data.data.children;
      })
    },
    rising: (subreddit, args) => {
      let queryParams = args
      queryParams.t = args.timeInterval
      delete queryParams.timeInterval
      return getSubredditListings(
        subreddit.data.display_name,
        "rising",
        queryParams
      ).then(data => {
        return data.data.children;
      })
    },
  },

  Watson: {
    word_count: profile => profile.word_count,
    word_count_message: profile => profile.world_count_message,
    personality_traits_and_scores: profile => {
      return profile.personality.map(trait => {
        const singleTrait = trait.trait_id.split("_")[1];
        return `${singleTrait} - ${trait.percentile}`;
      });
    },
    needs_traits_and_scores: profile => {
      return profile.needs.map(trait => {
        const singleTrait = trait.trait_id.split("_")[1];
        return `${singleTrait} - ${trait.percentile}`;
      });
    },
    values_traits_and_scores: profile => {
      return profile.needs.map(trait => {
        const singleTrait = trait.trait_id.split("_")[1];
        return `${singleTrait} - ${trait.percentile}`;
      });
    }
  }
};


const faker = require("faker");

exports.seed = function (knex, Promise) {
  return knex("clucks")
    .del()
    .then(function () {
      let index = 1;
      const cohorts = Array.from({ length: 20 }).map(() => {
        return {
          userName: faker.internet.userName(),
          content:  faker.lorem.paragraph(),
          imageUrl:
            ["https://i.pinimg.com/474x/40/21/63/4021636b5d203c1aba86e2643a30b87c.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/8/86/Microsoft_Skype_for_Business_logo.png",
              "https://cdn.iconscout.com/icon/free/png-256/bosch-282178.png",
              "http://icons.iconarchive.com/icons/dakirby309/simply-styled/128/YouTube-icon.png",
              "http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/128/Prey-logo-1-icon.png",
              "http://icons.iconarchive.com/icons/limav/flat-gradient-social/128/Twitter-icon.png",
              "http://icons.iconarchive.com/icons/graphics-vibe/neon-glow-social/128/youtube-icon.png",
              "http://icons.iconarchive.com/icons/marcus-roberto/google-play/128/YouTube-icon.png",
              "http://icons.iconarchive.com/icons/hopstarter/rounded-square/128/Social-Network-Facebook-icon.png",
              "http://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/128/google-icon.png",
              "http://icons.iconarchive.com/icons/yootheme/social-bookmark/128/social-twitter-box-blue-icon.png"
            ][Math.floor(Math.random() * 10)]
        };
      });
      return knex("clucks").insert(cohorts);
    });
};

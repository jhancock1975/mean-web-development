module.exports = {
  db: 'mongodb://localhost/mean-book',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '323798774457174',
    clientSecret: 'c78a8d2dee3bf5f3e080d1d25d3bac1e',
    callbackURL: 'http://localhost:3001/oauth/facebook/callback'
  },
  twitter: {
    clientID: 'eSjQ24SyIuOt5WuWKLX965RmF',
    clientSecret: 'uVyj7CWFzeULQwT4Xe0wbIdqdgvBdKzyUhcnZzfNaaB7wEUS0V',
    callbackURL: 'http://localhost:3001/oauth/twitter/callback'
  }
};

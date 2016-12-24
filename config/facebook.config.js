module.exports = {
  'facebookAuth': {
    'clientID': process.env.FACEBOOK_APP_ID || '380261268977382',
    'clientSecret': process.env.FACEBOOK_APP_SECRET || '0167f3a7a8545c29d88bdb141ace0169',
    'callbackUrl': process.env.FACEBOOK_CALLBACK_URL || 'http://localhost:3000/auth/facebook/callback'
  }
}

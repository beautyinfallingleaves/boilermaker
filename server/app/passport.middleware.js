const { User } = require('../db')
const passport = require('passport')
const router = require('express').Router()

router.use(passport.initialize())
router.use(passport.session())

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then(user => done(null, user))
    .catch(done)
})

module.exports = router

require('babel-polyfill')

const inputConfim = require('./assets/javascripts/browsered/form-input-confirm')
const analytics = require('gaap-analytics')

window.jQuery = window.$ = require('jquery')
exports.chargeValidation = require('./utils/charge_validation')
analytics.eventTracking.init()

inputConfim()

// GA tracking if an email typo is spotted
if (document.getElementById('email-uncorrected')) {
  const originalEmail = document.getElementById('email-uncorrected')
  originalEmail.addEventListener('click', () => {
    document.getElementById('submit-card-details').dataset.clickAction = `Uncorrected email: @${originalEmail.value.split('@')[1]}`
  }, false)
  const correctedEmail = document.getElementById('email-corrected')
  correctedEmail.addEventListener('click', () => {
    document.getElementById('submit-card-details').dataset.clickAction = `Corrected email: @${correctedEmail.value.split('@')[1]}`
  }, false)
}

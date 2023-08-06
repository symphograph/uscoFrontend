import moment from 'moment'
import {useQuasar} from "quasar";
import jwt_decode from "jwt-decode";


export function rateInfo (val) {
  let rates = [1, 0.5, 'гпх', 'гпх', 0.25]
  return rates[val - 1]
}

export function fDate(date) {
  if (date) {
    return moment(String(date)).format('DD.MM.YYYY')
  }
  return ''
}

export function toDate(date) {
  let now = moment(new Date()).format('YYYY-MM-DD')
  if(now < date)
    return 'н.в.'
  return fDate(date)
}

export function fDateTime (date) {
  if (date) {
    return moment(String(date)).format('DD.MM.YYYY HH:mm')
  }
  return ''
}

export function notifyOK (message = 'Готово') {
  return {
    color: 'positive',
    position: 'center',
    message: message ?? 'Готово',
    timeout: 100,
    closeBtn: 'x'
  }
}

export function notifyError (error, defaultMsg = 'Ой! Не работает :(') {
  return {
    color: 'negative',
    position: 'center',
    message:
      !!error?.response?.data?.error
        ? error.response.data.error
        : defaultMsg ?? 'Ой! Не работает :(',
    closeBtn: 'x',
    icon: 'report_problem'
  }
}

export function notifyWarning (error, defaultMsg = 'Ой! Не работает :(') {
  return {
    color: 'orange',
    position: 'center',
    message:
      !!error?.response?.data?.error
        ? error.response.data.error
        : defaultMsg ?? 'Ой! Не работает :(',
    timeout: 500,
    closeBtn: 'x',
    icon: 'report'
  }
}

export function isExpired(error) {
  return [
    'Session does not exist',
    'Invalid tokenTime',
    'Token is Expired',
    'tokens is empty'
  ].includes(error?.response?.data?.error)
}

export function powersByJWT(jwt) {
  return jwt_decode(jwt).powers ?? []
}

export function userIdByJWT(jwt) {
  return jwt_decode(jwt).uid ?? 0
}

export function checkPowers(allowed, AccessToken) {
  let powers = powersByJWT(AccessToken)
  return allowed.some(l=>powers.includes(l))
}

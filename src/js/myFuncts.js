import moment from 'moment'
import {copyToClipboard, useQuasar} from "quasar";
import jwt_decode from "jwt-decode";

export class myNotify {

  static q = useQuasar()
  static ok(msg){
    const params  = {
      color: 'positive',
      position: 'center',
      message: msg ?? 'Готово',
      timeout: 100,
      closeBtn: 'x'
    }
    this.q.notify(params)
  }
}

export function rateInfo (val) {
  let rates = [1, 0.5, 'гпх', 'гпх', 0.25]
  return rates[val - 1]
}

export function fDateAnyFormat(inputDate, outputFormat = 'DD.MM.yyyy HH:mm') {
  const formats = [
    'DD.MM.YYYY',
    'YYYY-MM-DD',
    'MM/DD/YYYY',
    'YYYY/MM/DD',
    'MM-DD-YYYY',
    'YYYY.MM.DD',
    'DD.MM.YYYY HH:mm:ss',
    'MM/DD/YYYY HH:mm:ss',
    'YYYY-MM-DD HH:mm:ss',
    'YYYY/MM/DD HH:mm:ss',
    'MM-DD-YYYY HH:mm:ss',
    'YYYY.MM.DD HH:mm:ss',
    'DD.MM.YYYY HH:mm',
    'MM/DD/YYYY HH:mm',
    'YYYY-MM-DD HH:mm',
    'YYYY/MM/DD HH:mm',
    'YYYY-MM-DDTHH:mm:ssZ',  // ISO 8601
    'X'  // Unix timestamp
  ];

  let normalizedDate = null;

  for (const formatStr of formats) {
    const parsedDate = moment(inputDate, formatStr, true);
    if (parsedDate.isValid()) {
      normalizedDate = parsedDate.format(outputFormat);
      break; // Выход из цикла, когда найден правильный формат
    }
  }

  return normalizedDate;
}

export function fDate(date, format = 'DD.MM.YYYY') {
  if (date) {
    return moment(String(date)).format(format)
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

export function authTypeByJWT(jwt) {
  return jwt_decode(jwt).authType ?? 0
}

export function checkPowers(allowed, AccessToken) {
  let powers = powersByJWT(AccessToken)
  return allowed.some(l=>powers.includes(l))
}

export function dynamicForm(path, params, method = 'post') {

  // The rest of this code assumes you are not using a library.
  // It can be made less verbose if you use one.
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}

export function fileExtension(url) {
  const fileName = url.split("/").pop();
  return fileName.split(".").pop();
}

export function baseFileName(fileName) {
  const lastDotIndex = fileName.lastIndexOf(".");
  if (lastDotIndex !== -1 && lastDotIndex !== 0) {
    return fileName.substring(0, lastDotIndex);
  }
  return fileName;
}

export function isMostlyRussian(fileName) {
  const russianRegex = /[а-яА-Я]/g;
  const englishRegex = /[a-zA-Z]/g;

  function countMatches(regex, str) {
    let matches = 0;
    let match;
    while ((match = regex.exec(str)) !== null) {
      matches++;
    }
    return matches;
  }

  let russianCount = countMatches(russianRegex, fileName);
  let englishCount = countMatches(englishRegex, fileName);

  return russianCount > englishCount;
}

export function formData(params) {
  const formData = new FormData();
  Object.entries(params).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData
}

export function delElement(array, propName, propValue) {
  const index = array.findIndex(item => item[propName] === propValue);

  if (index !== -1) {
    array.splice(index, 1);
  }
}

export function isDate(date, format = ['YYYY-MM-DD', 'DD-MM-YYYY']) {
  if (!Array.isArray(format)) {
    format = [format];
  }

  for (const f of format) {
    const parsedDate = moment(date, f, true);
    if (parsedDate.isValid()) {
      return true;
    }
  }

  return false;
}

export function copy (val, q) {
  copyToClipboard(val)
    .then(() => {
      q.notify({
        color: 'positive',
        position: 'center',
        message: 'Скопировано',
        icon: 'content_copy',
        timeout: 1
      })
    })
    .catch(() => {
      // fail
    })
}

export function extractDate(inputString, format = 'YYYY-MM-DD') {
  const dateRegex = /(\d{1,4}[._-]\d{1,2}[._-]\d{2,4})/g;
  const matches = inputString.matchAll(dateRegex);

  for (const match of matches) {
    const dateStr = match[1].replace(/[._-]/g, '-');
    if (!isDate(dateStr)) {
      continue;
    }

    const parsedDate = moment(dateStr, ['YYYY-MM-DD', 'DD-MM-YYYY'], true);
    const formattedDate = parsedDate.format(format);
    return { match: match[1], result: formattedDate };
  }

  return null;
}

export function keyTranslit(str) {
  if(!str) return ''

  let replacer = {
    "q":"й", "w":"ц"  , "e":"у" , "r":"к" , "t":"е", "y":"н", "u":"г",
    "i":"ш", "o":"щ", "p":"з" , "[":"х" , "]":"ъ", "a":"ф", "s":"ы",
    "d":"в" , "f":"а"  , "g":"п" , "h":"р" , "j":"о", "k":"л", "l":"д",
    ";":"ж" , "'":"э"  , "z":"я", "x":"ч", "c":"с", "v":"м", "b":"и",
    "n":"т" , "m":"ь"  , ",":"б" , ".":"ю" , "/":".",
  };

  let i
  let replace
  for(i=0; i < str.length; i++){
    if( replacer[ str[i].toLowerCase() ] !== undefined){

      if(str[i] === str[i].toLowerCase()){
        replace = replacer[ str[i].toLowerCase() ];
      } else if(str[i] === str[i].toUpperCase()){
        replace = replacer[ str[i].toLowerCase() ].toUpperCase();
      }

      str = str.replace(str[i], replace);
    }
  }

  return str;
}

export function getMeta(title, scale = 1) {
  return {
    title: title,
    meta: {
      viewport: {
        name: 'viewport',
        content: `initial-scale=${scale}, width=device-width, user-scalable=yes`
      },
    }
  }
}

export function getMD5Path(md5) {
  const subDir1 = md5.substring(0, 2);
  const subDir2 = md5.substring(2, 4);
  return subDir1 + '/' + subDir2;
}

export function imgUrl(apiUrl, md5, ext, size = 0) {
  if(!md5 || !ext) {
    return '/img/news/default_sketch.svg'
  }
  if(ext === 'svg' || size === 0){
    size = 'original'
  }
  return `${apiUrl}/img/sized/${size}/${getMD5Path(md5)}/${md5}.${ext}`
}




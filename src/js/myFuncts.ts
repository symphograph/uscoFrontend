import moment from 'moment'
import { copyToClipboard, QNotifyCreateOptions } from 'quasar';



export function rateInfo (val :number) {
  let rates = [1, 0.5, 'гпх', 'гпх', 0.25]
  return rates[val - 1]
}

export function fDateAnyFormat(inputDate :string, outputFormat = 'DD.MM.yyyy HH:mm') {
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

export function fDate(date :any, format = 'DD.MM.YYYY') {
  if (date) {
    return moment(String(date)).format(format)
  }
  return ''
}

export function toDate(date: string) {
  let now = moment(new Date()).format('YYYY-MM-DD')
  if(now < date)
    return 'н.в.'
  return fDate(date)
}

export function fDateTime (date: string) {
  if (date) {
    return moment(String(date)).format('DD.MM.YYYY HH:mm')
  }
  return ''
}

export function notifyOK (message = 'Готово') :QNotifyCreateOptions {
  return {
    color: 'positive',
    position: 'center',
    message: message ?? 'Готово',
    timeout: 100,
    closeBtn: 'x'
  }
}

/**
*@returns QNotifyCreateOptions
 */
export function notifyError (error :any, defaultMsg = 'Ой! Не работает :(') :QNotifyCreateOptions {
  return {
    color: 'negative',
    position: 'center',
    message:
      !!error?.response?.data?.error
        ? error.response.data.error
        : !!error?.message ? error?.message : defaultMsg,
    closeBtn: 'x',
    icon: 'report_problem'
  }
}

export function notifyWarning (error :any, defaultMsg = 'Ой! Не работает :(') :QNotifyCreateOptions {
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

export function dynamicForm(path: string,
                            params: { [key: string]: string }, // убрали hasOwnProperty
                            method = 'post') {

  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) { // проверяем через Object.prototype
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


export function fileExtension(url :string) {
  const fileName :string = url.split("/").pop() || '';
  return fileName.split(".").pop();
}

export function baseFileName(fileName :string) {
  const lastDotIndex = fileName.lastIndexOf(".");
  if (lastDotIndex !== -1 && lastDotIndex !== 0) {
    return fileName.substring(0, lastDotIndex);
  }
  return fileName;
}

export function isMostlyRussian(fileName :string) {
  const russianRegex = /[а-яА-Я]/g;
  const englishRegex = /[a-zA-Z]/g;

  function countMatches(regex :RegExp, str :string) {
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

export function formData(params :any) {
  const formData = new FormData();
  Object.entries(params).forEach(([key, value]) => {
    formData.append(key, String(value));
  });
  return formData
}

export function delElement(array :any, propName :string, propValue :any) {
  const index = array.findIndex((item: any) => item[propName] === propValue);

  if (index !== -1) {
    array.splice(index, 1);
  }
}

export function isDate(date :string, format = ['YYYY-MM-DD', 'DD-MM-YYYY']) {
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

export function copy (val :string|number, q: any) {
  copyToClipboard(String(val))
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

export function extractDate(inputString :string, format = 'YYYY-MM-DD') {
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

export function keyTranslit(str :string) {
  if(!str) return ''

  let replacer :any = {
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

export function getMeta(title :string, scale = 1) {
  return {
    title: title,
    meta: {
      viewport: {
        name: 'viewport',
        content: `initial-scale=${scale}, width=device-width, user-scalable=yes`
      },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
    }
  }
}

export function getMD5Path(md5 :string) {
  const subDir1 = md5.substring(0, 2);
  const subDir2 = md5.substring(2, 4);
  return subDir1 + '/' + subDir2;
}

export function imgUrl(apiUrl :string, md5 :string, ext :string, size :number = 0) {
  if(!md5 || !ext) {
    return '/img/news/default_sketch.svg'
  }
  let sizeFolder :number|string = size;
  if(ext === 'svg' || size === 0){
    sizeFolder = 'original'
  }
  return `${apiUrl}/img/sized/${sizeFolder}/${getMD5Path(md5)}/${md5}.${ext}`
}

/**
 * Определение правильной формы слова на основе числа.
 *
 * @param {number} number Число, для которого нужно определить форму слова.
 * @param {Array} wordForms Массив возможных форм слова, например ['яблоко', 'яблока', 'яблок'].
 * @returns {string} Правильная форма слова в зависимости от числа.
 */
export function numDeclension(number :number, wordForms :string[] = ['год', 'года', 'лет']) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  // Правила склонения в русском языке для различных чисел.
  const cases = [2, 0, 1, 1, 1, 2];

  // Определение формы слова на основе числа и контекста.
  const formIndex = (lastTwoDigits > 4 && lastTwoDigits < 20)
    ? 2
    : cases[Math.min(lastDigit, 5)];

  return wordForms[formIndex];
}

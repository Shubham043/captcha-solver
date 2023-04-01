const T = require("tesseract.js");
const image ='https://i.ibb.co/jTKYQqP/Captcha-United.png'

T.recognize(image, 'eng' , {logger: e => console.log(e)})
.then(out => console.log(out))
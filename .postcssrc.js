// 자바스크립트의 경우 브라우저에서 동작하는 용도 or Node.js 환경에서 동작하는 용도로 나뉨
// ESM(ECMA Script Module) - ES6 부터 지원하고 있는 표준 모듈 시스템으로 브라우저에서 동작하는 방식(클라이언트 사이드)
// CommonJS - 번들러를 통한 Node.js 환경에서 동작하는 방식(서버 사이드)

//import autoprefixer from 'autoprefixer'
const autoprefixer = require("autoprefixer");

// export {
//   plugins: [autoprefixer],
// }
module.exports = {
  plugins: [autoprefixer],
};

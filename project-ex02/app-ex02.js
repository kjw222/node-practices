/*
douzone-jw222-math npm 모듈 테스트(모듈 패키지: 로컬 배포)

하기 전에 반드시 설치를 해야함.
npm i ../douzone-jw222-math
명령으로 설치 후 테스트 할 것.
*/

var dzMath = require('douzone-jw222-math');

console.log(dzMath.sum(10, 20, 50, 40));
console.log(dzMath.max(10, 20, 50, 40));
console.log(dzMath.min(10, 20, 50, 40));
(()=>{"use strict";var e={286:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.usersInfoArra=void 0,r.usersInfoArra=[{userid:"127e4567-e89b-12d3-a458-426614174000",name:"John",birthdate:"1982-02-17T21:00:00.000Z",age:40,organization:{name:"Amazon",position:"General manager"}},{userid:"127e4567-e89a-12f3-a458-327395154000",name:"Anna",birthdate:"1988-02-17T21:00:00.000Z",age:34,organization:{name:"Amazon",position:"Manager"}}]},616:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.usersArray=void 0,r.usersArray=[{userid:"127e4567-e89b-12d3-a458-426614174000",name:"John",gender:"man"},{userid:"127e4567-e89a-12f3-a458-327395154000",name:"Anna",gender:"woman"}]}},r={};function n(a){var o=r[a];if(void 0!==o)return o.exports;var s=r[a]={exports:{}};return e[a](s,s.exports,n),s.exports}(()=>{const e=n(616),r=n(286),a=function(e,r){let n=[];for(let a=0;a<e.length;a++){const{name:o,gender:s}=e[a],{organization:{position:t},age:i}=r[a],u={name:o,position:t,age:i,gender:s};n.push(u)}return n}(e.usersArray,r.usersInfoArra);console.log("userPositions",a)})()})();
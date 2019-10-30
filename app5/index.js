import stripJsonComments from 'strip-json-comments';

const json = `{
    // Rainbows
    "unicorn": /* ❤ */ "cake"
}`;
 
const str = JSON.parse(stripJsonComments(json));

console.log(str);
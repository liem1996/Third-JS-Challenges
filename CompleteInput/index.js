
const api = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

/* 
  In order to find a pattern in a string you will mostly want to use regex and string.match method.
  You can create a new regex with a custom string by using the RegExp constructor and apply to it the g an i flags,
  g for global and i in order to ignore case. 
  Example :
    const string = '#$)($#)(hey)#$)(@02)';
    const patternToFind = new RegExp('hey','gi');
    return string.match(patternToFine) // true;
*/
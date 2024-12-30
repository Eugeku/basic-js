const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const MAIN_DEFAULT_SEPARATOR = '+';
  const ADD_DEFAULT_SEPARATOR = '|';
  const DEFAULT_REPEATOR = 1;
  const DEFAULT_VALUE = '';
  const {
    repeatTimes = DEFAULT_REPEATOR,
    separator = MAIN_DEFAULT_SEPARATOR,
    addition = DEFAULT_VALUE,
    additionRepeatTimes = DEFAULT_REPEATOR,
    additionSeparator = ADD_DEFAULT_SEPARATOR
  } = options;

  str = String(str);

  const addStr = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
  const repeatedStr = new Array(repeatTimes).fill(str + addStr).join(separator);

  return repeatedStr;
}

module.exports = {
  repeater
};

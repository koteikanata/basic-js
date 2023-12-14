const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.direct = isDirect;
  }

  /**
   * 
   * @param {String} message 
   * @param {String} key 
   */
  encrypt(message, key) {
    console.log(message, key);
    if (!message || !key) { throw new Error('Incorrect arguments!') }

    let res = '';
    let indexKey = 0;

    for (let i = 0; i < message.length; i++) {
      const strCh = message.charCodeAt(i);

      if (message[i].match(/[A-Za-z]/g)) {
        const keyCh = key.charCodeAt(indexKey);
        // Вычисляем сдвиг на основе ключевого символа
        const shift = keyCh - (keyCh >= 97 ? 97 : 65);

        let encryptedCh;

        if (message[i].match(/[A-Z]/)) {
          encryptedCh = String.fromCharCode((strCh - 65 + shift) % 26 + 65);
        } else {
          encryptedCh = String.fromCharCode((strCh - 97 + shift) % 26 + 97);
        }

        res += encryptedCh;
        indexKey = (indexKey + 1) % key.length;

      } else {
        res += message[i];
      }
    }

    if (this.direct) {
      return res.toUpperCase();
    }
    return res.toUpperCase().split('').reverse().join('')
  }
  /**
   * 
   * @param {String} encryptedMessage 
   * @param {String} key 
   */
  decrypt(encryptedMessage, key) {
    console.log(encryptedMessage, key);
    if (!encryptedMessage || !key) { throw new Error('Incorrect arguments!') }

    let res = '';
    let indexKey = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const strCh = encryptedMessage.charCodeAt(i);

      if (encryptedMessage[i].match(/[A-Za-z]/g)) {
        const keyCh = key.charCodeAt(indexKey);
        // Вычисляем сдвиг на основе ключевого символа
        const shift = keyCh - (keyCh >= 97 ? 97 : 65);

        let encryptedCh;

        if (encryptedMessage[i].match(/[A-Z]/g)) {
          encryptedCh = String.fromCharCode((strCh - 65 - shift + 26) % 26 + 65);
        } else {
          encryptedCh = String.fromCharCode((strCh - 97 - shift + 26) % 26 + 97);
        }

        res += encryptedCh;
        indexKey = (indexKey + 1) % key.length;

      } else {
        res += encryptedMessage[i];
      }
    }


    if (this.direct) {
      return res.toUpperCase();
    }
    return res.toUpperCase().split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};

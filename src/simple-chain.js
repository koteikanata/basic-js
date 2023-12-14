const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value === undefined ? '(   )' : `( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position >= this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};


// assert.deepEqual(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain(), '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )');
// assert.deepEqual(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain(), '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )');


module.exports = {
  chainMaker
};

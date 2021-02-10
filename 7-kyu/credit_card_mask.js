/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most
 secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. **/

const cc1 = '4556364607935616';
const cc2 = '11111';
const cc3 = '1';

//const maskify = cc => cc.length > 3 ? cc.slice(0, -4).toString().split('').map(item => '#').join('') +
// cc.slice(-4) : cc;

const maskify = cc => cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);

const result1 = maskify(cc1);
const result2 = maskify(cc2);
const result3 = maskify(cc3);

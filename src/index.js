const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const morse_letters = [];
    const lat_letters = [];
    expr.split('**********')
        .map(el => el.split(''))
        .forEach(element => {
        while (element.length) morse_letters.push(element.splice(0, 10))
        morse_letters.push(' ');
        });
    morse_letters.pop();
    morse_letters.forEach(el => {
        const kek = []
        if (el === ' ') lat_letters.push([[' ']])
        else { while (el.length) {
              kek.push(el.splice(0, 2))
            }
            lat_letters.push(kek);
        }
    })
    return lat_letters.map(element => element.map(el => {
        if (el.join('') === '00') return '';
        if (el.join('') === '10') return '.';
        if (el.join('') === '11') return '-';
     })).map(el => MORSE_TABLE[el.join('')])
        .map(el => el ? el : ' ').join('');
}

module.exports = {
    decode
}
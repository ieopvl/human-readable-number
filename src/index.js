module.exports = function toReadable (number) {
    if (number === 0) return 'zero';

    let result = '';
    const digits = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const dozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    const numberString = String(number);

    const condition1 = numberString.length === 1 || numberString[0] === '1' && numberString.length === 2;
    const condition2 = numberString.length === 2 && numberString[0] !== '1';
    const condition3 = numberString.length === 3;

    if (condition1) result = digits[number];
    if (condition2) result = dozens[numberString[0]] + ' ' + toReadable(numberString[1]);
    if (condition3) result = digits[numberString[0]] + 'hundred ' + toReadable(numberString.slice(1));

    return result.trim();
}

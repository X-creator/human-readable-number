module.exports = function toReadable(number) {
    if (number === 0) return 'zero';

    let under_20 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decimals = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];

    let calcUnder_100 = (number) => {
        if (number < 20) {
            return under_20[number - 1] || '';
        } else if (number >= 20) {
            let num = String(number).split('');
            return `${decimals[num[0] - 2]} ${under_20[num[1] - 1] || ''}`.trim();
        }
    };

    if (number < 100) return calcUnder_100(number);

    let result = '';
    let arr = String(number).split('');
    let under100 = arr.splice(-2, 2).join('');

    arr.reverse().forEach((num, idx) => {
        let digit;
        if (idx === 0) {
            digit = (num > 0) ? `${under_20[num - 1]} hundred` : '';
        } else if (idx === 1) {
            digit = (num > 0) ? `${under_20[num - 1]} thousand` : '';
        }
        result = `${digit} ${result}`;
    });
    result = `${result.trim()} ${calcUnder_100(under100)}`;
    return result.trim();
};

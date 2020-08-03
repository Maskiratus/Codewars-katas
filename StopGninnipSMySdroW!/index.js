function spinWords(str) {
    return str.split(' ').map(el => {
        if(el.length >= 5) {
            return el.split('').reverse().join('');
        } else {
            return el;
        }
    }).join(' ');
}

console.log(spinWords("Just kidding there is still one more"));
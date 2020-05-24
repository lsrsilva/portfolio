function convertDecimalToBinary(binary) {
    var decimal = 0;
    if (binary !== undefined && binary !== '') {
        for(let i =  binary.length ; i > 0; i--) {
            decimal += parseInt(binary[i -1]) * Math.pow(2, binary.length - i);
        }

        if (!isNaN(decimal)) {
            document.getElementById('result').value = decimal;
        }
    } else {
        document.getElementById('result').value = '';
    }
}

function acceptZeroOrOne(event) {
    if (event.key !== '0' && event.key != '1') {
        event.preventDefault();
    }
}

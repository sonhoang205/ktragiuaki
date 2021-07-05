let input = prompt('Nhập vào chữ/số')

if (input == input.split('').reverse().join('')) {
    alert(input + ' đối xứng.');
}
else {
    alert(input + ' không đối xứng.');
}
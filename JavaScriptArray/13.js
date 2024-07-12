var arr = [];

function addElement() {
    var item = document.getElementById("item").value;
    arr.push(item);
    document.getElementById("item").value = ""; // Clear input field after adding
}

function displayElement() {
    var store = '';
    for (var i = 0; i < arr.length; i++) {
        store += 'Element ' + i + ' = ' + arr[i] + '<br>';
    }
    document.getElementById('array').innerHTML = store;
}
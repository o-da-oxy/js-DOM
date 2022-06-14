function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let option = document.createElement('option');
    option.textContent = `${text}, ${value}`;
    document.getElementById('menu').appendChild(option);
    document.getElementById('newItemText').value = null;
    document.getElementById('newItemValue').value = null;
}
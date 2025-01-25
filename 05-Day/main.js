let fields = document.getElementById('fields')
let removeBtn = document.getElementById('removeBtn')
let addBtn = document.getElementById('addBtn')


addBtn.onclick = function () {
    const newElement = document.createElement('input');
    // <input type="text" name="field" placeholder="Another Field"></input>
    newElement.setAttribute ('type' , 'text');
    newElement.setAttribute ('name' , 'field');
    newElement.setAttribute ('placeholder' , 'Another Field');

    fields.appendChild(newElement);

}

removeBtn.onclick = function() {
    let input_tags = fields.getElementByTagName('input')
    if (input_tags.length > 2 ){
        fields.removeChild(input_tags[(input_tags.length) -1 ])
    }
}
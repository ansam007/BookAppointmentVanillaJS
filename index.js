var btn = document.querySelector('#submit');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    var obj = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phonenumber: document.querySelector('#phonenumber').value,
    }

    localStorage.setItem(obj.email, JSON.stringify(obj));

    var ul = document.querySelector('#item');
    var li = document.createElement('li');

    var deleteBtn = document.createElement('button');
    deleteBtn.id = "deleteButton";
    deleteBtn.className = "deleteButton";
    deleteBtn.appendChild(document.createTextNode('Delete'));

    var editBtn = document.createElement('button');
    editBtn.id = "editButton";
    editBtn.className = "editButton";
    editBtn.appendChild(document.createTextNode('Edit'));

    deleteBtn.addEventListener('click', function() {
        deleteBtn.parentElement.remove();
        localStorage.removeItem(obj.email);
    });

    editBtn.addEventListener('click', function() {
        editBtn.parentElement.remove();
        document.querySelector('#name').value = obj.name;
        document.querySelector('#email').value = obj.email;
        document.querySelector('#phonenumber').value = obj.phonenumber;
        localStorage.removeItem(obj.email);
    });

    var textContent = "Name: " + obj.name + " Email: " + obj.email + " Phone Number: " + obj.phonenumber;
    li.textContent = textContent;
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);
});









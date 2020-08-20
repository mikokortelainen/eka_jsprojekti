function onClick() {


var x = document.createElement("div");  // Creates a new <div> node
x.textContent = "Hello, world";         // Sets the text content
document.body.appendChild(x);           // Adds to the document



}

function foo(obj) {

    obj.disabled = true;

    /*obj.disabled = true;
    setTimeout(function() {
        obj.disabled = false;
    }, 9999999);*/

}

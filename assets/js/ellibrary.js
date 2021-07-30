// Elliott's JS utility functions

function log(x){
    console.log(x);
}

function qs(selector){
    return document.querySelector(selector);
 }

function qsa(selector){
    return document.querySelectorAll(selector);
}

function qsarray(selector){
    return Array.from(document.querySelectorAll(selector));
}
 
function ael(element, event, Function){
    if(typeof element === 'string' || element instanceof String){
        qs(element).addEventListener(event, () => {
            Function();
        });
    }
    else{
        element.addEventListener(event, () => {
            Function();
        });
    }
}

function InsertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function NewElement(type, classes, referenceElement){
    let newElement = document.createElement(type);
    if(classes){
        for(let i = 0; i < classes.length; i++){
            newElement.classList.add(classes[i]);
        }
    }
    if(referenceElement) InsertAfter(newElement, referenceElement);
    else return newElement;
}

function GetDimensions(element){
    let rect = element.getBoundingClientRect();
    let dims = {
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
        width: rect.width,
        height: rect.height
    }
    return dims;
}

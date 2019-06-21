console.log("hou 22");
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        console.log("hey");
        
        navigator.serviceWorker.register('./service-worker.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}



var template = document.getElementById("template-textfield")
document.body.appendChild(template.content.cloneNode(true))
document.body.appendChild(template.content.cloneNode(true))
document.body.appendChild(template.content.cloneNode(true))
import { MDCTextField } from '@material/textfield/index';


const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function (el) {
    return new MDCTextField(el);
});




import { MDCSelect } from '@material/select';

const select = new MDCSelect(document.querySelector('.mdc-select'));

select.listen('MDCSelect:change', () => {
    console.log(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});
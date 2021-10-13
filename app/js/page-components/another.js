import {flatten} from 'lodash-es';
import ListsDao from "../dao/ListsDao";

function createComponent() {
    const element = document.createElement('div');
    const number = 9007199254740992n + 1n;
    element.innerHTML = 'flattening [1,2,3]' + flatten([1,2,3]);
    element.innerHTML += "<br />And a big number is " + number;
    console.log('the lists are ', ListsDao.getLists())
    return element;
}

document.body.appendChild(createComponent());
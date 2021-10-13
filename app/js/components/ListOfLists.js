import ListsDao from '../dao/ListsDao'
import css from '../../css/lists.scss'

export class ListOfLists extends HTMLElement {
    constructor() {
        super();
        this.innerText='Im atonomoussss, here are lists'
        this.appendChild(createUl())
    }
}

function createUl() {
    const ul = document.createElement("ul");
    ListsDao.getLists().forEach(list=>{
        ul.appendChild(createLi(list))
    })
    return ul;
}

function createLi(list) {
    const li = document.createElement("li");
    li.innerText = list.title;
    return li;
}
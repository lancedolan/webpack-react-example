import ListsDao from '../dao/ListsDao'
import css from '../../css/lists.scss'

const BOOTSTRAP_LISTGROUP_CLASS = 'list-group'
const BOOTSTRAP_LISTGROUP_ITEM_CLASS = 'list-group-item'

export class ListOfLists extends HTMLElement {
    constructor() {
        super();
        this.appendChild(createUl())
    }
}

function createUl() {
    const ul = document.createElement("ul");
    ul.setAttribute('class', BOOTSTRAP_LISTGROUP_CLASS)
    ListsDao.getLists().forEach(list=>{
        ul.appendChild(createLi(list))
    })
    return ul;
}

function createLi(list) {
    const li = document.createElement("li");
    li.setAttribute('class', BOOTSTRAP_LISTGROUP_ITEM_CLASS)
    li.innerText = list.title;
    const dateSpan = document.createElement('span')
    dateSpan.innerText = new Date(list.date).toLocaleDateString()
    dateSpan.setAttribute('class', 'badge bg-secondary d-none d-md-inline ld-date')
    li.appendChild(dateSpan)
    return li;
}
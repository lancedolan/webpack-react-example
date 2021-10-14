import {now} from 'lodash-es'

const day = 8.64e+7

const LISTS = [
    {
        title: 'List 1',
        date: now() - day
    },
    {
        title: 'List 2',
        date: now() - day * 2
    },
    {
        title: 'List 3',
        date: now() - day * 3
    },
    {
        title: 'List 4',
        date: now() - day * 4
    }
]
export default new class ListsDao {
    getLists() {
        return LISTS
    }
}
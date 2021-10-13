const LISTS = [
    {
        title: 'List 1'
    },
    {
        title: 'List 2'
    },
    {
        title: 'List 3'
    },
    {
        title: 'List 4'
    }
]
export default new class ListsDao {
    getLists() {
        return LISTS
    }
}
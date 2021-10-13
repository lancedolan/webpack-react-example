import listsDao from "../../app/js/dao/ListsDao";

describe('Lists Dao', ()=>{
    it('Shouldnt be empty', ()=>{
        expect(listsDao.getLists().length).toBeGreaterThan(0)
    })
})


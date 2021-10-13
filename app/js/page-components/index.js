import {join} from 'lodash-es';

class ComponentCreator {

    create() {
        const element = document.createElement('div');
        element.innerHTML = join(['Hello', 'webpack'], ' ');
        return element;
    }

}
(()=>{
    document.body.prepend(new ComponentCreator().create());
})()

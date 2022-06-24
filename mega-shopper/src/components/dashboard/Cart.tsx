import { Navigate } from 'react-router-dom';
import { User } from '../../models/user';

import {List, Datagrid, TextField, Filter, SearchInput} from 'react-admin';

import { ItemType } from '../../models/item';

const ItemFilter = (props: any) => (
    <Filter {...props}>
        <SearchInput placeholder='Search items...' source='title' resettable alwaysOn>
        </SearchInput>
    </Filter>   
);  // would it make sense to use the item title? 


// TO-DO: add functions pulling from the api
function Cart(props: Array<any>) { //to-do: put this in the props
    let items: Array<ItemType> = [{id: 1, title: 'Testing', desc: 'Test description', price: 1.99, categoryId: 1}, 
    {id: 2, title: 'Testing', desc: 'Test description', price: 1.99, categoryId: 1},
    {id: 3, title: 'Testing', desc: 'Test description', price: 1.99, categoryId: 1}];
}

export default Cart;
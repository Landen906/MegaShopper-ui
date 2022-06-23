import { Navigate } from 'react-router-dom';
import { User } from '../../models/user';

import {List, Datagrid, TextField, Filter, SearchInput} from 'react-admin';

const ItemFilterBy = (props: any) => (
    <Filter {...props}>
        <SearchInput placeholder='Search items...' source='title' resettable alwaysOn>
        </SearchInput>
    </Filter>   
);  // would it make sense to use the item title? 

function Cart(props: any) {

    return(
        <div><p>This is a test!</p></div>
    );
}

export default Cart;
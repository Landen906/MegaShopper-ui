import { Navigate } from "react-router-dom";
import { User } from "../../models/user";

import { List, Datagrid, TextField, Filter, SearchInput } from "react-admin";

import { ItemType } from "../../models/item";
const items: Array<ItemType> = [
    {
        id: 1,
        title: "Testing",
        desc: "Test description",
        price: 1.99,
        categoryId: 1,
        img: "https://media.discordapp.net/attachments/535920055121346563/989735250206797824/20220623_223411.jpg",
    },
    {
        id: 2,
        title: "Testing",
        desc: "Test description",
        price: 1.99,
        categoryId: 1,
        img: "https://media.discordapp.net/attachments/535920055121346563/989735250206797824/20220623_223411.jpg",
    },
    {
        id: 3,
        title: "Testing",
        desc: "Test description",
        price: 1.99,
        categoryId: 1,
        img: "https://media.discordapp.net/attachments/535920055121346563/989735250206797824/20220623_223411.jpg",
    },
];
const ItemFilter = (props: any) => (
	<Filter {...props}>
		<SearchInput
			placeholder="Search items..."
			source="title"
			resettable
			alwaysOn
		></SearchInput>
	</Filter>
); // would it make sense to use the item title?

// TO-DO: add functions pulling from the api
function Cart(): any {
	//to-do: put this in the props
	
	items.forEach(item => {
        return (
            <>
                <li className="collection-item avatar" key={item.id}>
                    <div className="image">
                        <img src={item.img}></img>
                        </div>
                    <div className="description">
                        <p>{item.title}</p>
                        <p>{item.desc}</p>
                        <p>Price: {item.desc}</p>
                    </div>
                </li>
		    </>
        );       
    });		
    
}

function getItems(items: Array<ItemType>) {

}
export default Cart;

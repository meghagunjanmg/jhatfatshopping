import {createAppContainer, createDrawerNavigator,} from 'react-navigation';

import Home from "../activity/Home";
import Category from "../activity/Category";
import Search from "../activity/Search";
import PickDrop from "../activity/DrawerScreens/PickDrop";
import Cart from "../activity/Cart";


const HamburgerNavigation = createDrawerNavigator(
    {
        Home: {
            screen: Home,
        },
        Category: Category,
        Search:Search,
        PickDrop:PickDrop,
        Cart:Cart
    },
    {
        initialRouteName: "Home",
        
    }
 );

 export default createAppContainer(HamburgerNavigation);
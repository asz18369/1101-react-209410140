import React, { useState } from 'react';
import './Directory_40.scss'
import MenuItem_40 from './MenuItem_40';
import items from './menu-item-data'

const Directory_40 = () => {
    const [menuItems,setMenuItems] = useState(items);
    console.log('menuItems',menuItems)
    return (
        <div class="directory-menu">
            { menuItems.map( item =>{
                const {id, name, remoteUrl, size} = item;
                return (
                    <MenuItem_40 key={id} name={name} remoteUrl={remoteUrl} size={size} />
                )
            })

            }
        </div>
    )
}

export default Directory_40;


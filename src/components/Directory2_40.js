import React, { useState, useEffect } from 'react';
import './Directory_40.scss'
import axios from 'axios';
import MenuItem_40 from './MenuItem_40';
// import items from './menu-item-data'

const Directory2_40 = () => {
    const [menuItems,setMenuItems] = useState ([]);

    useEffect(() => {
        const fetchMenuItems = async() => {
            const HEROKU_URL = 'https://heroku-crown40.herokuapp.com/api_40/category_40';
            const {data} = await axios.get(HEROKU_URL)
            console.log('/api/category_40',data)
            setMenuItems(data)
        }
        fetchMenuItems()
    }, [])

    console.log('menuItems',menuItems)
    return (
        <div class="directory-menu">
            { menuItems.map( item =>{
                const {id, name, remote_url, size} = item;
                return (
                    <MenuItem_40 key={id} name={name} remote_url={remote_url} size={size} />
                )
            })
            }
        </div>
    )
}

export default Directory2_40;


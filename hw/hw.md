### W04 HomeWork
#### P1
1.  (local) 請以 App_xx.js 顯示下圖片，繳交
Chrome 截圖
目錄結構及App_xx部分內容截圖  (以學號後2碼來展開category內容，其他收起)
App_xx.js code (程式碼，非圖片 )
![](https://i.imgur.com/VcSz63u.png)
![](https://i.imgur.com/PilBVks.jpg)
```
import logo from './logo.svg';
import './App_40.scss';

function App_40() {
  return (
    <div>
      <div class="homepage">
    <div class="directory-menu">
      <div class="menu-item">
          <img class="background-image" src="https://i.ibb.co/cvpntL1/hats.png" alt=""></img>
        <a href="./hats.html" class="content">
            <h1 class="title">HATS</h1>
            <span class="subtitle">SHOP NOW</span>          
        </a>
      </div>
      <div class="menu-item">
        <img class="background-image" src="https://i.ibb.co/px2tCc3/jackets.png" alt=""/>
        <a href="./jackets.html" class="content">
          <h1 class="title">JACKETS</h1>
          <span class="subtitle">SHOP NOW</span>          
        </a>
      </div>
      <div class="menu-item">
        <img class="background-image" src="https://i.ibb.co/0jqHpnp/sneakers.png" alt=""/>
        <a href="./sneakers.html" class="content">
          <h1 class="title">SNEAKERS</h1>
          <span class="subtitle">SHOP NOW</span>
        </a>
      </div>
      <div class="large menu-item">
        <img class="background-image" src="https://i.ibb.co/GCCdy8t/womens.png" alt=""/>
        <a href="./womens.html" class="content">
          <h1 class="title">WOMENS</h1>
          <span class="subtitle">SHOP NOW</span>             
        </a>
      </div>
      <div class="large menu-item">
        <img class="background-image" src="https://i.ibb.co/R70vBrQ/men.png" alt=""/>
        <a href="./mens.html" class="content">
          <h1 class="title">MENS</h1>
          <span class="subtitle">SHOP NOW</span>           
        </a>
      </div>
    </div>
    </div>
    </div>
    
  );
}

export default App_40;
```

---

#### P2
2.  (local) 將 homepage 分成如下圖的components，Homepage_xx.js, Direcory_xx.js, MenuItem_xx.js，並且能夠正常顯示如第1題。繳交
Chrome 截圖
目錄結構，要含所有用到的components 
Homepage_xx.js code (程式碼，非圖片 )
Directory_xx.js code
MenuItem_xx.js code
![](https://i.imgur.com/O7On39u.jpg)
![](https://i.imgur.com/eKWddBK.png)
Homepage.code截圖
```
import React from 'react';
import Directory_40 from '../components/Directory_40';
import './Homepage_40.scss'

const Homepage_40 = ()=>{
    return(
        <div className='homepage'>
            <Directory_40/>
        </div>
    )
}

export default Homepage_40;
```
Directory.code截圖
```
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
                    <MenuItem_40 id={id} name={name} remoteUrl={remoteUrl} size={size} />
                )
            })

            }
        </div>
    )
}

export default Directory_40;
```
Menuitem.code截圖
```
import React from "react";
import './MenuItem_40.scss'

const MenuItem_40 = ({name, remoteUrl, size}) =>{

    return (
    <div className={`${size} menu-item`}>
      <img className="background-image" src={remoteUrl} alt="" />
      <a href="./hats.html" className="content">
        <h1 className="title">{name}</h1>
        <span className="subtitle">SHOP NOW</span>
      </a>
    </div>
  );
};


export default MenuItem_40;
```

---
#### P3
![](https://i.imgur.com/O7On39u.jpg)

JSON 陣列 (程式碼，非圖片 )
```
const items = [
    {
        id: 1,
        name: 'HATS',
        remoteUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        size: ''
    },
    {
        id: 2,
        name: 'JACKETS',
        remoteUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        size: ''
    },
    {
        id: 3,
        name: 'SNEAKERS',
        remoteUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: ''
    },
    {
        id: 4,
        name: 'WOMENS',
        remoteUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large'
    },
    {
        id: 5,
        name: 'MENS',
        remoteUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large'
    }
]

export default items;
```
Directory_40.js code (程式碼，非圖片 )

```
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
                    <MenuItem_40 id={id} name={name} remoteUrl={remoteUrl} size={size} />
                )
            })

            }
        </div>
    )
}

export default Directory_40;


```
import reduceReducers from 'reduce-reducers';
import cartHandler from './cartHandler'
import itemSorter from './itemSorter'

import Item1 from '../../images/1.png'
import Item2 from '../../images/2.jpg'
import Item3 from '../../images/3.jpg'
import Item4 from '../../images/4.jpg'
import Item5 from '../../images/5.jpg'
import Item6 from '../../images/6.jpg'

const initState = {
    items: [
      {
        id: 1,
        name: 'GEFORCE RTX 2080',
        price: '129.00',
        status: 'New',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
        image: Item1
      },
      {
        id: 2,
        name: 'Graphic Card (Ram 4GB) AMD RX580 AORUS',
        price: '19.00',
        status: 'Promotion',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
        image: Item2
      },
      {
        id: 3,
        name: 'PNY - NVIDIA GeForce GTX 1050 2GB GDDR5 PCI Express 3.0 Graphics Card',
        price: '6.00',
        status: 'New',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
        image: Item3
      },
      {
        id: 4,
        name: 'Graphic Card (Ram 4GB) RX580 PULSE',
        price: '33.00',
        status: 'New',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
        image: Item4
      },
      {
        id: 5,
        name: 'Colorful iGame GTX1060 Vulcan U 6G 6GB GDDR5 Graphics Card',
        price: '9.00',
        status: 'Discount',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
        image: Item5
      },
      {
        id: 6,
        name: 'MSI GeForce GT 710 2GB DDR3 Dual-DVI-D HDMI Graphics Card',
        price: '229.00',
        status: 'soon on sale',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
        image: Item6
      }
    ],
    addedItems:[],
    total: 0

}
export const reducer = reduceReducers(initState, itemSorter, cartHandler);

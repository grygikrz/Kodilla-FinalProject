const initState = {
    items: [
      {
        id: 1,
        name: 'GEFORCE RTX 2080',
        price: '129.00',
        status: 'New',
        image: '../../images/1.jpg'
      },
      {
        id: 2,
        name: 'Graphic Card (Ram 4GB) AMD RX580 AORUS',
        price: '19.00',
        status: 'Promotion',
        image: '/images/2.jpg'
      },
      {
        id: 3,
        name: 'PNY - NVIDIA GeForce GTX 1050 2GB GDDR5 PCI Express 3.0 Graphics Card',
        price: '6.00',
        status: 'New',
        image: '/images/3.jpg'
      },
      {
        id: 4,
        name: 'Graphic Card (Ram 4GB) RX580 PULSE',
        price: '33.00',
        status: 'New',
        image: '/images/4.jpg'
      },
      {
        id: 5,
        name: 'Colorful iGame GTX1060 Vulcan U 6G 6GB GDDR5 Graphics Card',
        price: '9.00',
        status: 'Discount',
        image: '/images/5.jpg'
      },
      {
        id: 6,
        name: 'MSI GeForce GT 710 2GB DDR3 Dual-DVI-D HDMI Graphics Card',
        price: '229.00',
        status: 'soon on sale',
        image: '/images/6.jpg'
      }
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{

    return state;

}
export default cartReducer;

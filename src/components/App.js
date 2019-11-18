import React, {Component}  from 'react'
import Products from './Products'
//import Search from './Search'


var products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$69.00',
    status: 'Nowość',
    image: '/images/Warstwa1.png'
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$69.00',
    status: 'Nowość',
    image: '/images/Warstwa2.png'
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$69.00',
    status: 'Nowość',
    image: '/images/Warstwa3.png'
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$69.00',
    status: 'Nowość',
    image: '/images/Warstwa4.png'
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$69.00',
    status: 'Nowość',
    image: '/images/Warstwa6.png'
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$69.00',
    status: 'Nowość',
    image: '/images/Warstwa7.png'
  }
];
class App extends Component {
  constructor() {
   super();
   this.state = {
     loading: false,
     searchingText: '',
     gif: {}
   }
 }
 handleSearch = (searchingText) => {  // 1.
      this.setState({
        loading: true  // 2.
      })
  };
  render()
{
  return (
            <Products items={products} />
          );
    }
}

export default App;

import './App.css';
import { Component, useState } from 'react'
import Navbar from './components/Navbar'
import ProductsGrid from './components/ProductsGrid'

function App(props) {

  const [myProducts, setMyProducts] = useState([
    {
      title: "produit 1",
      caption: "Ma super caption",
      quantity: 1
    },
    {
      title: "produit 2",
      caption: "Ma super caption",
      quantity: 1
    },
    {
      title: "produit 3",
      caption: "Ma super caption",
      quantity: 1
    },
    {
      title: "produit 4",
      caption: "Ma super caption",
      quantity: 1
    },
    {
      title: "produit 5",
      caption: "Ma super caption",
      quantity: 1
    },
    {
      title: "produit 6",
      caption: "Ma super caption",
      quantity: 1
    },
  ])
  const [myCart, setMyCart] = useState([])

  const addToCart = (prod) => {
    if (myCart.find((e) => e.title == prod.title) != null) {
      myCart[myCart.findIndex(e => e.title == prod.title)].quantity++
    } else {
      setMyCart([...myCart, prod])
      console.log(myCart)
    }
  }

  const deleteFromCart = prod => {
    setMyCart([...myCart.filter((e) => e.title != prod.title)])
  }

  return <div className="main">
    <Navbar deleteFromCart={deleteFromCart} myCart={myCart} />
    <ProductsGrid addToCart={addToCart} myProducts={myProducts} />
  </div>;
}

// class App extends Component {
//   state = {
// myProducts: [
//   {
//     title: "produit 1",
//     caption: "Ma super caption",
//     quantity: 1
//   },
//   {
//     title: "produit 2",
//     caption: "Ma super caption",
//     quantity: 1
//   },
//   {
//     title: "produit 3",
//     caption: "Ma super caption",
//     quantity: 1
//   },
//   {
//     title: "produit 4",
//     caption: "Ma super caption",
//     quantity: 1
//   },
//   {
//     title: "produit 5",
//     caption: "Ma super caption",
//     quantity: 1
//   },
//   {
//     title: "produit 6",
//     caption: "Ma super caption",
//     quantity: 1
//   },
// ],
//     myCart: []
//   }

//   addToCart = (prod) => {
//     if (this.state.myCart.find((e) => e.title == prod.title) != null) {
//       this.state.myCart[this.state.myCart.findIndex(e => e.title == prod.title)].quantity++
//     } else {
//       this.setState(prevState => ({
//         myCart: [...prevState.myCart, prod]
//       }))
//       console.log(this.state.myCart)
//     }
//   }

//   deleteFromCart = prod => {
//     this.setState({
//       myCart: [...this.state.myCart.filter((e) => e.title != prod.title)]
//     })
//   }

//   render() {


//     return <div className="main">
//       <Navbar deleteFromCart={this.deleteFromCart} myCart={this.state.myCart} />
//       <ProductsGrid   addToCart={this.addToCart} myProducts={this.state.myProducts} />
//     </div>;
//   }
// }



export default App;











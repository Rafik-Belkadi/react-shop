import './App.css';
import { Component } from 'react'
import Navbar from './components/Navbar'
import ProductsGrid from './components/ProductsGrid'
class App extends Component {
  state = {
    myProducts: [
      {
        title: "produit 1",
        caption: "Ma super caption"
      },
      {
        title: "produit 2",
        caption: "Ma super caption"
      },
      {
        title: "produit 3",
        caption: "Ma super caption"
      },
      {
        title: "produit 4",
        caption: "Ma super caption"
      },
      {
        title: "produit 5",
        caption: "Ma super caption"
      },
      {
        title: "produit 6",
        caption: "Ma super caption"
      },
    ],
    myCart: []
  }

  addToCart = (prod) => {
    this.setState(prevState => ({
      myCart: [...prevState.myCart, prod]
    }))
    console.log(this.state.myCart)
  }

  render() {
    

    return <div className="main">
      <Navbar myCart={this.state.myCart} />
      <ProductsGrid addToCart={this.addToCart} myProducts={this.state.myProducts} />
    </div>;
  }
}


export default App;











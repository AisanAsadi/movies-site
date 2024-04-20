import React, { useState, useEffect } from "react";
import './App.css';
import Wrapper from "./hoc/Wrapper";
import ProductList from "./Product/ProductList";
import Main_Movie from "./Main/Main_Movie";



const App = () => {




  const [products, setProducts] = useState([])
  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch('https://moviesapi.ir/api/v1/genres')
      const responoseData = await response.json()
      setProducts(responoseData)
    }
    sendRequest()

  }, []);

  const [data, setdata] = useState([])
  useEffect(() => {
    const Request = async () => {

      const res= await fetch('https://moviesapi.ir/api/v1/movies/5')
      const resData = await res.json()
      setdata(resData)
    }
    Request()

  }, []);






  const deletProduct = () => {
    console.log("delet");
  }





  // useEffect(() => {
  //   const sendRequest = async () => {
  //     const response = await
  //       fetch("https://moviesapi.ir/api/v1/genres", {
  //         method: "GET",



  //       })

  //     const responoseData = await response.json()


  //     setProducts(responoseData)
  //   }

  //   sendRequest()
  // }, [])


  return (
    <div>
      <Wrapper />
      <div className="app">
      <Main_Movie
        products={products}
        onDelet={deletProduct} />

      <ProductList data={data}/>


</div>


    </div>
  )
}


export default App;

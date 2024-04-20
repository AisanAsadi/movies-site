import React from "react";
import Product from "./Product";
import "./productList.css"




const ProductList = ({ data }) => {



    return (
        <div className="productlist">
            <div className="right_content">
                <p key={data.id} >  {data.title}نام   </p>
                <p key={data.id} >   {data.year}  سال</p>
                <i className="score"><p key={data.id}>  {data.imdb_rating}امتیاز:  </p> </i>
                <p key={data.id} > {data.released} زمان </p>
                <p key={data.id} > {data.genres}ژانر</p>
                <p key={data.id} > {data.director}ژانر</p>
                <p key={data.id} > {data.country}ساخت</p>
                <p key={data.id} > {data.writer}نویسنده</p>
                <p key={data.id} > {data.actors}بازیگران</p>
                
   <div className="img_list">
                <span className="img">
                    <img key={data.id}
                        src="https://moviesapi.ir/images/tt0071562_poster.jpg"
                        width={110}
                        height={220} />
                </span>
                
           
            
            </div>
         

            </div>
         







        </div>

    )
}



export default ProductList
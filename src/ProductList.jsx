import React from "react";

class ProductList extends React.Component{
    state={
        product:{
            product_Name:"Casio A1173 Enticer Men's ( MTP-V300D-1AUDF ) Analog Watch - For Men",
            product_Image:"https://rukminim1.flixcart.com/image/880/1056/kdlzte80/watch/b/s/4/a1173-casio-original-imafuheaguwycnfc.jpeg?q=50",
            product_Price:2794,
            product_Qty:2,
        }
    }
    descHandler=()=>{
        this.setState({
            product:{
                ...this.state.product,
                product_Qty:this.state.product.product_Qty-1,
            }
        })
    }
    incHandler=()=>{
        this.setState({
            product:{
                ...this.state.product,
                product_Qty:this.state.product.product_Qty+1,
                
            }
            
        })
    }
    
    render(){
           
         return(<>
                  <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">No of Product</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Product Total</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{this.state.product.product_Name}</td>
                    <td> <img src={this.state.product.product_Image}
                            height="50px"
                            width="50px"
                     /></td>
                     <td>
                     <button className="btn btn-primary btn-sm" onClick={this.descHandler}>-</button>
                     {/* {this.state.product.product_Qty} */}
                        {this.state.product.product_Qty > 1 ? this.state.product.product_Qty-1:1}
                    <button className="btn btn-success btn-sm"onClick={this.incHandler}>+</button></td>
                    <td>{this.state.product.product_Price}</td>
                    <td>{this.state.product.product_Qty*this.state.product.product_Price}</td>
                </tr>
                </tbody>
                </table>
            </>
        )
    }
}
export default ProductList;
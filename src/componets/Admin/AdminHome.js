import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/donor.css";

class AdminHome extends Component {
  render() {
    return (
      <Fragment>
        {/* {/* End of Navbar */}

        {/* <section id="sectionF1">
          <div className="row container-fluid m-5 ">
            <div className="col-md-3">
              <div className="card p-3">
                <div class="card text-center">
                  <img class="card-img-top" src={logo} alt="" /> 
                  <i className="fa fa-book fa-5x "></i>
                  <div class="card-body">
                    <h4 class="card-title">Products</h4>
                    <p class="card-text">lists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}

        <section class="counts section-bg mt-5">
        <div className=" container-fluid mt-5" id="product">
          <h2> List Of Projects</h2>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCsM9AEGR43l6M2QXOLs3BivrJ4Mia5AtyccNVMu9UBPIdIu6J&usqp=CAU"
                  className="img1"
                  alt=""
                />
        <div className="product-bottom text-center">
               
        <h3 className="text-dark1">Project Title</h3>
      
               <h3 className="text-dark1">Project Category</h3>
               <h3 className="text-dark1">Project TimeLine</h3>
               <h4 className="text-dark1">Price:$1000</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                    data-toggle=""
                    data-target=""
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                  
                </div>
              </div>
      
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCsM9AEGR43l6M2QXOLs3BivrJ4Mia5AtyccNVMu9UBPIdIu6J&usqp=CAU"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
                 <h3 className="text-dark1">Project Title</h3>

               <h3 className="text-dark1">Project Category</h3>
               <h3 className="text-dark1">Project TimeLine</h3>
               <h4 className="text-dark1">Price:$1000</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            
            </div>
            {/*  */}

            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCsM9AEGR43l6M2QXOLs3BivrJ4Mia5AtyccNVMu9UBPIdIu6J&usqp=CAU"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
                 <h3 className="text-dark1">Project Title</h3>

               <h3 className="text-dark1">Project Category</h3>
               <h3 className="text-dark1">Project TimeLine</h3>
               <h4 className="text-dark1">Price:$1000</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
             
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCsM9AEGR43l6M2QXOLs3BivrJ4Mia5AtyccNVMu9UBPIdIu6J&usqp=CAU"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
                 <h3 className="text-dark1">Project Title</h3>
       
               <h3 className="text-dark1">Project Category</h3>
               <h3 className="text-dark1">Project TimeLine</h3>
               <h4 className="text-dark1">Price:$1000</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
     
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCsM9AEGR43l6M2QXOLs3BivrJ4Mia5AtyccNVMu9UBPIdIu6J&usqp=CAU"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
                 <h3 className="text-dark1">Project Title</h3>
    
               <h3 className="text-dark1">Project Category</h3>
               <h3 className="text-dark1">Project TimeLine</h3>
               <h4 className="text-dark1">Price:$1000</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
     
            </div>


            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCsM9AEGR43l6M2QXOLs3BivrJ4Mia5AtyccNVMu9UBPIdIu6J&usqp=CAU"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
                 <h3 className="text-dark1">Project Title</h3>
    
               <h3 className="text-dark1">Project Category</h3>
               <h3 className="text-dark1">Project TimeLine</h3>
               <h4 className="text-dark1">Price:$1000</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
     
            </div>


            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCsM9AEGR43l6M2QXOLs3BivrJ4Mia5AtyccNVMu9UBPIdIu6J&usqp=CAU"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
                 <h3 className="text-dark1">Project Title</h3>
       
               <h3 className="text-dark1">Project Category</h3>
               <h3 className="text-dark1">Project TimeLine</h3>
               <h4 className="text-dark1">Price:$1000</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
     
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCsM9AEGR43l6M2QXOLs3BivrJ4Mia5AtyccNVMu9UBPIdIu6J&usqp=CAU"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
                 <h3 className="text-dark1">Project Title</h3>
      
               <h3 className="text-dark1">Project Category</h3>
               <h3 className="text-dark1">Project TimeLine</h3>
               <h4 className="text-dark1">Price:$1000</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
     
            </div>


            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCsM9AEGR43l6M2QXOLs3BivrJ4Mia5AtyccNVMu9UBPIdIu6J&usqp=CAU"
                  className="img1"
                  alt=""
                />
                 <div className="product-bottom text-center">
               
                 <h3 className="text-dark1">Project Title</h3>

               <h3 className="text-dark1">Project Category</h3>
               <h3 className="text-dark1">Project TimeLine</h3>
               <h4 className="text-dark1">Price:$1000</h4>
             </div>
                <div className="overlay">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Quick Shop"
                    data-toggle="modal"
                    data-target="#quickModel"
                  >
                    <i className="fa fa-eye"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
     
            </div>
          </div>
          <div
            className="modal show product-view"
            id="quickModel"
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-header">
              <h3 className="text-dark1">Project Title :</h3>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-dialog product-big-img">
                <img
                  src="data:image/jpeg;base64,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"
                  className=" mt-2"
                  alt=""
                />
              </div>
              <div className="product-bottom text-center">
               
               
               <h3 className="text-dark1">Project Description :</h3>
               <p className="text-dark1">Flood Prevention for County Courthouse

The county courthouse is a historic building that is located in the oldest town in the state. Over the past few years several "localized" floods have occurred in the two-block region surrounding the courthouse. These floods develop as a result of rainfall events that are at or near the yearly maximum. The floodwaters have flowed both into the historic courthouse (photos were provided) and the adjoining annex, bordering the parking lot to the east of the courthouse. The floods originate in the vicinity of the parking lot and flow south and west into the courthouse complex, exiting onto the downhill streets adjacent to the courthouse (photos were provided).</p>

               <h3 className="text-dark1">Project Category</h3>
               <h3 className="text-dark1">Project TimeLine</h3>
               <h4 className="text-dark1">Price:$1000</h4>
             
             </div>
             <div className="modal-header">
              
               
              </div>
            </div>
          
          </div>
        </div>
        </section>

      </Fragment>
    );
  }
}

export default AdminHome;

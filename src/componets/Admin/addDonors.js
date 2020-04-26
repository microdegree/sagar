import React, { Component } from "react";
import "../CSS/donor.css";

export default class addDonors extends Component {
  render() {
    return (
      <div className="container itmtop">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="" id="login-second">
            <div class="page-wrapper p-t-50 p-b-50">
              <div class="wrapper wrapper--w900 ">
                <div class="card cardH card-6 ">
                  <div class="card-heading m-4">
                    <h2 class="title text-dark1">Add Projects</h2>
                  </div>
                  <div class="card-body">
                    <form method="POST">
                      <div class="form-row frow">
                        <div class="name">Projects Tittle:</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="iname"
                          />
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Upload Images:</div>
                        <div class="value">
                          <div class="input-group js-input-file">
                            <input
                              class="input-file"
                              type="file"
                              name="file_doc"
                              id="file"
                            />
                            <label class="label--file" for="file">
                              Choose file
                            </label>
                            <span class="input-file__info">No file chosen</span>
                          </div>
                          <div class="label--desc">
                            Upload your Document/Id proff or any other relevant
                            file. Max file size 50 MB
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Project Description</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="desc"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Project Timeline</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Upload Project Synopsis:</div>
                        <div class="value">
                          <div class="input-group js-input-file">
                            <input
                              class="input-file"
                              type="file"
                              name="file_doc"
                              id="file"
                            />
                            <label class="label--file" for="file">
                              Choose file
                            </label>
                            <span class="input-file__info">No file chosen</span>
                          </div>
                          <div class="label--desc">
                            Upload your Document/Id proff or any other relevant
                            file. Max file size 50 MB
                          </div>
                        </div>
                      </div>
                    
                  
                      <div class="form-row frow">
                        <div class="name">Manager Name</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Manager Contact</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Project Category</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Project Technology</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div class="form-row frow">
                        <div class="name">Price</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Email</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn--radius-2 btn-gray" type="submit">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

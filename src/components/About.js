import React from "react";
import abdp from "../image/about1-dp.png";

const About =() =>{
    return(
        <>
          <div className="container-fluid about-section-bg" id="about">
            <div className="container">
                <div className="row ">
                    <div className=" col-md-4  col-lg-4  my-lg-3 my-md-4  pt-lg-0 order-1 order-lg-1  my-4 py-5 order-md-1  ">
                       <div className="img-div img-fluid py-lg-4 py-md-3 ">
                       <img  className="img-fluid" src={abdp}></img>
                       </div>
                                     
                    </div>
                    <div className=" col-md-8  col-lg-8 my-lg-3 my-md-4 md-auto  order-2 order-lg-2 order-md-2 my-4 py-2 ">
                  <div className="mx-4 mx-lg-5 mx-md-5 p-lg-2 p-md-2">
                    <h4 className="about-Text pt-2 my-lg-5 my-md-4">About</h4>
                    <p className="bg-txt py-2">I am a student of final year from CIMAGE College Patna, affiliated with Patliputra University, has equipped me with a 
                      
                    robust understanding of computer science fundamentals and cutting-edge industry trends.</p>
                  </div>
                               

                
                    </div>
                </div>
            </div>
           </div>

        </>
    )
};
export default About;
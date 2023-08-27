import React  from "react";
import web from "../image/bg.png";
import Navbar from "./Navbar";


const Home =() =>{
    return(
        <>
       
           <div className="container-fluid my-5 " id="home">
            <div className="container">
                <div className="row">
                    <div className=" col-md-6   my-lg-3 my-md-4  pt-lg-0 order-2 order-lg-1  my-4 py-5 order-md-1  text-background ">
                        <p className="fs-1 mx-5 pt-md-5 pt-lg-5 pt-sm-3 txt"> Hey!, I'm  sudhir as
                         <p className="py-1 typer">Web Developer !</p>
                         </p>
                         <div className="mx-5 txt-script "><p>My educational background complements my skills and aspirations, positioning me for a successful career in the IT sector</p></div>
                            <div className="mx-5 ">
                                <p className="icon">
                                   <a href="https://www.linkedin.com/in/sudhir-singh-8253a725a"> <i class="bi bi-linkedin"></i></a>
                                   <a href="https://instagram.com/sudhir_singh_o01?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"> <i class="bi bi-instagram"></i></a>
                                   <a href="#"> <i class="bi bi-facebook"></i></a>
                                   <a href="https://www.youtube.com/channel/UCV46jWQH4LV_1Ieki2NnrjA"> <i class="bi bi-youtube"></i></a>
                                </p>
                                </div>
                        <button className="btn  my-lg-1 py-2 px-lg-4 px-ms-2 mx-5 "> <a href="#"> <i class="bi bi-download me-2"> </i>Download cv </a></button>
                        
                        
                    </div>
                    <div className=" col-md-6  my-lg-3 my-md-4 md-auto  order-1 order-lg-2 order-md-2 my-4 py-2 img-background ">
                    <img  className="img-fluid" src={web} alt="loading" />
                        
                  
                    </div>
                </div>
            </div>
           </div>
        
        </>

    )
};
export default Home;
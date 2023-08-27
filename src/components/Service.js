import React from "react";

const Service =() =>{
    return(
        <>
        <div className="container-fluid about-section-bg" id="service">
            <div className="container py-3 py-lg-5 py-md-5 me-3 me-lg-4 me-md-4">
                <div className="row p-1 m-1 ">
                    <div className="col-lg-4 col-md-4 col-12 pt-2 ">
                      <div className="p-1  bg-card1 p-2 py-2 px-3 ">
                        <p><a href="/"><i class="bi bi-terminal-fill fs-2"></i></a></p>
                         <div class="card-body mb-4">
                            <h5 class="card-title1 py-2">App Development</h5>
                            <p class="card-text">
                            Elevate your ideas with my professional app development 
                            services. From conceptualization to deployment,
                             I specialize in crafting applications that align 
                             innovation with user needs. Join me to build intuitive 
                             and impactful apps that bring your concepts to life, 
                            providing users with seamless solutions at their fingertips.                         </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>

                        </div>  
                    </div>

                    <div className="col-lg-4 col-md-4 col-12  pt-2 ">
                     <div className="p-1  bg-card2 p-2 py-2 px-3">
                        <p><a href="/"><i class="bi bi-terminal-fill fs-2"></i></a></p>
                         <div class="card-body">
                            <h5 class="card-title2 py-2">Web Development</h5>
                            <p class="card-text">
                            Explore my professional web development services designed 
                            to transform your digital aspirations into reality. 
                            With a focus on creativity and functionality,
                             I specialize in building websites that captivate 
                             audiences and drive meaningful interactions.
                              Join me in creating visually appealing and responsive 
                              websites that effectively convey your message and 
                              goals to the online world.       </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>

                        </div>


                    <div className="col-lg-4 col-md-4 col-12 pt-2 ">
                    <div className="p-1  bg-card3 p-2 py-2 px-3">
                        <p><a href="/"><i class="bi bi-terminal-fill fs-2"></i></a></p>
                         <div class="card-body">
                            <h5 class="card-title2 py-2">UI/UX Designer</h5>
                            <p class="card-text">
                            With a passion for crafting digital experiences,
                             I specialize in bringing websites to life.
                              Using a blend of creativity and coding prowess,
                               I transform concepts into interactive and visually
                                appealing online destinations. Let's collaborate to
                                 turn your vision into a captivating website that not
                                  only meets your goals but exceeds them, leaving a 
                                  lasting impact on your audience.                                </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>

                     
                    </div>
                </div>
            </div>

        </div>
       
        </>
    )
};
export default Service;
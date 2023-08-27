
import React, { useState } from "react";
const Contact =() =>{


    const  randomString = Math.random().toString(36).slice(8);
    const [capcha, setCaptcha] = useState(randomString);
    const [text, setText] = useState("");
    const [valid , setValid]= useState(false);
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);

    const refressString =() =>{
        setCaptcha(Math.random().toString(36).slice(8));
    };
    const validateCaptcha =() =>{
        if(text !== capcha){
            alert("Please veryfied captcha");
        }
        else{
           
        }
      

    }
    const matchCaptcha =(event) =>{
        var cap;
        cap=document.getElementById("captcha").value;

        if(cap===""){
            alert("please Enter CAPTCHA");
        }
        else{
            event.preventDefault();
            if(text === capcha){
    
                setValid(false);
                setSuccess(true);
                setFail(false);
            }else{
                setValid(true);
                setSuccess(false);
                setFail(true);
            }

        }
     
    }

    return(
     <>
     

     <div className="container-fluid  contact-main-bg py-lg-5 py-md-4 py-4" id="contact" >
            <div className="container">
                <div className="row">
                    <div className=" col-md-6  col-lg-4  my-lg-3 my-md-3  pt-lg-2 order-2 order-lg-1  my-lg-4  py-lg-5 order-md-1 mb-5 mb-lg-3 mb-lg-3  ">
                     
                     <div className="conatct-div p-4 py-lg-4 py-md-4 ">
                        <h2 className="get-in-touch">Get in Touch </h2>
                        <p className="contact-summarry">Let's Connect<br />

                                Have a project you'd like to discuss or just want to say hi? Use the form below to get in touch with me. I'm excited to hear from you and explore how we can collaborate to bring your ideas to life. Your message 
                                is important, and I'll make sure to respond promptly.
                             </p>
                       
                                                
                        <h3 className="py-2">CONTACT US</h3>
                        <h6 className="py-2"><i class="bi bi-envelope me-2"></i>sudhir202118@gmail.com</h6>
                        <h6 className="py-2"><i class="bi bi-telephone-outbound"> +91  7079538203</i></h6>
                        
                        </div>              
                    </div>
               
                    <div className=" col-md-6  col-lg-8 bg-light my-lg-3 my-md-4  pt-lg-2 order-1 order-lg-2  my-4 py-5 order-md-2 border">
                        <h4 className="contact-f-h p-2 px-4">Contact / Register </h4>
                       <div className=" py-lg-3 py-md-3 py-3 contact-form px-4">
                        <form action="https://formspree.io/f/xaygedyo"  method="POST">

                      
                       <input type="text" class="form-control shadow-none" name="name" placeholder="Full name" required />

                       <input type="email" class="form-control shadow-none" name="Email"  placeholder="mail@gmail.com" required />
                       <input type="numbar" class="form-control  shadow-none"  name="Contact No" placeholder="Mobile no"  required/>
                       <input type="numbar" class="form-control shadow-none" name="age" placeholder="age" required />
                       <div className="row">

                          <div className="col-6">
                          <input type="numbar" class="form-control shadow-none capcha-input"  name="captcha" id="captcha" placeholder="Enter Captch"
                          
                          
                          value={text} onChange={(e) =>setText(e.target.value)} 
                          error={valid}
                          helperText={valid && "Invali"}
                          required />

                            <span>
                             <React.Fragment>
                                {success && (
                                    <alert>Captcha verified</alert>
                                )}
                                

                            </React.Fragment>
                            </span>
                            <span>
                            <React.Fragment>
                                {fail && (
                                        <alert>Captcha not match</alert>
                                    )}
                                    
                                </React.Fragment>
                            </span>
                          </div>


                        <div className="col-6 py-2">
                            <div className="row">
                           <div className="capcha-bg p-3"> <span className="me-lg-3  me-md-2 me-2 mx-lg-5 mx-2 mx-md-2 bb px-3 py-3">  {capcha} </span>     <button  className="resetbutton p-2 p-lg-3 px-4 px-lg-4 " onClick={() => refressString() } > reset </button> </div>
                           
                          <div className="veryfy py-1 px-lg-5"> <button className="px-lg-5 px-3 px-md-4 py-2 mx-2" onClick={matchCaptcha} type="submit">verified</button>  </div>
                           
                           </div> 

                        </div>


                       </div> 


                       
                       <input className="form-submit-btn" type="submit" onClick={validateCaptcha} value="submit"  />
                       </form>
                        </div>               

                
                    </div>
                </div>
            </div>
            </div>
           
           
     
     
     </>
    )
};
export default Contact;
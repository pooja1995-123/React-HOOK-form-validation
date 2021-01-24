import React from "react";
import{useForm} from "react-hook-form";
import classNames from "classnames";

 function Login(){
     const{register,handleSubmit,errors}=useForm();
     console.log(errors);
     const onSubmit=(data)=>{
        console.log(data);
     }
    return(<React.Fragment>
        <div className="container py-3">
            <div className="row">
                <div className="col-md-6">
                <div className="card border-0 shadow w-75 mx-auto">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" 
                    name="fullname"
                 className={classNames("form-control",{"is-invalid":errors.fullname})} 
                 id="fullname" 
                 placeholder="Enter your Full Name" 
                ref={register({
                    required:"this field is required",
                    minLength:{
                        value:4,
                        message:"minimunm 4 charcters"
                    }
                })}/>
                {errors.fullname && (<div className="invalid-feedback">{errors.fullname.message}</div>)}
                
                </div>
                <div className="form-group">
                <label htmlFor="email">Password</label>
                <input type="email"
                 name="email" 
                 className={classNames("form-control",{"is-invalid":errors.email})}  
                 id="email" 
                 placeholder="Enter your Email" 
                ref={register({
                    required:"this field is required",
                    pattern:"[A-Za-z]{3}",
                    message:"Please enter a valid email id"
                })}/>
                {errors.email && (<div className="invalid-feedback">{errors.email.message}</div>)}
                </div>
                <div className="form-group">
                <label htmlFor="phoneno">Phone Number</label>
                <input type="text"
                 name="phone"
                 className={classNames("form-control",{"is-invalid":errors.phone})}  
                  id="phoneno"
                   placeholder="Enter your Phone no." 
                ref={register({
                    required:"this field is required",
                    pattern: {
                        value: /^\d{10}$/,
                    message:"Please enter a valid 10-digit phone no"
                    },
                })}/>
                 {errors.phone && (<div className="invalid-feedback">{errors.phone.message}</div>)}
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text"
                name= "password" 
                className={classNames("form-control",{"is-invalid":errors.password})}
                 id="password" 
                 placeholder="Enter your Password" 
                ref={register({
                    required:"this field is required",
                    pattern: {
                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                    message:"password(Uppercase,Lowercase,Number/specialcharacter and min 8 characters)"
                    },
                })}/>
                 {errors.password && (<div className="invalid-feedback">{errors.password.message}</div>)}
                </div>
                <div className="form-group">
                <label htmlFor="state">Choose Your State</label>
                <select 
                className="form-check form-check-inline"
                id="state" 
                 name="state"
                >
                <option selected>Open this select menu</option>
                <option value="">-----Select your state-----</option>
                <option value="Odisha">Odisha</option>
                <option value="Hydrabad">Hydrabad</option>
                <option value="Assam">Assam</option>
                <option value="Punjab">Punjab</option>
                </select>
                </div>
                <div className="form-group">
                <label htmlFor="gender">Choose Your gender</label>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="male" value="male" 
                ref={register({
                    required:true
                })}/>
                    <label className="form-check-label" htmlFor="male">
                       male
                    </label>
                    </div>  
                    <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="female" value="female"
                ref={register({
                    required:true
                })}/>
                    <label className="form-check-label" htmlFor="female">
                       female
                    </label>  
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="other" value="other" 
                ref={register({
                    required:true
                })}/>
                    <label className="form-check-label" htmlFor="other">
                       other
                    </label>  
                </div>
                </div>
                 <div className="form-group">
                 <div className="form-check form-check-inline">
                <input className="form-check-input" name="tnc" type="checkbox" id="tnc" 
                ref={register({
                    required:"this field is required",
                })}/>
                <label className="form-check-label" htmlFor="tnc">I agree all terms and conditions</label>
                {errors.tnc && (<div className="form-text text-danger">{errors.tnc.message}</div>)}
                </div>
                </div>
                <button type="submit" className="btn btn-primary">Create New Account</button>
         </form>
         </div>
         </div>
                </div>
            </div>
            
    </React.Fragment>)
}
export default Login;
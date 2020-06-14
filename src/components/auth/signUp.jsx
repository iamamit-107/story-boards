import React from "react";

import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        console.log(errors);
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="white">
                <h5 className="grey-text text-darken-3">Sign up</h5>

                <div className="input-field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        ref={register({ required: true })}
                    />
                    {errors.email && <p>Email is required</p>}
                </div>

                <div className="input-field">
                    <label htmlFor="">Password</label>
                    <input
                        name="password"
                        type="password"
                        ref={register({ required: true })}
                    />
                    {errors.password && <p>Password is required</p>}
                </div>

                <div className="input-field">
                    <label htmlFor="">First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        ref={register({ required: true })}
                    />
                    {errors.firstName && <p>First Name is required</p>}
                </div>

                <div className="input-field">
                    <label htmlFor="">Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        ref={register({ required: true })}
                    />
                    {errors.password && <p>Last Name is required</p>}
                </div>

                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;

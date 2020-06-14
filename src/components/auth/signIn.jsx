import React from "react";

import { useForm } from "react-hook-form";

const SignIn = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        console.log(errors);
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="white">
                <h5 className="grey-text text-darken-3">Sign in</h5>

                <div className="input-field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        ref={register({ required: true })}
                    />
                    {errors.email && <p>This field is required</p>}
                </div>

                <div className="input-field">
                    <label htmlFor="">Password</label>
                    <input
                        name="password"
                        type="password"
                        ref={register({ required: true })}
                    />
                    {errors.password && <p>This field is required</p>}
                </div>

                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;

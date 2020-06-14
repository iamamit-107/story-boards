import React from "react";

import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

const CreateProject = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        props.createProject(data);
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="white">
                <h5 className="grey-text text-darken-3">Create New Project</h5>

                <div className="input-field">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        ref={register({ required: true })}
                    />
                    {errors.title && <p>Title is required</p>}
                </div>

                <div className="input-field">
                    <label htmlFor="">Content</label>
                    <textarea
                        name="content"
                        cols="30"
                        rows="10"
                        className="materialize-textarea"
                        ref={register({ required: true })}
                    ></textarea>

                    {errors.content && <p>Content is required</p>}
                </div>

                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)),
    };
};

export default connect(null, mapDispatchToProps)(CreateProject);

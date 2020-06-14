import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const { id } = useParams();
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Recusandae impedit ab consequuntur. Voluptatibus
                        sint accusantium modi, natus facere repellat nam beatae
                        molestiae eaque, cupiditate quam ab quia laboriosam
                        atque ipsa voluptates deserunt debitis! Quod libero ipsa
                        natus repellat ratione distinctio soluta cupiditate.
                        Fuga repellat alias accusamus inventore consequuntur
                        ipsa porro.
                    </p>
                </div>
                <div className="card-action lighten-4 grey-text">
                    <div>Posted by Ahmed Faisal</div>
                    <div>13th June, 12:00 AM</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;

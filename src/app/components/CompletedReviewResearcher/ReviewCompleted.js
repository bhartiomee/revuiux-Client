import React from "react";
import ProjectCard from "../UiComponents/ProjectCard";
import projects from "../../../DummyData/Projects";

export default function ReviewCompleted() {
  return (
    <div className="draft-wrapper-common">
      <div className="recent-header">
        <div className="recent-nav">
          <h3>Product Review Completed</h3>
        </div>
      </div>
      <div className="recent-body">
        {projects.map((item) => (
          <ProjectCard
            key={item.key}
            title={item.title}
            content={item.content}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
}

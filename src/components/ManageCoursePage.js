import React from "react";
import { Prompt } from 'react-router-dom'
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
    return (
        <>
            <h2>
                Manage Courses
            </h2>
            <CourseForm/>
            {props.match.params.slug}
        </>
    )
};
export default ManageCoursePage

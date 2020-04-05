import React, {useState} from "react";
import { Prompt } from 'react-router-dom'
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });
    function handleTitleChange({target}) {
        const updatedCourse = {
            ...course,
            [target.name]: target.value
        };
        setCourse(updatedCourse);
    }
    return (
        <>
            <h2>
                Manage Courses
            </h2>
            <CourseForm course={course} onChange={handleTitleChange}/>
            {props.match.params.slug}
        </>
    )
};
export default ManageCoursePage

import React, {useState} from "react";
import {toast} from 'react-toastify'
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi"

const ManageCoursePage = props => {
    const [errors, setErrors] = useState({

    });
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    function handleChange({target}) {
        const updatedCourse = {
            ...course,
            [target.name]: target.value
        };
        setCourse(updatedCourse);
    }

    function formIsValid() {
        const _errors = {};
        if (!course.title) _errors.title = 'Title is Required!';
        if (!course.authorId) _errors.authorId = 'Author ID is Required!';
        if (!course.category) _errors.category = 'Course is Required!';
        setErrors(_errors);
        // Form is valid if the _errors has no properties.
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        console.log(event);
        courseApi.saveCourse(course).then(() => {
            props.history.push('/courses');
            toast.success('Course Saved!')
        })

    }

    return (
        <>
            <h2>
                Manage Courses
            </h2>
            <CourseForm
                errors={errors}
                course={course}
                onChange={handleChange}
                onSubmit={handleSubmit}/>
        </>
    )
};


export default ManageCoursePage

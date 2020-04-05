import React from "react";
import TextInput from "./common/TextInput";
import TextSelect from "./common/TextSelect";

function CourseForm(props) {
    return (
        <form>
            <TextInput label="Title" onChange={props.onChange} name="title" id="title"  value={props.course.title}/>
            <TextSelect label="Author" onChange={props.onChange} name="authorId" id="author"/>
            <TextInput
                id="category"
                name="category"
                label="Category"
                onChange={props.onChange}
                value={props.course.category}
            />

            <input type="submit" value="Save" className="btn btn-primary"/>
        </form>
    );
}

export default CourseForm;

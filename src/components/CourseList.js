import React from 'react'
import PropTypes from 'prop-types'
import { Link} from "react-router-dom";
import CoursesPage from "./CoursesPage";

function CourseList(props) {
    return (<table className="table">
        <thead>
        <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
        </tr>
        </thead>
        <tbody>
        {props.courses.map(course => {
            return (
                <tr key={course.id}>
                    <td>
                        <Link to={"/course/" + course.slug}>{course.title}</Link>
                    </td>
                    <td>{course.authorId}</td>
                    <td>{course.category}</td>
                </tr>
            );
        })}
        </tbody>
    </table>)
}

export default CourseList

/*
Proptype are helpful because they document the objects shapes and let people know what to expect from props.
 */
CourseList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            authorId: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired
        })
    ).isRequired
};



import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";
// export function createCourse(course){
//     return {type: 'CREATE_COURSE', course};
// }

export function loadCourseSucess(courses){
         return {type: 'LOAD_COURSE_SUCCESS', courses};
     }

export function updateCourseSucess(course){
  return {type: 'UPDATE_COURSE_SUCCESS', course};
}

export function createCourseSucess(course){
  return {type: 'CREATE_COURSE_SUCCESS', course};
}

export function loadCourses(){
    return function(dispatch) {
      dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses =>{
            dispatch(loadCourseSucess(courses));
        }).catch(error =>{
            throw(error);
        });
    };
}

export function saveCourse(course){
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse =>{
      course.id ? dispatch(updateCourseSucess(savedCourse)):
        dispatch(createCourseSucess(savedCourse));
    }).catch(error =>{
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}


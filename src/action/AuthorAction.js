

import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from "./ajaxStatusActions";

// export function createCourse(course){
//     return {type: 'CREATE_COURSE', course};
// }

export function loadAuthorsSucess(authors){
  return {type: 'LOAD_AUTHORS_SUCCESS', authors};
}

export function loadAuthors(){
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors =>{
      dispatch(loadAuthorsSucess(authors));
    }).catch(error =>{
      throw(error);
    });
  };
}

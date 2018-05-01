import initialState from './initialState';

export default function courseReducer(state=initialState.courses, action){
//     switch(action.type){
//         case 'CREATE_COURSE':
//             return [...state,
//             Object.assign({}, action.course)
//         ];
//         default :
//         return state;
//     }

// }

switch(action.type){
    case 'LOAD_COURSE_SUCCESS':
        return action.courses;

  case 'CREATE_COURSE_SUCCESS':
    return [
      ...state,
      Object.assign({}, action.course)
    ];

  case 'UPDATE_COURSE_SUCCESS':
    return [
      ...state.filter(course => course.id !== action.course.id),
      Object.assign({}, action.course)
    ];

    default :
    return state;
}

}

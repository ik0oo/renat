import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
} from '../actions/actionTypes';


const initialState = {
  places: [],
  selected: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE: {
      return {
        ...state,
        places: state.places.concat({
          name: action.placeName,
          key: String(state.places.length + 1),
          id: String(state.places.length + 1),
          location: action.location,
          image: action.image,
        })
      }
    }

    case DELETE_PLACE: {
      return {
        ...state,
        places: state.places.filter((item) => item.key !== action.key),
        selected: null,
      }
    }

    case SELECT_PLACE: {
      return {
        ...state,
        selected: state.places.find(item => item.key === action.key),
      }
    }

    case DESELECT_PLACE: {
      return {
        ...state,
        selected: null,
      }
    }

    default: {
      return state;
    }
  }
};

export default reducer;
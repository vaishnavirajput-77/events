import { createContext, useContext, useReducer, useCallback } from 'react';

const PackageContext = createContext();

const initialState = {
  eventType: '',
  selectedServices: [],
  selectedAddOns: [],
  wishlist: [],
  bookings: [],
};

function packageReducer(state, action) {
  switch (action.type) {
    case 'SET_EVENT_TYPE':
      return { ...state, eventType: action.payload };
    case 'ADD_SERVICE':
      if (state.selectedServices.find(s => s.id === action.payload.id)) return state;
      return { ...state, selectedServices: [...state.selectedServices, action.payload] };
    case 'REMOVE_SERVICE':
      return { ...state, selectedServices: state.selectedServices.filter(s => s.id !== action.payload) };
    case 'TOGGLE_ADDON': {
      const exists = state.selectedAddOns.find(a => a.id === action.payload.id);
      return {
        ...state,
        selectedAddOns: exists
          ? state.selectedAddOns.filter(a => a.id !== action.payload.id)
          : [...state.selectedAddOns, action.payload],
      };
    }
    case 'TOGGLE_WISHLIST': {
      const exists = state.wishlist.find(w => w.id === action.payload.id);
      return {
        ...state,
        wishlist: exists
          ? state.wishlist.filter(w => w.id !== action.payload.id)
          : [...state.wishlist, action.payload],
      };
    }
    case 'SAVE_PACKAGE':
      return { ...state, bookings: [...state.bookings, action.payload] };
    case 'CLEAR_PACKAGE':
      return { ...state, eventType: '', selectedServices: [], selectedAddOns: [] };
    default:
      return state;
  }
}

export function PackageProvider({ children }) {
  const [state, dispatch] = useReducer(packageReducer, initialState);

  const totalPrice = state.selectedServices.reduce((sum, s) => sum + s.price, 0)
    + state.selectedAddOns.reduce((sum, a) => sum + a.price, 0);

  const setEventType = useCallback((type) => dispatch({ type: 'SET_EVENT_TYPE', payload: type }), []);
  const addService = useCallback((service) => dispatch({ type: 'ADD_SERVICE', payload: service }), []);
  const removeService = useCallback((id) => dispatch({ type: 'REMOVE_SERVICE', payload: id }), []);
  const toggleAddOn = useCallback((addon) => dispatch({ type: 'TOGGLE_ADDON', payload: addon }), []);
  const toggleWishlist = useCallback((item) => dispatch({ type: 'TOGGLE_WISHLIST', payload: item }), []);
  const savePackage = useCallback((pkg) => dispatch({ type: 'SAVE_PACKAGE', payload: pkg }), []);
  const clearPackage = useCallback(() => dispatch({ type: 'CLEAR_PACKAGE' }), []);

  return (
    <PackageContext.Provider value={{
      ...state, totalPrice,
      setEventType, addService, removeService, toggleAddOn, toggleWishlist, savePackage, clearPackage,
    }}>
      {children}
    </PackageContext.Provider>
  );
}

export const usePackage = () => useContext(PackageContext);

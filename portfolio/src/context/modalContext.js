import React, { useReducer, createContext, useContext } from "react";

const initState = {
  ModalState: false,
  id: null,
};

function StateReducer(state, action) {
    switch (action.type) {
      case "GET_STATE":
        return {
            state,
        };
      case "MODAL_OPEN":
        return {
          ...state,
          ModalState: true,
        };
      case "MODAL_CLOSE":
        return {
          ...state,
          ModalState: false,
        };
      case "CHANGE_ID":
        return {
          ...state,
          id: action.id,
        };

      default:
        throw new Error(`Unhanded action type : ${action.type}`);
    }
  }

const ModalStateContext = createContext(null);
const ModalDispatchContext = createContext(null);

export function ModalContext({ children }) {
    const [state, dispatch] = useReducer(StateReducer, initState);
  
    return (
      <ModalStateContext.Provider value={state}>
        <ModalDispatchContext.Provider value={dispatch}>
          {children}
        </ModalDispatchContext.Provider>
      </ModalStateContext.Provider>
    );
  }
  
  export function useModalState() {
    const context = useContext(ModalStateContext);
    return context;
  }
  
  export function useModalDispatch() {
    const context = useContext(ModalDispatchContext);
    return context;
  }

// const useModal = () => {
//     const [Modal, setModalOpen] = useState(false);

//     const ModalOpen = async() => {
//         setModalOpen(true);
//     };
    
//     const ModalClose = () => {
//         setModalOpen(false);
//     };

//     return {
//         Modal,
//         ModalOpen,
//         ModalClose,
//     }

// }

// export default useModal

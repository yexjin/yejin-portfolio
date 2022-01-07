import React, { useReducer, createContext, useContext } from "react";

const initState = {
  ModalState: false,
  id: null,
  projects: [
    {
        id: 1,
        title: '동아리 홍보 페이지',
        host: '[2021 EndlessCreation]',
        image: 'img/projects/Ec.png'
    },
    {
        id: 2,
        title: '우유마켓',
        host: '멋쟁이 사자처럼 9기',
        image: 'img/projects/Wooyoo.png'
    },
    {
        id: 3,
        title: 'AI를 활용한 과제 협업, 평가 학습 블로그',
        host: '2021 한이음 공모전',
        image: 'img/projects/Join.png'
    },
    {
        id: 4,
        title: 'Rendering',
        host: '서울과기대 프로젝트',
        image: 'img/projects/Rendering.png'
    }
]
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

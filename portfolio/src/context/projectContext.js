import React, { useReducer, createContext, useContext } from "react";

const initState = {
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

// function StateReducer(state, action) {
//     switch (action.type) {
//         case "GET_STATE":
//           return {
//             state,
//           };
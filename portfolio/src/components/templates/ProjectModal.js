import React,{ useCallback } from 'react'
import styled from 'styled-components'
import { useModalState, useModalDispatch } from "../../context/modalContext";
import { Projects } from '../../data'
import Contents from './ModalContents'

const Block = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background: rgb(25, 25, 25, 0.64);
`;

const ModalBlock = styled.div`
  position: fixed;
  background-color: #fff;
  width: 987px;
  height: 655px;
  border-radius: 15px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.25);
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;

const Content = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px 0px 0px 25px;
  color: black;
  font-size: 20px;
`;
const AddButton = styled.button`
  position: absolute;
  width: 90px;
  font-size: 15px;
  background: none;
  border: none;
  color: red;
`;


function ProjectModal() {
  const State = useModalState();
  const ModalDispatch = useModalDispatch();
  const ModalState = State.ModalState;
  const id = State.id;

  const { list } = Projects();

  const project = list.find(project => project.id===id); // 배열에서 id로 객체 찾아내오기 find 함수 사용!


  const closeModal = useCallback(() => {
    ModalDispatch({
      type: "MODAL_CLOSE",
    });
  }, [ModalDispatch]);

    return (
        <>
      {ModalState && (
        <Block>
          <ModalBlock>
            <Content>
              <Contents project={project} />
            </Content>
            <AddButton onClick={closeModal}>취소</AddButton>
          </ModalBlock>
        </Block>
      )}
    </>
    )
}

export default ProjectModal

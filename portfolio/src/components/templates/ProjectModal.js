import React,{ useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useModalState, useModalDispatch } from "../../context/modalContext";
import { Projects } from '../../data'

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
  width: 300px;
  background-color: #fff;
  height: 250px;
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
`;
const AddButton = styled.button`
  position: absolute;
  width: 90px;
  font-size: 15px;
  background: none;
  border: none;
  color: red;
`;

function ProjectModal({id}) {
  const State = useModalState();
  const ModalDispatch = useModalDispatch();
  const ModalState = State.ModalState;

  const { list } = Projects();

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
              <div>

              </div>
            </Content>
            <AddButton onClick={closeModal}>취소</AddButton>
          </ModalBlock>
        </Block>
      )}
    </>
    )
}

export default ProjectModal

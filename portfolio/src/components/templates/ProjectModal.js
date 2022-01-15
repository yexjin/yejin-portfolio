import React,{ useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useModalState, useModalDispatch } from "../../context/modalContext";
import { Projects } from '../../data'
import Contents from '../organisms/ModalContents'
import BackButton from '../../image/backButton.png'
import CTLoading from '../organisms/CTLoading'

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
  @media screen and (max-width: 1279px) {
    width: 560px;
    height: 417px;
}
@media screen and (max-width: 767px) {
  width: 350px;
height: 500px;
}
`;

const Content = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  @media screen and (max-width: 1279px) {
    margin-top: 57px;
    margin-bottom: 20px;
}
@media screen and (max-width: 767px) {
  margin-top: 62px;
    margin-bottom: 30px;
}
`;

const Back = styled.button`
  background: none;
  border: none;
  color: red;
  margin-top: 43px;
  margin-right: 55px;
  float: right;
  @media screen and (max-width: 1279px) {
  margin-top: 29px;
  margin-right: 43px;
  width: 36px;
  height: 20px;
  img{
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 767px) {
  margin-right: 28px;
  width: 40px;
  height: 20px;
  img{
    width: 100%;
    height: 100%;
  }
}
`;

const Command = styled.div`
font-family: Noto-Regular;
font-size: 13px;
line-height: 15px;
margin-right: 100px;
margin-top: 30px;

color: #3C3A3A;
margin-bottom: 10px;
float: right;
@media screen and (max-width: 1279px) {
  font-size: 10px;
  margin-right: 43px;
  margin-top: 10px;
}
@media screen and (max-width: 767px) {
}
`


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
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  
  return loading ? (
    <CTLoading />
  ) : (
        <>
      {ModalState && (
        <Block>
          <ModalBlock data-aos="zoom-in"  data-aos-duration="500">
            <Back onClick={closeModal}>
              <img src={BackButton} alt="버튼"/>
            </Back>
            <Content>
              <Contents project={project} />
              <Command>⬇ 내용 부분을 스크롤 하세요</Command>
            </Content>
          </ModalBlock>
        </Block>
      )}
    </>
    )
}

export default ProjectModal

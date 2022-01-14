import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useModalDispatch } from '../../context/modalContext'

const Title = styled.div`
  width: 460px;
  position: fixed;
  text-align: center;
  flex: 1;
  font-size: 1.7rem;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  font-family: Kanit-SemiBold;
  margin-top: -190px;
  visibility: hidden;

`
const Host = styled.div`
  width: 460px;
  position: fixed;
  margin: 0 auto;
  text-align: center;
  flex: 1;
  font-size: 1.2rem;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  font-weight: 500;
  margin-top: -140px;
  visibility: hidden;
  font-family: Kanit-Medium;
`

const Img = styled.div`
cursor: pointer;
width: 460px;
height: 300px;

filter: drop-shadow(4px 4px 4px rgba(0.25, 0.25, 0.25, 0.25));
margin-bottom: 80px;

img {
    width: 100%;
    height: 100%;
    opacity: 1;
  }

:hover {
    img {
      opacity: 1;
      transition: all 0.5s;
      filter: brightness(50%); 
    }
    ${Title} {
      transition: all 0.5s;
      visibility: visible;
    }
    ${Host} {
      transition: all 0.5s;
      visibility: visible;
    }
  }

`


function ProjectBox({item}) {

  const ModalDispatch = useModalDispatch();

  const id = item.id;

  const changeid = useCallback(() => {
    ModalDispatch({
      type: "CHANGE_ID",
      id,
    });
  }, [ModalDispatch,id]);

  const openModal = useCallback(() => {
    ModalDispatch({
      type: "MODAL_OPEN",
    });
  }, [ModalDispatch]);


  function ClickEvent(id) {
    openModal();
    changeid(id);
  }

    return (
      <>
        <div>
            <Img onClick={() => ClickEvent(item.id)}>
                <img src={item.image} alt="projects"/>
                <Title>{item.title}</Title>
                <Host>{item.host}</Host>
            </Img>
        </div>
      </>
    )
}

export default React.memo(ProjectBox)

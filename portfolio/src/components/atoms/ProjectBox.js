import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  width: 460px;
  position: fixed;
  text-align: center;
  flex: 1;
  font-size: 1.7rem;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  font-weight: 500;
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
    return (
        <div>
            <Img>
                <img src={item.image} />
                <Title>{item.title}</Title>
                <Host>{item.host}</Host>
            </Img>
        </div>
    )
}

export default ProjectBox

import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
width: 223px;
height: 39px;
font-family: Noto-Regular;
font-style: normal;
font-size: 33px;
line-height: 39px;
color: #000000;
margin-top: 10px;
text-align: center;
margin-left: 5px;
@media screen and (max-width: 1279px) {
  width: 150px;
  height: 15px;
  }
@media screen and (max-width: 767px) {
width: 109px;
height: 13px;
}
`

const Back = styled.div`
width: 223px;
height: 35px;
background: linear-gradient(to top, #FBA2A269 50%, transparent 41%);
margin: 0 auto;
@media screen and (max-width: 1279px) {
  width: 150px;
  height: 27px;
  }
@media screen and (max-width: 767px) {
width: 109px;
height: 13px;
}
`

const Text = styled.div`
width: 223px;
height: 39px;
font-family: Kanit-Medium;
font-style: normal;
font-size: 33px;
line-height: 39px;
color: #000000;
@media screen and (max-width: 1279px) {
  width: 150px;
  height: 27px;
  line-height: 30px;
  font-size: 23px;
  }
@media screen and (max-width: 767px) {
  font-size: 17px;
  width: 110px;
  height: 20px;
  line-height: 12px;
}
`

function Myname() {
    return (
        <>
            <Box>
              <Back>
                  <Text>
                    O YE JIN
                  </Text>
              </Back>
            </Box>  
        </>
    )
}

export default Myname

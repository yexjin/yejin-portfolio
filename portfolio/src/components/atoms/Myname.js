import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
width: 223px;
height: 39px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 33px;
line-height: 39px;
color: #000000;
margin-top: 10px;
text-align: center;
margin-left: 5px;
`

const Back = styled.div`
width: 223px;
height: 35px;
background: linear-gradient(to top, #FBA2A269 50%, transparent 41%);
margin: 0 auto;
`

const Text = styled.div`
width: 223px;
height: 39px;
font-family: Roboto;
font-style: normal;
font-weight: 700;
font-size: 33px;
line-height: 39px;
color: #000000;
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

import React from 'react'
import styled from 'styled-components'
import Workbench from '../../image/tools/workbench.png'
import Vs from '../../image/tools/vs.png'
import Vsc from '../../image/tools/vsc.png'

const Box = styled.div`
width: 300px;
height: 250px;
background: #FFFFFF;
`

const Line = styled.div`
padding-top: 30px;
padding-left: 60px;
`

function SkillTool() {
    return (
        <Box>
            <Line>
                <img src={Vs} width="76px" height="76px" alt="visual_studio"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Vsc} width="76px" height="76px" alt="visual_studio_code" />
            </Line>
            <Line>
                <img src={Workbench} width="76px" height="76px" alt="mysql_workbench" />
            </Line>
        </Box>
    )
}

export default SkillTool

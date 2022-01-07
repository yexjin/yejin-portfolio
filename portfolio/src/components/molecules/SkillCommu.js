import React from 'react'
import styled from 'styled-components'
import Github from '../../image/commu/github.png'
import Gitlab from '../../image/commu/gitlob.png'
import Trello from '../../image/commu/trello.png'
import Slack from '../../image/commu/slack.png'
import Discord from '../../image/commu/discord.png'
import Notion from '../../image/commu/notion.png'

const Box = styled.div`
width: 300px;
height: 250px;
background: #FFFFFF;
`

const Line = styled.div`
padding-top: 40px;
padding-left: 36px;
`

function SkillCommu() {
    return (
        <Box>
            <Line>
                <img src={Github} width="56px" height="56px" alt="github"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Gitlab} width="56px" height="56px" alt="gitlab" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Trello} width="56px" height="56px" alt="trello" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Line>
            <Line>
                <img src={Slack} width="56px" height="56px" alt="slack" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Discord} width="56px" height="56px" alt="discord" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Notion} width="56px" height="56px" alt="notion" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Line>
        </Box>
    )
}

export default SkillCommu

const Skills = () => {

    const web_front = [
        {
            id: 1,
            name: 'html',
            progress: 98,
        },
        {
            id: 2,
            name: 'css',
            progress: 95,
        },
        {
            id: 3,
            name: 'js',
            progress: 86,
        },
        {
            id: 4,
            name: 'React',
            progress: 80,
        },
        {
            id: 5,
            name: 'Redux',
            progress: 70,
        },
    ]
    const mob_front = [
        {
            id: 1,
            name: 'Swift',
            progress: 80,
        },
        {
            id: 2,
            name: 'SwiftUI',
            progress: 40,
        },
        {
            id: 3,
            name: 'UIKit',
            progress: 40,
        }
    ]
    const back = [
        {
            id: 1,
            name: 'Django',
            progress: 60,
        },
        {
            id: 2,
            name: 'Koa.js',
            progress: 40,
        },
    ]
    const tool = [
        {
            id: 1,
            name: 'Visual Studio Code'
        },
        {
            id: 2,
            name: 'MySQL Workbench'
        }
    ]
    const communication = [
        {
            id: 1,
            name: 'GitHub'
        },
        {
            id: 2,
            name: 'GitLab'
        },
        {
            id: 3,
            name: 'Slack'
        },
        {
            id: 4,
            name: 'Discord'
        },
        {
            id: 5,
            name: 'Notion'
        },
        {
            id: 6,
            name: 'Trello'
        }
    ]
    return{
        web_front, mob_front, back, tool, communication
    }
}

export default Skills
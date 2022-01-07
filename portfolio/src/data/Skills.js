const Skills = () => {

    const front = [
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
        front, back, tool, communication
    }
}

export default Skills
const Projects = () => {

    const list = [
        {
            id: 1,
            title: 'EC 동아리 홍보 페이지',
            subtitle: '서울과학기술대학교 컴퓨터공학과 Endless Creation 동아리 홍보 홈페이지',
            host: '[2021 EndlessCreation]',
            image: 'img/projects/Ec.png',
            detailImg: 'img/projects/EcDetail.png',
            term: '2021.01 ~ 2021.03',
            part: '프론트엔드 개발 파트 담당',
            github: 'https://github.com/EndlessCreation/ec_homepage_front',
            skills: [{
                a: 'React를 사용',
                b: 'ContextAPI를 통한 상태관리',
                c: 'Material-UI를 통한 반응형 웹 개발',
                d: 'Styled-Components 사용',
                e: 'Axios를 통한 서버 통신'  
            }],
            description: [{
                a: '교내 학술 동아리에서 한달간  React 스터디를 진행한 후, 처음으로 React를 통한 웹사이트를 개발해 보았습니다.',
                b: '기획 단계부터 참여를 했기에, 어떻게하면 이 사이트의 목적(동아리 홍보)을 사용자에게 충족시킬 수 있는지에 깊이 고민하며 사용자의 편의성을 고려해봤던 프로젝트였습니다.',
                c : 'React를 이용한 첫 프론트 개발임에도 불구하고 반응형 웹 개발, API 통신 등 체계적으로 개발을 진행했습니다. '
            }]
        },
        {
            id: 2,
            title: '우유마켓',
            host: '멋쟁이 사자처럼 9기',
            image: 'img/projects/Wooyoo.png'
        },
        {
            id: 3,
            title: 'AI를 활용한 과제 협업, 평가 학습 블로그',
            host: '2021 한이음 공모전',
            image: 'img/projects/Join.png'
        },
        {
            id: 4,
            title: 'Rendering',
            host: '서울과기대 프로젝트',
            image: 'img/projects/Rendering.png'
        }
    ]
    return {
        list
    }
}

export default Projects

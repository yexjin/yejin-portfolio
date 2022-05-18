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
                a: '• React를 사용',
                b: '• ContextAPI를 통한 상태관리',
                c: '• Material-UI를 통한 반응형 웹 개발',
                d: '• Styled-Components 사용',
                e: '• Axios를 통한 서버 통신'  
            }],
            description: [{
                a: ' 교내 학술 동아리에서 한달간  React 스터디를 진행한 후, 처음으로 React를 통한 웹사이트를 개발해 보았습니다.',
                b: ' 기획 단계부터 참여를 했기에, 어떻게하면 이 사이트의 목적(동아리 홍보)을 사용자에게 충족시킬 수 있는지에 깊이 고민하며 사용자의 편의성을 고려해봤던 프로젝트였습니다.',
                c: ' React를 이용한 첫 프론트 개발임에도 불구하고 반응형 웹 개발, API 통신 등 체계적으로 개발을 진행했습니다. '
            }]
        },
        {
            id: 2,
            title: '우유마켓',
            subtitle: '보유식재료 나눔, 식재료 공구를 위한 자취생 타깃 웹 사이트',
            host: '멋쟁이 사자처럼 9기',
            image: 'img/projects/Wooyoo.png',
            detailImg: 'img/projects/WooyooDetail.png',
            term: '2021.07 ~ 2021.08',
            part: '기획, 디자인, 벡엔드, 프론트엔드, 영상 편집  담당',
            github: 'https://github.com/WooyooMarket/wooyoo_market',
            video: 'https://youtu.be/q1YNwdbzwI4',
            skills: [{
                a: '• Figma를 이용한 디자인',
                b: '• Html, CSS, JS 사용',
                c: '• Django 사용', 
            }],
            description: [{
                a: ' 서울과학기술대학교 멋쟁이 사자처럼 9기 활동 프로젝트입니다.',
                b: ' 아이디어 기획 부터 개발, 영상 편집에 모두 참여하였으며, 1년동안 멋사 활동을 통해 배운 Django 웹 프레임워크를 사용한 첫 프로젝트입니다. ',
                c : ' HTML, CSS, JS에 대한 탄탄한 개발 능력을 쌓을 수 있었고, Django를 사용하며 MVT 패턴을 더욱 효과적으로 이해할 수 있었던 과정이었습니다.'
            }]
        },
        {
            id: 3,
            title: 'JOIN',
            subtitle: '과제 협업 및 평가 학습 블로그 (교육자 Web & 학생 Web)',
            host: '2021 한이음 공모전 [입선]',
            image: 'img/projects/Join.png',
            detailImg: 'img/projects/JoinDetail.png',
            part: '팀장, 디자인, 프론트엔드, 백엔드  담당',
            term: '2021.04 ~ 2021.11',
            github: 'https://github.com/yexjin/JOIN_2021hanium',
            video: 'https://youtu.be/atahos3IgDo',
            skills: [{
                a: '• React 사용 - Redux를 통한 상태관리, Axios로 서버 통신',
                b: '• Koa.js 사용',
                c: '• MySQLWorkbench를 통해 데이터베이스 관리',
                d: '• Rstudio를 통해 빈도수 분석',
                e: '• Docker, AWS, NGINX를 통해 배포',
            }],
            description: [{
                a: ' 2021 한이음 멘토링 및 한이음 공모전을 위한 프로젝트입니다. 해당 프로젝트에서, 아이디어 기획을 제외한 모든 과정에 팀장으로서의 역할을 수행하였습니다. ',
                b: ' 이전에 공부했던 React를 사용하며, 처음으로 Redux를 통해 상태관리를 적용했던 프로젝트였습니다.',
                c: ' 아직 많이 부족한 서버지식을 가지고 멘토님과 팀원의 도움을 받아가며 함께 서버개발 뿐만아니라 Rstudio, Docker 사용 등을 경험해볼 수 있었던 좋은 기회였습니다. ',

            }]
        },
        {
            id: 4,
            title: 'Rendering',
            host: '서울과기대 고급웹프로그래밍 프로젝트',
            subtitle: '온라인 전시회 호스팅 서비스 플랫폼',
            image: 'img/projects/Rendering.png',
            detailImg: 'img/projects/RenderingDetail.png',
            term: '2021.11 ~ 2021.12',
            part: '팀장, 기획, 프론트엔드 담당',
            github: 'https://github.com/yexjin/Rendering',
            video: 'https://youtu.be/cOvGeTlB54k',
            skills: [{
                a: '• React 사용',
                b: '• Redux를 통한 상태관리',
                c: '• Axios로 서버 통신',
            }],
            description: [{
                a: ' 서울과학기술대학교 고급웹프로그래밍 기말과제였던 프로젝트입니다. 팀장, 프론트엔드를 담당하였으며 간단히 과제를 위함을 목적이 아닌 기획부터 디자인, 개발 모두 힘써 진행을 완료했습니다.',
                b: ' React, Redux 기술을 사용하는 것이 익숙해있었을 때였으므로 사용자가 색다른 느낌을 얻을 수 있는 애니메이션과 디자인에 충족하는 프론트개발에 힘을 다했습니다. ( 개인적으로 가장 애니메이션과 디자인이 마음에 드는 작품 :) )',
                c: ' 학기 중에 2인 프로젝트로 한달만에 준비를 해야하는 거라 부담감이 있었지만 최선을 다했던, 만족스러운 결과를 얻은 프로젝트입니다.',
            }]
        },
        {
            id: 5,
            title: 'Portfolio',
            host: '포트폴리오 사이트',
            subtitle: '오예진의 포트폴리오 사이트',
            image: 'img/projects/Pf.png',
            detailImg: 'img/projects/PfDetail.png',
            term: '2022.1 ~ ing',
            part: '기획, 디자인, 개발',
            github: 'https://github.com/yexjin/yejin-portfolio',
            skills: [{
                a: '• React 사용',
                b: '• ContextApi를 통한 상태관리',
                c: '• Material UI로 모바일, 태블릿, PC버전 반응형 구현',
            }],
            description: [{
                a: ' 해당 사이트인 2022년 저의 첫 포트폴리오 사이트입니다.',
                b: ' 지난 2021년 열심히 사용해왔던 React 프레임워크를 사용하여 개발을 완료했습니다.',
                c: ' 프로젝트와 기술 등의 내용추가와 사이트의 최적화 관리를 시간이 날때마다 틈틈이 진행할 예정입니다.',
            }]
        },
        {
            id: 6,
            title: 'Surfee',
            host: '노코드 랜딩페이지 제작 툴',
            subtitle: '노코드 랜딩페이지 제작 툴',
            image: 'img/projects/Surfee.png',
            detailImg: 'img/projects/SurfeeDetail.png',
            term: '2022.2 ~ 2022.3',
            part: '프론트엔드 개발 담당',
            github: 'https://github.com/thxxx/kiwi',
            url: 'https://surfee.co.kr',
            skills: [{
                a: '• React 사용',
                b: '• ContextApi를 통한 상태관리',
                c: '• 모바일, PC버전 반응형 구현',
            }],
            description: [{
                a: ' 대학생 4명으로 이루어진 스타트업에서 개발자로 일하며 완성한 1차 MVP 서비스입니다.',
                b: ' 30% 정도 구현이 되어있던 서비스의 마무리를 책임졌으며 2월 23일 서비스 런칭과 이후 몇 주간의 보완작업에 참여했습니다.',
                c: ' 다른 개발자와의 소통, 보기 쉬운 폴더 구성과 깔끔한 코드, 스타트업의 현장 경험 등 많은 것을 배울 수 있었습니다.',
            }]
        }
    ]
    return {
        list
    }
}

export default Projects

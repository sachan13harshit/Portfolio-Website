import kanban from "./Kanban.png";

import ecommerce from "./ecommerce.png";
import portfolio from "./portfolio.png";
import restaurant from "./Restaurant.png";
import quiz from "./Quiz.png";



export const projectsData = [
    {
        title: "Portfolio Website",
        image: <img src={portfolio} alt="hi" className="project-image" />,
        link: "https://harshit-sachan.vercel.app/",
        source: "https://github.com/sachan13harshit/Portfolio-Website",
        type: "ALL"
    },

    {
        title: "Ecommerce Website",
        image: <img src={ecommerce} alt="hi" className="project-image" />,
        link: "https://sachan13harshit.github.io/EcommerceWebsite/",
        source: "https://github.com/sachan13harshit/EcommerceWebsite",
        type: "ALL"
    },
    {
        title: "Quiz App",
        image: <img src={quiz} alt="hi" className="project-image" />,
        link: "https://sachan13harshit.github.io/QuizApp/",
        source: "https://github.com/sachan13harshit/QuizApp",
        type: "ALL"
    },
    {
        title: "Restaurant Website",
        image: <img src={restaurant} alt="hi" className="project-image" />,
        link: "https://sachan13harshit.github.io/CloningHackathon/",
        source: "https://github.com/sachan13harshit/CloningHackathon",
        type: "ALL"
    },
    {
        title: "Kanban Board",
        image: <img src={kanban} alt="hi" className="project-image" />,
        link: "https://sachan13harshit.github.io/KanBan-Board/",
        source: "https://github.com/sachan13harshit/KanBan-Board",
        type: "ALL"
    },
];

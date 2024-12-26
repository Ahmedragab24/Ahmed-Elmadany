import { Menu, SoftSkills, Education, CustomerReviewProps } from "@/interfaces";

export const MenuLink: Menu[] = [
  {
    Title: "Home",
    ArTitle: "الرئيسية",
    Url: "./",
  },
  {
    Title: "Contact Me",
    ArTitle: "تواصل معي",
    Url: "./#Contact",
  },
];

export const NavLink: Menu[] = [
  {
    Title: "Technical Skills",
    ArTitle: "المهارات الفنية",
    Url: "./#TechSkills",
  },
  {
    Title: "Soft Skills",
    ArTitle: "المهارات الشخصية",
    Url: "./#SoftSkills",
  },
  {
    Title: "Projects",
    ArTitle: "المشاريع",
    Url: "./#Projects",
  },
  {
    Title: "Educations",
    ArTitle: "التعليم",
    Url: "./#Education",
  },
  {
    Title: "Experience",
    ArTitle: "الخبرات",
    Url: "./#Experience",
  },
  {
    Title: "Reviews",
    ArTitle: "التقييمات",
    Url: "./#CustomerReviews",
  },
];

export const aboutMe = {
  title: "Hello,",
  description:
    "My solid foundation in data structures, algorithms, object-oriented programming, and design patterns has allowed me to develop efficient, maintainable, and scalable code. I am proficient in JavaScript and TypeScript and have extensive experience working with React and Redux. I have also worked with Next.js, GraphQl, Sass, Tailwind CSS, and other front-end technologies.",
  name: "Eng-Ahmed Elmadany",
  position: "Front-end Developer",
  arabicTitle: "مرحباً,",
  arabicDescription:
    "لقد سمح لي الأساس المتين في هياكل البيانات والخوارزميات والبرمجة الموجهة للكائنات وأنماط التصميم بتطوير أكواد فعّالة وقابلة للصيانة وقابلة للتطوير. أنا بارع في JavaScript وTypeScript ولدي خبرة واسعة في العمل مع React وRedux. لقد عملت أيضًا مع Next.js وGraphQl وSass وTailwind CSS وتقنيات واجهة المستخدم الأخرى.",
  arabicName: "المهندس-أحمد المدني",
  arabicPsition: "مطور وجهات أمامية",
};

export const techSkills = [
  {
    title: "Programming languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "Sql"],
  },
  {
    title: "Computer Science",
    skills: [
      "Algorithms",
      "Data structure",
      "RAM control",
      "Oop",
      "Design",
      "Patterns",
      "Solid Principles",
    ],
  },
  {
    title: "Computer Science",
    skills: [
      "Algorithms",
      "Data structure",
      "RAM control",
      "Oop",
      "Design",
      "Patterns",
      "Solid Principles",
    ],
  },
];


export const ExperienceData = [
  {
    title: "My own projects",
    description:
      "I have done many projects, more than 40 different projects, including e-commerce sites, real estate sites, task management sites, and employee management sites. I have built systems and have good experience in the world of web development.",
    titleLink: "My Profile on Github",
    arabicTitle: "مشاريعي الخاصة",
    arabicDescription:
      "لقد قمت بالعديد من المشاريع، أكثر من 40 مشروعًا مختلفًا، بما في ذلك مواقع التجارة الإلكترونية ومواقع العقارات ومواقع إدارة المهام ومواقع إدارة الموظفين، لقد قمت ببناء الأنظمة ولدي خبرة جيدة في عالم تطوير الويب.",
    arabicTitleLink: "ملفي الشخصي على Github",
    link: "https://github.com/Ahmedragab24",
    motion: -100,
    duration: 0.6,
  },
  {
    title: "Mostaql",
    description:
      "I have done many projects on the freelance platform, large and medium projects with clients in the Middle East, and all of them are happy to work with me",
    titleLink: "My profile on Mostaql",
    arabicTitle: "منصة مستقل",
    arabicDescription:
      "لقد قمت بالعديد من المشاريع على منصة العمل الحر، مشاريع كبيرة ومتوسطة مع عملاء في الشرق الأوسط، وجميعهم سعداء بالعمل معي",
    arabicTitleLink: "ملفي الشخصي على مستقل",
    link: "https://mostaql.com/u/Ahmed_Ragab8",
    motion: 100,
    duration: 0.8,
  },
  {
    title: "Orkend company",
    description:
      "I worked with Orkend Saudi Arabia as a remote front-end web developer for a year. It was an excellent period full of challenges and development.",
    titleLink: "Company Link",
    arabicTitle: "شركة اوركند",
    arabicDescription:
      "عملت مع شركة اوركند السعودية كمطور ويب عن بعد لمدة عام، وكانت فترة ممتازة مليئة بالتحديات والتطوير.",
    arabicTitleLink: "لينك الشركة",
    link: "https://orkend.com/",
    motion: -100,
    duration: 1,
  },
];

export const EducationData: Education[] = [
  {
    title: "Bachelor of Social Work",
    history: "From 2020 to 2024",
    description:
      "I hold a bachelor's degree in social work from the Higher Institute of Social Work in Alexandria in 2024",
    arabicTitle: "بكالوريوس الخدمة الاجتماعية",
    arabicHistory: "من 2020 إلى 2024",
    arabicDescription:
      "حصلت على درجة البكالوريوس في الخدمة الاجتماعية من المعهد العالي للخدمة الاجتماعية بالاسكندرية سنة 2024",
    icon: "SchoolIcon",
    link: "/",
  },
  {
    title: "Computer Science CS50",
    history: "From 2020 to 2022",
    description:
      "Harvard University degree in computer science, CS50 curriculum in computer science integrated",
    arabicTitle: "علوم الحاسوب CS50",
    arabicHistory: "من 2020 إلى 2022",
    arabicDescription:
      "درجة في علوم الكمبيوتر من جامعة هارفارد، منهج CS50 في علوم الكمبيوتر المتكاملة",
    icon: "CodeIcon",
    link: "/",
  },
];

export const softSkillsData: SoftSkills[] = [
  {
    triggerTitle: "Effective Communication",
    arTriggerTitle: "التواصل الفعال",
    icon: "Handshake",
    description:
      "The ability to clearly articulate ideas and suggestions, whether in writing or orally. Ability to actively listen and understand customer and team members&apos; requirements.",
    arDescription:
      "القدرة على التعبير بوضوح عن الأفكار والاقتراحات، سواء كتابيًا أو شفويًا. القدرة على الاستماع بشكل نشط وفهم متطلبات العملاء وأعضاء الفريق.",
    direction: "top",
  },
  {
    triggerTitle: "Teamwork & collaboration",
    arTriggerTitle: "العمل الجماعي والتعاون",
    icon: "Users",
    description:
      "Ability to work effectively with other developers, designers, and project managers. Understand the importance of cooperation in achieving common goals.",
    arDescription:
      "القدرة على العمل بفعالية مع المطورين والمصممين ومديري المشاريع الآخرين. فهم أهمية التعاون في تحقيق الأهداف المشتركة.",
    direction: "top",
  },
  {
    triggerTitle: "Problem Solving",
    arTriggerTitle: "حل المشاكل",
    icon: "Bug",
    description:
      "Critical and analytical thinking to deal with programming challenges and unexpected problems. Ability to research and discover appropriate solutions when faced with technical obstacles.",
    arDescription:
      "التفكير النقدي والتحليلي للتعامل مع تحديات البرمجة والمشكلات غير المتوقعة. القدرة على البحث واكتشاف الحلول المناسبة عند مواجهة العقبات التقنية.",
    direction: "left",
  },
  {
    triggerTitle: "Time management",
    arTriggerTitle: "إدارة الوقت",
    icon: "AlarmClock",
    description:
      "Ability to effectively manage time to meet deadlines. Priority in distributing tasks and working on the most important tasks first.",
    arDescription:
      "القدرة على إدارة الوقت بشكل فعال لتلبية المواعيد النهائية. الأولوية في توزيع المهام والعمل على المهام الأكثر أهمية أولاً.",
    direction: "left",
  },
  {
    triggerTitle: "Continuous Learning",
    arTriggerTitle: "التعلم المستمر",
    icon: "Blocks",
    description:
      "Passion for learning new technologies and keeping abreast of continuous updates in the field of web development. Prepare to continuously develop your skills and follow the latest trends in front-end development.",
    arDescription:
      "الشغف بتعلم التقنيات الجديدة ومواكبة التحديثات المستمرة في مجال تطوير الويب. الاستعداد لتطوير مهاراتك باستمرار ومتابعة أحدث الاتجاهات في تطوير الواجهة الأمامية.",
    direction: "right",
  },
  {
    triggerTitle: "Attention To Detail",
    arTriggerTitle: "الاهتمام بالتفاصيل",
    icon: "Bolt",
    description:
      "Ability to detect small errors that may affect the user experience. Ensure that high quality and flawless work is provided.",
    arDescription:
      "القدرة على اكتشاف الأخطاء الصغيرة التي قد تؤثر على تجربة المستخدم. تأكد من تقديم عمل عالي الجودة وخالٍ من العيوب.",
    direction: "right",
  },
  {
    triggerTitle: "Resilience & Adaptation",
    arTriggerTitle: "المرونة والتكيف",
    icon: "Container",
    description:
      "Ability to adapt to changes in projects or tools used. Willingness to work in changing environments and handle diverse tasks.",
    arDescription:
      "القدرة على التكيف مع التغيرات في المشاريع أو الأدوات المستخدمة. الاستعداد للعمل في بيئات متغيرة والتعامل مع مهام متنوعة.",
    direction: "bottom",
  },
  {
    triggerTitle: "Creativity and Excellence",
    arTriggerTitle: "الإبداع والتميز",
    icon: "Webhook",
    description:
      "Ability to think outside the box and provide innovative solutions. Develop attractive user interfaces that are simple to use.",
    arDescription:
      "القدرة على التفكير خارج الصندوق وتقديم حلول مبتكرة. تطوير واجهات مستخدم جذابة وسهلة الاستخدام.",
    direction: "bottom",
  },
];

export const reviews: CustomerReviewProps[] = [
  {
    id: 1,
    name: "Moamen",
    avatar: "/user1.png",
    review: "Engineer Ahmed, apart from his professionalism and excellent and perfect work, is a very well-mannered person. This is the first time I have dealt with him, but I will continue to deal with him in future projects because he is an artist in his work. He worked with me on the front end of one of the pages of my website and was creative on the page, and the final product was very excellent.",
    rating: 5,
  },
  {
    id: 2,
    name: "Tahani",
    avatar: "/user4.webp",
    review: "More than wonderful service. Engineer Ahmed is excellent in his work. I will return to work with him again, God willing.",
    rating: 5,
  },
  {
    id: 3,
    name: "Omar Faiz",
    avatar: "/user2.png",
    review: "Experienced in work, very fast in completion, and very well-mannered. I always recommend working with him.",
    rating: 5,
  },
  {
    id: 4,
    name: "Al Mansour",
    avatar: "/user3.webp",
    review: "The customer service was excellent. They were very helpful.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ahmed Hussein",
    avatar: "/user5.webp",
    review: "Great value for money. I would definitely recommend it to others.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sleman",
    avatar: "/user6.webp",
    review: "The service was excellent. it was website is very perfect.",
    rating: 4,
  }
]

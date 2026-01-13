import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Product Designer, Tailwind",
        location: "Remote",
        startYear: "2022",
        endYear: "Present",
        bulletPoints: [
            "Led end-to-end redesign of dashboard UI, improving user retention by 23%",
            "Collaborated with engineers and product managers to ship features faster",
            "Designed components used in a system adopted by 4+ internal teams"
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "UI/UX Designer - Asana",
        location: "New York, NY",
        startYear: "2019",
        endYear: "2022",
        bulletPoints: [
            "Created design systems for client projects across finance and healthcare",
            "Conducted user testing and research to validate designs",
            "Helped junior designers grow via mentorship"
        ]
    },
]

const educationData = [
    {
        date: "2019 -  2021",
        title: "BECE Certification",
        subtitle: "Redeem Junior High School"
    },
    {
        date: "April 2022 - Sept 2024",
        title: "WASSCE Certification - Gneneral Arts",
        subtitle: "Mawuli School, Ho - Ghana"
    },
    {
        date: "Jan 2025 - Now",
        title: "BSc. in Information Technology",
        subtitle: "University of Professional Studies, Accra - Regular Program"
    }
];


const projectOverview = {
    caseStudies: [
        { name: "Wellnest", url: "#" },
        { name: "ScoutHire", url: "#" },
    ],
    sideProjects: [
        { name: "Formless", url: "#" },
        { name: "Gridsnap", comingSoon: true },
        { name: "OrbitPay Mobile App", comingSoon: true },
        { name: "Siteflow Page Builder", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};
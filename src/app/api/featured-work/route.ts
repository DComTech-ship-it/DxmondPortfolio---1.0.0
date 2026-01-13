import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with product management, cart, and payment integration.",
        roles: ["Web Development", "UI/UX Design", "E-commerce Integration"],
        image: "/images/feature-work/feature-img-1.png"
    },
    {
        title: "Portfolio Website",
        description: "A modern and responsive portfolio website showcasing creative work and skills.",
        roles: ["Web Design", "Frontend Development", "Responsive Layout"],
        image: "/images/feature-work/feature-img-2.png"
    },
    {
        title: "Task Management App",
        description: "A productivity app for managing tasks, projects, and team collaboration.",
        roles: ["Mobile App Development", "UI/UX Design"],
        image: "/images/feature-work/feature-img-3.jpg"
    },
    {
        title: "Restaurant Website",
        description: "An elegant website for a fine dining restaurant with online reservation system.",
        roles: ["Web Design", "Frontend Development", "Menu Integration"],
        image: "/images/feature-work/3.webp"
    },
    {
        title: "Fitness Tracker",
        description: "A fitness tracking application that monitors workouts and health metrics.",
        roles: ["Mobile Development", "Health Integration"],
        image: "/images/feature-work/feature-img-5.jpg"
    },
    {
        title: "Corporate Dashboard",
        description: "An analytics dashboard for business intelligence and data visualization.",
        roles: ["Web Development", "Data Visualization"],
        image: "/images/feature-work/feature-img-6.jpg"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};
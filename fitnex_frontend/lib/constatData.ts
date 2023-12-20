
import { Feature } from './types';
import OurFeatures from '../components/OurFeatures';


export const OurFeaturesData: Feature[]  = [
    {
        name: "Personalization",
        description:
            "Choose from over 1300+ Exercises, and personalize your whole experience.",
        image: "/images/icon-personalize.png",
        alt: "Customizable",
        color: "blue"
    },
    {
        name: "Accessibility",
        description:
            "Fitnex made workout accessible to all, regardless of location, time constraints, or financial limitations.",
        image: "/images/icon-access2.png",
        alt: "Customizable",
    },
    {
        name: "Engagement",
        description:
            "Fitnex has a perfect trainer experience that encourages trainers to interact with the exercises. And practice every day.",
        image: "/images/icon-puzzle.png",
        alt: "Customizable",
    },
    {
        name: "Guidance",
        description:
            "Fitnex provides comprehensive information on exercises, proper techniques, and nutritional guidance to educate users on holistic well-being.",
        image: "/images/icon-guidance2.png",
        alt: "Customizable",
    },
    {
        name: "Variety",
        description:
            "Fitnex offers diverse workout routines catering to different objectives such as weight loss, muscle building, and overall fitness.",
        image: "/images/icon-layer.png",
        alt: "Customizable",
    },
    {
        name: "Support",
        image: "/images/icon-support-1.png",
        description: "Get 24/7 support from our team to help you with any issues you have.",
        alt: "Customizable",
    },
]



export const MadeForFeatures: Feature[] = [
    {
        name: "Beginners",
        time: "0 hrs/week training",
        exp: "With little to no experience",
        description: "Individuals new to fitness who may feel intimidated by traditional gym environments.",
    },
    {
        name: "Enthusiasts",
        time: "1-7 hrs/week training",
        exp: "With some experience",
        description: "People passionate about health and wellness who prefer the flexibility of home-based workouts.",
    },
    {
        name: "Professionals",
        time: "8+ hrs/week training",
        exp: "With extensive experience",
        description: "Those with demanding schedules who struggle to find time for gym visits.",

    }
]

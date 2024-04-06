import arcadeImg from '../assets/images/icon-arcade.svg';
import advancedImg from '../assets/images/icon-advanced.svg';
import proImg from '../assets/images/icon-pro.svg';

export interface Plan {
    image: string;
    title: string;
    description: string;
    dates: string;
}

export interface CoreData {
    arcade: Plan;
    advanced: Plan;
    pro: Plan;
    dates: {
        monthly: string;
        yearly: string;
    };
}

export const CORE_DATA: CoreData = {
    arcade: {
        image: arcadeImg,
        title: 'Arcade',
        description: '$9/',
        dates: '2 months free'
    },
    advanced: {
        image: advancedImg,
        title: 'Advanced',
        description: '$12/',
        dates: '2 months free'
    },
    pro: {
        image: proImg,
        title: 'Pro',
        description: '$15/',
        dates: '2 months free'
    },
    dates: {
        monthly: 'Monthly',
        yearly: 'Yearly'
    }
};

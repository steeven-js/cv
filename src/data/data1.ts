interface Formation {
    year: string;
    title: string;
    institution: string;
}

interface Skill {
    name: string;
    experience: string;
    description: string;
}

interface Experience {
    period: string;
    position: string;
    company: string;
    description: string;
}

interface Contact {
    icon: string;
    value: string;
}

interface PersonalInfo {
    name: string;
    title: string;
    summary: string;
}

export const personalInfo: PersonalInfo = {
    name: "Steeven JACQUES",
    title: "Développeur Full-Stack React & Laravel",
    summary: "Développeur full-stack expert en React (Web & Mobile) et Laravel (API & Back-end), je conçois des applications performantes et sécurisées. J'intègre les meilleures pratiques modernes pour garantir une expérience utilisateur optimale et un code robuste."
};

export const contactInfo: Contact[] = [
    {
        icon: "w-2.5 h-2 left-[1px] top-[2px] absolute bg-purple-500",
        value: "www.jsprod.fr"
    },
    {
        icon: "w-2 h-2 left-[1.50px] top-[1.50px] absolute bg-purple-500",
        value: "jacques.steeven@gmail.com"
    },
    {
        icon: "w-2.5 h-1.5 left-[1px] top-[2.87px] absolute bg-purple-500",
        value: "steeven-jacques-1337a9238"
    },
    {
        icon: "w-2.5 h-2.5 left-[1px] top-[1px] absolute bg-purple-500",
        value: "+565 696 30 76 31"
    }
];

export const formations: Formation[] = [
    {
        year: "2022",
        title: "Concepteur Développeur d'Application",
        institution: "IMFPA - Fort de France"
    },
    {
        year: "2020",
        title: "Développeur Web et Mobile",
        institution: "IMFPA - Fort de France"
    }
];

export const skills: Skill[] = [
    {
        name: "Front-End (UI/UX & Web Apps)",
        experience: "+5 years",
        description: "React, Next.js, TailwindCSS, MUI, Optimisation SEO et performance"
    },
    {
        name: "Mobile (Apps iOS & Android)",
        experience: "+3 years",
        description: "React Native, Expo, Gestion des composants natifs, Développement et intégration avancée"
    },
    {
        name: "Back-End & API (Scalabilité & Sécurité)",
        experience: "+4 years",
        description: "Laravel (REST API, Authentication, Gestion des permissions), Node.js & Express (API secondaires, microservices)"
    },
    {
        name: "Bases de Données",
        experience: "+5 years",
        description: "MySQL (Laravel Eloquent, SQL optimisé), Firebase Firestore (NoSQL, données en temps réel), PostgreSQL, MongoDB (selon les besoins)"
    },
    {
        name: "DevOps & Sécurité",
        experience: "+2 years",
        description: "Docker, Vercel, Netlify, Hostinger (déploiement & CI/CD), Gestion des accès, chiffrement des données, prévention des menaces"
    }
];

export const experiences: Experience[] = [
    {
        period: "Juin 2022 - Actuellement",
        position: "CTO",
        company: "MadinIA (madinia.fr) | React, Laravel, Firebase",
        description: "Projet clé : CRM sur mesure avec Laravel (API) & React (front-end). Développement et optimisation d'une plateforme complète (site web, dashboards, CRM). Implémentation d'APIs Laravel sécurisées et scalables. Intégration Firebase pour l'authentification et la gestion des notifications."
    },
    {
        period: "Jan. 2021 - Mai 2022",
        position: "Développeur IA & Cybersécurité",
        company: "LLM Open Source & Sécurisation des Données",
        description: "Déploiement d'IA locale avec gestion des accès et des permissions. Implémentation de solutions auto-hébergées sécurisées. Protection des données et mise en place de stratégies de chiffrement."
    },
    {
        period: "Mars 2020 - Déc. 2020",
        position: "Développement Mobile Plantmed iOS",
        company: "React Native",
        description: "Application mobile sur les plantes médicinales. Création d'une application iOS performante avec gestion avancée de l'état et des données en temps réel. Intégration de composants natifs pour une expérience fluide."
    }
];
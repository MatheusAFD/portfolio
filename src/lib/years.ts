const CAREER_BASELINE_YEAR = 2022

export const yearsOfExperience = () => Math.max(1, new Date().getFullYear() - CAREER_BASELINE_YEAR)

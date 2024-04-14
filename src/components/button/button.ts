export const ButtonVariants = ['primary', 'danger', 'warning', 'success'] as const;

export type ButtonVariantsType = typeof ButtonVariants[number];

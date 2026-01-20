// Base button classes that are common across all button variants
const BASE_BUTTON_CLASSES =
  "box-border font-medium leading-5 rounded-[var(--radius-base)] text-sm px-3 py-2 focus:outline-none cursor-pointer";

// Button variant classes
export const BUTTON_DEFAULT_CLASSES = `${BASE_BUTTON_CLASSES} text-white bg-[rgb(var(--brand))] hover:bg-[rgb(var(--brand-strong))] border border-transparent focus:ring-4 focus:ring-[rgb(var(--brand-medium))] shadow-[var(--shadow-xs)]`;

export const BUTTON_SECONDARY_CLASSES = `${BASE_BUTTON_CLASSES} text-body bg-[rgb(var(--neutral-secondary-medium))] border border-[rgb(var(--default-medium))] hover:bg-[rgb(var(--neutral-tertiary-medium))] hover:text-heading focus:ring-4 focus:ring-[rgb(var(--neutral-tertiary))] shadow-[var(--shadow-xs)]`;

export const BUTTON_TERTIARY_CLASSES = `${BASE_BUTTON_CLASSES} text-body bg-[rgb(var(--neutral-primary-soft))] border border-[rgb(var(--default))] hover:bg-[rgb(var(--neutral-secondary-medium))] hover:text-heading focus:ring-4 focus:ring-[rgb(var(--neutral-tertiary-soft))] shadow-[var(--shadow-xs)]`;

export const BUTTON_SUCCESS_CLASSES = `${BASE_BUTTON_CLASSES} text-white bg-[rgb(var(--success))] hover:bg-[rgb(var(--success-strong))] border border-transparent focus:ring-4 focus:ring-[rgb(var(--success-medium))] shadow-[var(--shadow-xs)]`;

export const BUTTON_DANGER_CLASSES = `${BASE_BUTTON_CLASSES} text-white bg-[rgb(var(--danger))] hover:bg-[rgb(var(--danger-strong))] border border-transparent focus:ring-4 focus:ring-[rgb(var(--danger-medium))] shadow-[var(--shadow-xs)]`;

export const BUTTON_WARNING_CLASSES = `${BASE_BUTTON_CLASSES} text-white bg-[rgb(var(--warning))] hover:bg-[rgb(var(--warning-strong))] border border-transparent focus:ring-4 focus:ring-[rgb(var(--warning-medium))] shadow-[var(--shadow-xs)]`;

export const BUTTON_DARK_CLASSES = `${BASE_BUTTON_CLASSES} text-white bg-[rgb(var(--dark))] hover:bg-[rgb(var(--dark-strong))] border border-transparent focus:ring-4 focus:ring-[rgb(var(--neutral-tertiary))] shadow-[var(--shadow-xs)]`;

export const BUTTON_GHOST_CLASSES = `${BASE_BUTTON_CLASSES} text-heading bg-transparent border border-transparent hover:bg-[rgb(var(--neutral-secondary-medium))] focus:ring-4 focus:ring-[rgb(var(--neutral-tertiary))]`;

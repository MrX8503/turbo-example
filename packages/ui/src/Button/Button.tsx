import type { ReactNode } from 'react';

export interface ButtonProps {
    className?: string;
    children?: ReactNode;
}

export default function Button ({ children, className }: ButtonProps) {
    return (
        <button
            type="button"
            className={`ui-text-red-800 ui-bg-slate-700 ${className || ''}`}
        >
            {children}
        </button>
    );
}

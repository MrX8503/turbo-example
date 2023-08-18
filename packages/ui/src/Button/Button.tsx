import clsx from 'clsx';

import type { ReactNode } from 'react';

export interface ButtonProps {
    intent?: 'primary' | 'danger';
    className?: string;
    children?: ReactNode;
}

export default function Button ({
    className,
    intent,
    children
}: ButtonProps) {
    return (
        <button
            type="button"
            className={clsx(
                'ui-rounded-full',
                'ui-px-6',
                'ui-py-2',
                'ui-text-white',
                {
                    'ui-bg-slate-800 hover:ui-bg-slate-600': intent === 'primary' || !intent,
                    'ui-bg-red-700 hover:ui-bg-red-600': intent === 'danger'
                },
                className
            )}
        >
            {children}
        </button>
    );
}

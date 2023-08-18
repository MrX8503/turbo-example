import type { ReactNode } from 'react';

export interface CardProps {
    children?: ReactNode;
}

export default function Card ({ children }: CardProps) {
    return (
        <>
            <h1>Card Component</h1>
            {children}
        </>
    );
}

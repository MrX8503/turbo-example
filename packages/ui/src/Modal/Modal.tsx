import type { ReactNode } from 'react';

export interface ModalProps {
    children?: ReactNode;
}

export default function Modal ({ children }: ModalProps) {
    return (
        <>
            <h1>Modal Component</h1>
            {children}
        </>
    );
}

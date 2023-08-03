import {
    Button
} from '@/ui/src';

import '@/ui/src/styles/globals.css';

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
            <Button>Hello World</Button>
        </html>
    );
}

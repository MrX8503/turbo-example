import { Button } from '@/ui/src';

export default {
    title: 'Components/Button',
    component: Button,
    // https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // https://storybook.js.org/docs/react/configure/story-layout
        layout: 'padded'
    }
};

export const Primary = {
    args: {
        children: 'Primary'
    }
};

export const Danger = {
    args: {
        children: 'Danger',
        intent: 'danger'
    }
};

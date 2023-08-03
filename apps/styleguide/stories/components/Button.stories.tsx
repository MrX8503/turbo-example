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

export const StateOne = {
    args: {
        children: 'Hello 1'
    }
};

export const StateTwo = {
    args: {
        children: 'Hello 2'
    }
};

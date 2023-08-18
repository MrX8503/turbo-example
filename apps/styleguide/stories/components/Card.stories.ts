import { Card } from '@/ui/src';

export default {
    title: 'Components/Card',
    component: Card,
    // https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // https://storybook.js.org/docs/react/configure/story-layout
        layout: 'padded'
    }
};

export const StateOne = {
    args: {
        children: 'State 1'
    }
};

export const StateTwo = {
    args: {
        children: 'State 2'
    }
};

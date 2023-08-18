import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button', () => {
    it('primary snapshot is unchanged', () => {
        const toRender = (
            <Button>
                Hello World
            </Button>
        );

        const tree = renderer.create(toRender).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('danger snapshot is unchanged', () => {
        const toRender = (
            <Button intent="danger">
                Hello World
            </Button>
        );

        const tree = renderer.create(toRender).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

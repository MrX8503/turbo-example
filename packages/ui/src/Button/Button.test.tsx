import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button', () => {
    it('snapshot is unchanged', () => {
        const toRender = (
            <Button>
                Hello WOrld
            </Button>
        );

        const tree = renderer.create(toRender).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

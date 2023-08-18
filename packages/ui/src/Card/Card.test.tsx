import renderer from 'react-test-renderer';

import Card from './Card';

describe('Card', () => {
    it('snapshot is unchanged', () => {
        const toRender = (
            <Card>
                Hello World
            </Card>
        );

        const tree = renderer.create(toRender).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

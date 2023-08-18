import renderer from 'react-test-renderer';

import Modal from './Modal';

describe('Modal', () => {
    it('snapshot is unchanged', () => {
        const toRender = (
            <Modal>
                Hello World
            </Modal>
        );

        const tree = renderer.create(toRender).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

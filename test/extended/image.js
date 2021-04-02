import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Image field testing', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh()
    });

    describe('Placeholder', function () {

        it.only('TC - 105 Placeholder field name = "Click or drag and drop"', function () {
            const image = $(sel.image).getText();
            expect(image).toEqual(exp.imagePlaceholder);
        });
    });
});

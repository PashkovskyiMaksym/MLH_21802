import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import  {images, caseType} from '../../data/testData';
import {uploadingImage} from '../../helpers/methods';

describe('Image field testing', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh()
    });

    describe('Placeholder', function () {

        it('TC - 105 Placeholder field name = "Click or drag and drop"', function () {
            const image = $(sel.image).getText();
            expect(image).toEqual(exp.imagePlaceholder);
        });
    });

    describe('Positive testing', function () {

        it('TC- 106 Preview is appeared with jpeg 2MB', function () {
            const message = uploadingImage(images.jpeg2, sel.imagePreview, caseType.positive);
            expect(message).toEqual(true);
        });

        it('TC- 107 Preview is appeared with png 2MB', function () {
            const message = uploadingImage(images.png2, sel.imagePreview, caseType.positive);
            expect(message).toEqual(true);
        });

        it('TC- 110 No error appears with png 2MB', function () {
            const message = uploadingImage(images.png2, sel.imageError, caseType.positive);
            expect(message).toEqual(false);
        });

        it('TC- 111 No error appears with jpeg 2MB', function () {
            const message = uploadingImage(images.jpeg2, sel.imageError, caseType.positive);
            expect(message).toEqual(false);
        });

        it('TC- 112 No error appears with jpeg max 3.9MB', function () {
            const message = uploadingImage(images["jpeg3.9"], sel.imageError, caseType.positive);
            expect(message).toEqual(false);
        });

        it('TC- 113 No error appears with png max 3.9MB', function () {
            const message = uploadingImage(images["png3.9"], sel.imageError, caseType.positive);
            expect(message).toEqual(false);
        });

        it('TC- 114 Preview ia appeared with jpeg max 3.9MB', function () {
            const message = uploadingImage(images["jpeg3.9"], sel.imagePreview, caseType.positive);
            expect(message).toEqual(true);
        });

        it('TC- 115 Preview ia appeared with png max 3.9MB', function () {
            const message = uploadingImage(images["png3.9"], sel.imagePreview, caseType.positive);
            expect(message).toEqual(true);
        });
    });
});

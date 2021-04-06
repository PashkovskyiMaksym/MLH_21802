import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {images, caseType} from '../../data/testData';
import {uploadingImage} from '../../helpers/methods';

const path = require('path');

describe('Image field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Negative testing', function () {

        it('TC- 128a The error message with jpeg 4Mb', function () {
            const message = uploadingImage(images.jpeg4, sel.imageError, caseType.negative);
            expect(message).toEqual(true);
        });

        it('TC- 128b The error message with jpeg 4Mb - correct text', function () {
            uploadingImage(images.jpeg4, sel.imageError, caseType.negative);
            const message = $(sel.imageError).getText();
            expect(message).toEqual(exp.wrongSizeImage);
        });

        it('TC- 129 No preview appears with jpeg 4Mb', function () {
            const message = uploadingImage(images.jpeg4, sel.imagePreview, caseType.negative);
            expect(message).toEqual(false);
        });

        it.skip('TC- 130 (BUG) The error message with png 4Mb', function () {
            const message = uploadingImage(images.png4, sel.imageError, caseType.negative);
            expect(message).toEqual(true);
        });

        it.skip('TC- 131 (BUG) No preview appears with png 4Mb', function () {
            const message = uploadingImage(images.png4, sel.imagePreview, caseType.negative);
            expect(message).toEqual(false);
        });

        it('TC- 132a The error message with bmp valid size', function () {
            const message = uploadingImage(images.bmp, sel.imageError, caseType.negative);
            expect(message).toEqual(true);
        });

        it('TC- 132b The error message with bmp valid size - correct text', function () {
            uploadingImage(images.bmp, sel.imageError, caseType.negative);
            const message = $(sel.imageError).getText();
            expect(message).toEqual(exp.wrongFormatImage);
        });

        it('TC- 133 No preview appears with bmp valid size', function () {
            const message = uploadingImage(images.bmp, sel.imagePreview, caseType.negative);
            expect(message).toEqual(false);
        });

        it('TC- 134 The error message with pdf valid size', function () {
            const message = uploadingImage(images.pdf, sel.imageError, caseType.negative);
            expect(message).toEqual(true);
        });

        it('TC- 135 No preview appears with pdf valid size', function () {
            const message = uploadingImage(images.pdf, sel.imagePreview, caseType.negative);
            expect(message).toEqual(false);
        });

        it('TC- 136 The error message with gif valid size', function () {
            const message = uploadingImage(images.gif, sel.imageError, caseType.negative);
            expect(message).toEqual(true);
        });

        it('TC- 137 No preview appears with gif valid size', function () {
            const message = uploadingImage(images.gif, sel.imagePreview, caseType.negative);
            expect(message).toEqual(false);
        });

        it('TC- 138 The error message with svg valid size', function () {
            const message = uploadingImage(images.svg, sel.imageError, caseType.negative);
            expect(message).toEqual(true);
        });

        it('TC- 139 No preview appears with svg valid size', function () {
            const message = uploadingImage(images.svg, sel.imagePreview, caseType.negative);
            expect(message).toEqual(false);
        });

        it('TC- 140 The error message with pptx valid size', function () {
            const message = uploadingImage(images.pptx, sel.imageError, caseType.negative);
            expect(message).toEqual(true);
        });

        it('TC- 141 No preview appears with pptx valid size', function () {
            const message = uploadingImage(images.pptx, sel.imagePreview, caseType.negative);
            expect(message).toEqual(false);
        });
    });
});

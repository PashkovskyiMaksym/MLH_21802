import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes, images} from '../../data/testData';
import {inputValues5} from "../../helpers/methods";

describe('Story testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Image resolution', function () {

        it('TC-200a  The maximum size of square image is 200x200px -width" ', function () {
            inputValues5(name.default, gender.she, age.default, storyTypes.comedy, images.square);
            let width = $(sel.imageReady).getSize('width');
            let resWidth = width <= exp.maxSize;
            expect(resWidth).toEqual(true);
        });

        it('TC-200b  The maximum size of square image is 200x200px -height" ', function () {
            inputValues5(name.default, gender.she, age.default, storyTypes.comedy, images.square);
            let height = $(sel.imageReady).getSize('height');
            let resHeight = height <= exp.maxSize;
            expect(resHeight).toEqual(true);
        });

        it.skip('TC-201 (BUG) Height of vertical image is up to 200 px ', function () {
            inputValues5(name.default, gender.she, age.default, storyTypes.comedy, images.jpeg2);
            let height = $(sel.imageReady).getSize('height');
            let resHeight = height <= exp.maxSize;
            expect(resHeight).toEqual(true);
        });

        it('TC-207 Width of horizontal image is up to 200 px. ', function () {
            inputValues5(name.default, gender.she, age.default, storyTypes.comedy, images["png3.9"]);
            let width = $(sel.imageReady).getSize('width');
            let resWidth = width <= exp.maxSize;
            expect(resWidth).toEqual(true);
        });
    });
});

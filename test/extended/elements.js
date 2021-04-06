import sel from '../../data/selectors';
import {name, gender, age, storyTypes, story} from '../../data/testData';
import {inputValues4Submit} from "../../helpers/methods";

describe('Story elements testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Story elements exist', function () {

        it('TC-159 Story Header "My little Hero" is appeared ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            const header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-160 Story Title "Two Cats And A LadyBug007" is appeared ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            let title = $(sel.storyTitle).isDisplayed();
            expect(title).toEqual(true);
        });

        it('TC-161 Story text is appeared ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            let text = $$(sel.storyText)[story.storyBody].isDisplayed();
            expect(text).toEqual(true);
        });

        it('TC-162 Moral text is appeared ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            let text = $$(sel.storyText)[story.moral].isDisplayed();
            expect(text).toEqual(true);
        });
    });
});

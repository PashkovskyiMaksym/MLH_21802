import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes, story} from '../../data/testData';
import {inputValues4Submit} from "../../helpers/methods";

describe('Story testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Story elements are correct', function () {

        it('TC-175 Story Title matches "Two Cats And A LadyBug007" ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            let title = $(sel.storyTitle).getText();
            expect(title).toEqual(exp.storyTitle);
        });

        it('TC-208 Story Header = "My Little Hero" ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            const header = $(sel.header).getText();
            expect(header).toEqual(exp.header);
        });

        it('TC-182 Story text matches the selected story type "Comedy" ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            let text = $$(sel.storyText)[story.storyBody].getText();
            expect(text).toEqual(exp.text);
        });

        it('TC-192 Moral text matches the selected story type "Comedy" ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            let text = $$(sel.storyText)[story.moral].getText();
            expect(text).toEqual(exp.moral);
        });
    });
});

import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes, story} from '../../data/testData';
import {inputValues4Submit, textReformat} from "../../helpers/methods";

describe('Story testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-192 Moral text matches the selected story type "Comedy" ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            let text = $$(sel.storyText)[story.moral].getText();
            expect(text).toEqual(exp.moral);
        });
    });

    describe('Story testing - name and age', function () {

        it('TC-183 Name at the text matches a name "LadyBug007" ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            const result = textReformat(exp.name);
            expect(result).toEqual(true);
        });

        it.skip('TC-184 (BUG) entering 1 in age field leads to "year" in the text ', function () {
            inputValues4Submit(name.default, gender.she, age.oneDigit, storyTypes.comedy);
            const result = textReformat(exp.year);
            expect(result).toEqual(true);
        });

        it('TC-185 Age in the text matches entered age ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            const result = textReformat(exp.age);
            expect(result).toEqual(true);
        });

        it('TC-203 entering default age in age field leads to "years" in the text ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            const result = textReformat(exp.years);
            expect(result).toEqual(true);
        });
    });
});

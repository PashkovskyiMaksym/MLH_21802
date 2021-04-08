import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes, story, index} from '../../data/testData';
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

    describe('Story testing - gender', function () {

        it('TC-186 gender in the text matches selected gender "she" ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            const result = textReformat(exp.she)[index.match];
            expect(result).toEqual(true);
        });

        it('TC-186a Pronoun\'s quantity in the text matches = 2  ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            const result = textReformat(exp.she)[index.quantity];
            expect(result).toEqual(exp.quantityPronoun);
        });

        it('TC-187 gender in the text matches selected gender "he" ', function () {
            inputValues4Submit(name.default, gender.he, age.default, storyTypes.comedy);
            const result = textReformat(exp.he);
            expect(result).toEqual(true);
        });

        it('TC-188 gender in the text matches selected gender "it" ', function () {
            inputValues4Submit(name.default, gender.it, age.default, storyTypes.comedy);
            const result = textReformat(exp.it);
            expect(result).toEqual(true);
        });

        it('TC-189 "he" matches to "his" in the text ', function () {
            inputValues4Submit(name.default, gender.he, age.default, storyTypes.comedy);
            const result = textReformat(exp.his);
            expect(result).toEqual(true);
        });

        it('TC-190 "she" matches to "her" in the text ', function () {
            inputValues4Submit(name.default, gender.she, age.default, storyTypes.comedy);
            const result = textReformat(exp.her);
            expect(result).toEqual(true);
        });

        it('TC-191 "it" matches to "its" in the text ', function () {
            inputValues4Submit(name.default, gender.it, age.default, storyTypes.comedy);
            const result = textReformat(exp.its);
            expect(result).toEqual(true);
        });
    });
});

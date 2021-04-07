import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes} from '../../data/testData';
import { inputValues4, nameAccepting} from "../../helpers/methods";

describe('Name field testing', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-028 Name Field placeholder  = "Hero\'s name" ', function () {
            let placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.namePlaceholder);
        });
    });

    describe('Positive testing', function () {

        it('TC-029 Name Field accepts 1 symbol" ', function () {
            const names = nameAccepting(name.oneSymbol);
            expect(names).toEqual(false);
        });

        it('TC-030 Name Field accepts 70 symbols" ', function () {
            const names = nameAccepting(name.symbols70);
            expect(names).toEqual(false);
        });

        it('TC-031 Name Field accepts letters" ', function () {
            const names = nameAccepting(name.letters);
            expect(names).toEqual(false);
        });

        it('TC-032 Name Field accepts  letters (lower case/upper case) ', function () {
            const names = nameAccepting(name.lowUpCase);
            expect(names).toEqual(false);
        });

        it('TC-033 Name Field accepts digits ', function () {
            const names = nameAccepting(name.digits);
            expect(names).toEqual(false);
        });

        it('TC-034 Name Field accepts special symbols" ', function () {
            const names = nameAccepting(name.specSymbol);
            expect(names).toEqual(false);
        });

        it('TC-035 Name Field accepts letters with space" ', function () {
            const names = nameAccepting(name.lettersSpace);
            expect(names).toEqual(false);
        });

        it('TC-036 Name Field accepts russian letters" ', function () {
            const names = nameAccepting(name.rusLetters);
            expect(names).toEqual(false);
        });
    });
});

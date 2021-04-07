import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes} from '../../data/testData';
import {clearInput, inputValues4, nameAccepting} from "../../helpers/methods";

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

    describe('Negative testing', function () {

        it('TC-039a Message  appears after entering and  then deleting the input ', function () {
            $(sel.name).setValue(name.default);
            let message = clearInput(sel.name);
            expect(message).toEqual(true);
        });

        it('TC-039b Message appears  after entering and  then deleting input, has text "Required" ', function () {
            $(sel.name).setValue(name.default);
            clearInput(sel.name);
            let text = $(sel.errorMessage).getText();
            expect(text).toEqual(exp.errorMessageRequired);
        });

        it('TC-040a Name Field doesn\'t accept  71 symbols" ', function () {
            $(sel.name).setValue(name.symbol71);
            const names = $(sel.errorMessage).waitForDisplayed();
            expect(names).toEqual(true);
        });

        it('TC-040b Name Field doesn\'t accept  71 symbols -> "70 symbols max" message ', function () {
            $(sel.name).setValue(name.symbol71);
            $(sel.errorMessage).waitForDisplayed();
            let text = $(sel.errorMessage).getText();
            expect(text).toEqual(exp.errorMessageName);
        });

        it('TC-041 All fields are filled in except the Name field => Submit button is disabled', function () {
            inputValues4(name.emptyField, gender.she, age.default, storyTypes.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });
    });
});


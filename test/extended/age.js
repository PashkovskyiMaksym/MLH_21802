import sel from "../../data/selectors";
import exp from '../../data/expected.json';
import {age, name, gender, storyTypes} from "../../data/testData";
import {inputValues4, clearInput} from '../../helpers/methods';


describe('Age suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-055 Age Field placeholder  = "Hero\'s age"', function () {
            let placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.agePlaceholder);
        });
    });

    describe('Positive tests', function () {

        it('TC-056 Age field accept  "1" ', function () {
            $(sel.age).setValue(age.oneDigit);
            let fieldAge = $(sel.errorMessage).isDisplayed();
            expect(fieldAge).toEqual(false);
        });

        it('TC-057 Age field accept  12 digits', function () {
            $(sel.age).setValue(age.digits12);
            let ageDigits = $(sel.errorMessage).isDisplayed();
            expect(ageDigits).toEqual(false);
        });

        it('TC-058 Age field accept "1234567890"', function () {
            $(sel.age).setValue(age.default);
            let ageDigits = $(sel.errorMessage).isDisplayed();
            expect(ageDigits).toEqual(false);
        });

        it('TC-059 Age field accept space ', function () {
            $(sel.age).setValue(age.spaceIsTrimmed);
            let ageSpace = $(sel.errorMessage).isDisplayed();
            expect(ageSpace).toEqual(false);
        });

        it('TC-060 Age field accept 0 on the left ', function () {
            $(sel.age).setValue(age.zeroIsTrimmed);
            $(sel.name).click();
            let left = $(sel.age).getValue();
            expect(left).toEqual(exp.trimmed0);
        });

        it('TC-061 Age field accept spin up ', function () {
            $(sel.spinUpAge).click();
            let PgUp = $(sel.age).getValue();
            expect(PgUp).toEqual(exp.spinUp1);
        });

        it('TC-062 Age field accept 1 -> spin up ', function () {
            $(sel.age).setValue(age.oneDigit);
            $(sel.spinUpAge).click();
            let ageUp = $(sel.age).getValue();
            expect(ageUp).toEqual(exp.spinUp2);
        });

        it('TC-063 Age field accept 2 -> spin down ', function () {
            $(sel.age).setValue(age.spinDown);
            $(sel.spinDownAge).click();
            let ageDown = $(sel.age).getValue();
            expect(ageDown).toEqual(exp.spinDown4);
        });
    });
    describe('Negative tests', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(() => {
            browser.refresh();
        });

        it.skip('TC-064 (bug) Age field doesn\'t accept 0 ', function () {
            $(sel.age).setValue(age.zeroInput);
            let age0 = $(sel.errorMessage);
            expect(age0).toEqual(true);
        });

        it('TC-065 Age field doesn\'t accept 13digits ', function () {
            $(sel.age).setValue(age.digits13);
            let message = $(sel.errorMessage).waitForDisplayed();
            expect(message).toEqual(true);
        });

        it('TC-066 Age field doesn\'t accept letters', function () {
            $(sel.age).setValue(age.letters);
            let abc = $(sel.errorMessage).waitForDisplayed();
            expect(abc).toEqual(true);
        });

        it('TC-067 Age field doesn\'t accept symbols ', function () {
            $(sel.age).setValue(age.symbols);
            let symbolError = $(sel.errorMessage).waitForDisplayed();
            expect(symbolError).toEqual(true);
        });

        it('TC-068 Age field doesn\'t accept negative digits', function () {
            $(sel.age).setValue(age.negative);
            $(sel.errorMessage).waitForDisplayed();
            let ageNegative = $(sel.errorMessage).getText();
            expect(ageNegative).toEqual(exp.errorMessageInvalid);
        })

        it('TC-069 Age field doesn\'t accept float digits ', function () {
            $(sel.age).setValue(age.float);
            let errorMessage = $(sel.errorMessage).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-071 Age field doesn\'t accept spin down from 0 ', function () {
            $(sel.spinDownAge).click();
            let spinDown = $(sel.errorMessage).waitForDisplayed();
            expect(spinDown).toEqual(true);
        });

        it('TC-202a Message is appeared after entering ant then deleting input ', function () {
            $(sel.age).setValue(age.spinDown);
            let message = clearInput(sel.age);
            expect(message).toEqual(true);
        });

        it('TC-202b Message which is appeared after entering ant then deleting input, has text "Required" ', function () {
            $(sel.age).setValue(age.spinDown);
            clearInput(sel.age);
            let text = $(sel.errorMessage).getText();
            expect(text).toEqual(exp.errorMessageRequired);
        });

        it('TC-206 Not entered a value in the age field', function () {
            inputValues4(name.default, gender.she, age.empty, storyTypes.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });
    });

});

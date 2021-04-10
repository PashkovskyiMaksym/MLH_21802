import sel from "../../data/selectors";
import exp from '../../data/expected.json';
import {age} from "../../data/testData";

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
 });

import sel from '../../data/selectors';
import {gender} from '../../data/testData';
import {genderRun} from "../../helpers/methods";

describe('Gender field testing', function () {

    before('Open App', function() {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Positive testing', function () {

        it('TC-042. Radio button "he" is selected after clicking on it', function () {
            let buttonHe = genderRun(gender.he, sel.radioBtnHe);
            expect(buttonHe).toEqual(true);
        });

        it('TC-043. Radio button "she" is selected after clicking on it', function () {
            let buttonShe = genderRun(gender.she, sel.radioBtnShe);
            expect(buttonShe).toEqual(true);
        });

        it('TC-044. Radio button "it" is selected after clicking on it', function () {
            let buttonIt = genderRun(gender.it, sel.radioBtnIt);
            expect(buttonIt).toEqual(true);
        });

        it('TC-045a. User can choose only one button ("he") at the time, "she" is not selected', function () {
            const buttonShe = genderRun(gender.he, sel.radioBtnShe);
            expect(buttonShe).toEqual(false);
        });

        it('TC-045b. User can choose only one button ("he") at the time, "it" is not selected', function () {
            const buttonIt = genderRun(gender.he, sel.radioBtnIt);
            expect(buttonIt).toEqual(false);
        });

        it('TC-046a. User can choose only one button ("she") at the time, "he" is not selected', function () {
            const buttonHe = genderRun(gender.she, sel.radioBtnHe);
            expect(buttonHe).toEqual(false);
        });

        it('TC-046b. User can choose only one button ("she") at the time, "it" is not selected', function () {
            const buttonIt = genderRun(gender.she, sel.radioBtnIt);
            expect(buttonIt).toEqual(false);
        });

        it('TC-047a. User can choose only one button ("it") at the time, "he" is not selected', function () {
            const buttonHe = genderRun(gender.it, sel.radioBtnHe);
            expect(buttonHe).toEqual(false);
        });

        it('TC-047b. User can choose only one button ("it") at the time, "she" is not selected', function () {
            const buttonShe = genderRun(gender.it, sel.radioBtnShe);
            expect(buttonShe).toEqual(false);
        });

        it('TC-048. User can change the choice by clicking on another button ( "it" -> "she")', function () {
            $$(sel.radioButtons)[gender.it].click();
            let buttonShe = genderRun(gender.she, sel.radioBtnShe);
            expect(buttonShe).toEqual(true);
        });

        it('TC-049. User can change the choice by clicking on another button ( "it" -> "he")', function () {
            $$(sel.radioButtons)[gender.it].click();
            let buttonHe = genderRun(gender.he, sel.radioBtnHe);
            expect(buttonHe).toEqual(true);
        });

        it('TC-050. User can change the choice by clicking on another button ( "he" -> "she")', function () {
            $$(sel.radioButtons)[gender.he].click();
            let buttonShe = genderRun(gender.she, sel.radioBtnShe);
            expect(buttonShe).toEqual(true);
        });

        it('TC-051. User can change the choice by clicking on another button ( "he" -> "it")', function () {
            $$(sel.radioButtons)[gender.he].click();
            let buttonIt = genderRun(gender.it, sel.radioBtnIt);
            expect(buttonIt).toEqual(true);
        });

        it('TC-052. User can change the choice by clicking on another button ( "she" -> "it")', function () {
            $$(sel.radioButtons)[gender.she].click();
            let buttonIt = genderRun(gender.it, sel.radioBtnIt);
            expect(buttonIt).toEqual(true);
        });

        it('TC-053. User can change the choice by clicking on another button ( "she" -> "he")', function () {
            $$(sel.radioButtons)[gender.she].click();
            let buttonHe = genderRun(gender.he, sel.radioBtnHe);
            expect(buttonHe).toEqual(true);
        });
    });
});

import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {storyTypes, age, gender, name} from '../../data/testData';
import {storyTitle} from'../../helpers/methods';

describe('Story Type', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC - 072 Story Type placeholder = "Type of the story" ', function () {
            let placeholder = $(sel.story).getText();
            expect(placeholder).toEqual(exp.storyTypePlaceholder);
        });
    });

    describe('Positive cases', function () {

        it('TC - 073 The Story Type field is a dropdown and the expanded list exists ', function () {
            $(sel.story).click();
            let dropDownMenu = $(sel.storyDropdown).isDisplayed();
            expect(dropDownMenu).toEqual(true);
        });

        it('TC - 075 Label "Overcoming the Monster" is correct ', function () {
            let firstStoryType = storyTitle(storyTypes.overcomingTheMonster);
            expect(firstStoryType).toEqual(exp.storyType1);

        });

        it('TC - 076 Label "Rebirth"  is correct', function () {
            let secondStoryType = storyTitle(storyTypes.rebirth);
            expect(secondStoryType).toEqual(exp.storyType2);
        });

        it('TC - 077 Label "Quest"  is correct', function () {
            let thirdStoryType = storyTitle(storyTypes.quest);
            expect(thirdStoryType).toEqual(exp.storyType3);
        });

        it('TC - 078 Label "Journey and Return"  is correct', function () {
            let forthStoryType = storyTitle(storyTypes.journeyAndReturn);
            expect(forthStoryType).toEqual(exp.storyType4);
        });

        it('TC - 079 Label "Rags and Riches"  is correct', function () {
            let fifthStoryType = storyTitle(storyTypes.ragsAndRiches);
            expect(fifthStoryType).toEqual(exp.storyType5);
        });

        it('TC - 080 Label "Tragedy"  is correct', function () {
            let sixthStoryType = storyTitle(storyTypes.tragedy);
            expect(sixthStoryType).toEqual(exp.storyType6);
        });

        it('TC - 081 Label "Comedy" is correct', function () {
            let seventhStoryType = storyTitle(storyTypes.comedy);
            expect(seventhStoryType).toEqual(exp.storyType7);
        });
    });

    describe('Negative test', function () {

        it('TC-104 Story Type field is required ', function () {
            $(sel.name).setValue(name.default);
            $$(sel.radioButtons)[gender.she].click();
            $(sel.age).setValue(age.default);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });
    });
});

import exp from '../../data/expected.json';
import {story, storyTypes} from "../../data/testData";
import {fillingTheStory, collapsedDropdown} from '../../helpers/methods';

describe('Story type', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Choosing only one story type', function () {

        it('TC - 082 Choose only one story type at a time "Overcoming the Monster" ', function () {
            let chosenStory = fillingTheStory(storyTypes.overcomingTheMonster);
            expect(chosenStory).toEqual(exp.overcomingTheMonsterLabel);
        });

        it('TC - 083 The dropdown is in a collapsed way', function () {
            let dropDown = collapsedDropdown(storyTypes.overcomingTheMonster);
            expect(dropDown).toEqual(false);
        });

        it('TC - 084 Choose only one story type at a time "Rebirth" ', function () {
            let chosenStory = fillingTheStory(storyTypes.rebirth);
            expect(chosenStory).toEqual(exp.rebirthLabel);
        });

        it('TC - 085 The dropdown is in a collapsed way', function () {
            let dropDown = collapsedDropdown(storyTypes.rebirth);
            expect(dropDown).toEqual(false);
        });

        it('TC - 086 Choose only one story type at a time "Quest" ', function () {
            let chosenStory = fillingTheStory(storyTypes.quest);
            expect(chosenStory).toEqual(exp.questLabel);
        });

        it('TC - 087 The dropdown is in a collapsed way', function () {
            let dropDown = collapsedDropdown(storyTypes.quest);
            expect(dropDown).toEqual(false);
        });

        it('TC - 088 Choose only one story type at a time "Journey and Return" ', function () {
            let chosenStory = fillingTheStory(storyTypes.journeyAndReturn);
            expect(chosenStory).toEqual(exp.journeyAndReturnLabel);
        });

        it('TC - 089 The dropdown is in a collapsed way', function () {
            let dropDown = collapsedDropdown(storyTypes.journeyAndReturn);
            expect(dropDown).toEqual(false);
        });

        it('TC - 090 Choose only one story type at a time "Rags and Riches" ', function () {
            let chosenStory = fillingTheStory(storyTypes.ragsAndRiches);
            expect(chosenStory).toEqual(exp.ragsAndRichesLabel);
        });

        it('TC - 091 The dropdown is in a collapsed way', function () {
            let dropDown = collapsedDropdown(storyTypes.ragsAndRiches);
            expect(dropDown).toEqual(false);
        });

        it('TC - 092 Choose only one story type at a time "Tragedy" ', function () {
            let chosenStory = fillingTheStory(storyTypes.tragedy);
            expect(chosenStory).toEqual(exp.tragedyLabel);
        });

        it('TC - 093 The dropdown is in a collapsed way', function () {
            let dropDown = collapsedDropdown(storyTypes.tragedy);
            expect(dropDown).toEqual(false);
        });

        it('TC - 094 Choose only one story type at a time  "Comedy" ', function () {
            let chosenStory = fillingTheStory(storyTypes.comedy);
            expect(chosenStory).toEqual(exp.comedyLabel);
        });

        it('TC - 095 The dropdown is in a collapsed way', function () {
            let dropDown = collapsedDropdown(storyTypes.comedy);
            expect(dropDown).toEqual(false);
        });
    });
});

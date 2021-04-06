import sel from '../data/selectors';

const inputValues4 = (name, gender, age, story) => {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age)
    $(sel.story).click();
    $$(sel.storyList)[story].click();
}

function inputValues4Submit(name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyList)[story].click();
    $(sel.submit).click();
}

function genderRun(gender, button){
    $$(sel.radioButtons)[gender].click();
    return  $(button).isSelected();
}

function fillingTheStory(storyT){
    $(sel.story).click();
    $$(sel.storyList)[storyT].click();
    return $(sel.story).getText();
}

function collapsedDropdown (storyT){
    $(sel.story).click();
    $$(sel.storyList)[storyT].click();
    return $(sel.dropDownMenu).isDisplayed();
}

function fillingTheStoryTwice(story1, story2) {
    $(sel.story).click();
    $$(sel.storyList)[story1].click();
    $(sel.story).click();
    $$(sel.storyList)[story2].click();
    return $(sel.story).getText();
}

module.exports = {inputValues4, inputValues4Submit, genderRun, fillingTheStory, collapsedDropdown, fillingTheStoryTwice};

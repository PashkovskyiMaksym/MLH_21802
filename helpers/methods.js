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

module.exports = {inputValues4, inputValues4Submit, genderRun, fillingTheStory, collapsedDropdown};

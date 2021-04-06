import sel from '../data/selectors';

const inputValues4 = (name, gender, age, story) => {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age)
    $(sel.storyType).click();
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

module.exports = {inputValues4, inputValues4Submit, genderRun};

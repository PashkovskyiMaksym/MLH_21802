import sel from '../data/selectors';
import {caseType, story} from "../data/testData";
import exp from "../data/expected.json";
const path = require('path');

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

function uploadingImage(image, element, type) {
    const inputDiv = $(sel.imageUpload);
    const filePath = path.join(__dirname, image);
    browser.execute(function () {
        document.getElementsByTagName("input")[6].style.display = 'block';
    });
    inputDiv.waitForDisplayed();
    inputDiv.setValue(filePath);
    if(type === caseType.positive) {
        $(sel.imagePreview).waitForDisplayed();
        return $(element).isDisplayed();
    }
    if(type === caseType.negative){
        $(sel.imageError).waitForDisplayed();
        return $(element).isDisplayed();
    }
}
function inputValues5(name, gender, age, story, image){
    inputValues4(name, gender, age, story);
    uploadingImage(image);
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

function refreshChecking(){
    let names = $(sel.name).getText();
    let ages = $(sel.age).getText();
    let genders= $(sel.gender).isSelected();
    let storyType = $(sel.story).isSelected();
    let result;
    if(names === '' && ages === '' && storyType === false && genders === false)
        result = true;
    return result;
}

function nameAccepting(name){
    $(sel.name).setValue(name);
    return $(sel.errorMessage).isDisplayed();
}

function clearInput(input) {
    let el = $(input).getValue();
    for (let i = 0; i < el.length; i++){
        $(input).keys(['Backspace']);
    }
    return $(sel.errorMessage).waitForDisplayed();
}

function textReformat(element){
    let result;
    let text = $$(sel.storyText)[story.storyBody].getText();
    text = text.replace(/[,\r\n]+/g," ");
    text = text.split(' ');
    if (element === exp.she){
        let match = text.includes(element);
        let quantity = text.filter(el => el === exp.she).length;
        return [match, quantity];
    }
    else result = text.includes(element);
    return result;
}

function storyTitle(type){
    $(sel.story).click();
    return $$(sel.storyList)[type].getAttribute('title');
}

module.exports = {inputValues4, inputValues4Submit, genderRun, fillingTheStory, collapsedDropdown, fillingTheStoryTwice, uploadingImage, inputValues5, refreshChecking, nameAccepting, clearInput, textReformat, storyTitle};

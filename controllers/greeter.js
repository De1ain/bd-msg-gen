import Appeal from '../model/appeal.js';
import PersonType from '../model/person-type.js';
import Wish from '../model/wish.js';
import Be from '../model/be.js';
import And from '../model/and.js';
import EndPunctuation from '../model/end-punctuation.js';

const getIndex = (req, res, next) => {
    res.status(200).json('Welcome to Birthday Greeting Message Generator!');
}

const getGreeting = async (req, res, next) => {
    const person = req.params.person;

    const greeting = await generateGreetingMsg(person);

    res.status(200).json(greeting);
}

const generateGreetingMsg = async (person) => {
    let rand;
    let randomPerson;

    const appealItems = await Appeal.countDocuments();
    rand = Math.floor(Math.random() * appealItems);
    let randomAppeal = (await Appeal.findOne().skip(rand)).text;
    randomAppeal = randomAppeal.charAt(0).toUpperCase() + randomAppeal.slice(1);

    if (!person) {
        const personItems = await PersonType.countDocuments();
        rand = Math.floor(Math.random() * personItems);
        randomPerson = (await PersonType.findOne().skip(rand)).text;
    }

    const wishItems = await Wish.countDocuments();
    rand = Math.floor(Math.random() * wishItems);
    const randomWish = (await Wish.findOne().skip(rand)).text;

    const beItems = await Be.countDocuments();
    rand = Math.floor(Math.random() * beItems);
    const randomBe = (await Be.findOne().skip(rand)).text;

    const andItems = await And.countDocuments();
    rand = Math.floor(Math.random() * andItems);
    const randomAnd = (await And.findOne().skip(rand)).text;

    const endPuncItems = await EndPunctuation.countDocuments();
    rand = Math.floor(Math.random() * endPuncItems);
    const randomEndPunc = (await EndPunctuation.findOne().skip(rand)).text;

    const greeting = `${randomAppeal} ${person ? person : randomPerson}, I wish you ${randomWish}, be ${randomBe} and ${randomAnd}${randomEndPunc}`;
    console.log('🚀 ~ file: greeter.js ~ line 67 ~ generateGreetingMsg ~ greeting', greeting);

    return greeting;
}

export {
    getIndex,
    getGreeting
}
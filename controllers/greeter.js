import db from '../DB/db.js';

const getIndex = (req, res, next) => {
    res.status(200).json('Welcome to Birthday Greeting Message Generator!!');
}

const getGreeting = (req, res, next) => {
    const greeting = 'This is a dummy message';

    //TODO: Generate msg by fetching random msgs from various categories in DB and building a greeting message

    res.status(200).json(greeting);
}

const getGreetingPerson = (req, res, next) => {
    const person = req.params.person;

    const greeting = generateGreetingMsg(person);

    res.status(200).json(greeting);
}

const generateGreetingMsg = (person) => {
    const appeal = db.appeal[0];
    const wish = db.wish[Math.floor(Math.random() * db.wish.length)]
    const be = db.be[Math.floor(Math.random() * db.be.length)]
    const and = db.and[Math.floor(Math.random() * db.and.length)]

    const greeting = `${appeal} ${person}, I wish you ${wish}, be ${be} and ${and}`;

    return greeting;
}

export {
    getIndex,
    getGreeting,
    getGreetingPerson
}
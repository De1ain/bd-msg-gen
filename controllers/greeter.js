import db from '../DB/db.js';

const getIndex = (req, res, next) => {
    res.json('Welcome to Birthday Greeting Message Generator!!');
}

const getGreeting = (req, res, next) => {
    const greeting = 'This is a dummy message';

    //TODO: Generate msg by fetching random msgs from various categories in DB and building a greeting message

    res.json(greeting);
}

const getGreetingPerson = (req, res, next) => {
    const person = req.params.person;
    const greeting = 'This is a dummy message for certain person - ' + person;

    //TODO: Generate msg by fetching random msgs from various categories in DB and building a greeting message

    res.json(greeting);
}

export {
    getIndex,
    getGreeting,
    getGreetingPerson
}
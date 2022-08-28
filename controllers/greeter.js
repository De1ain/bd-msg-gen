const getIndex = (req, res, next) => {
    res.json('Welcome to Birthday Greeting Message Generator!!');
}

const getGreeting = (req, res, next) => {
    const greeting = 'This is a dummy message';

    //TODO: Generate msg by fetching random msgs from various categories in DB and building a greeting message

    res.json(greeting);
}

export {
    getIndex,
    getGreeting
}
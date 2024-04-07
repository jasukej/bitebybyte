const { CohereClient } = require('cohere-ai');

async function main() {
     const cohere = new CohereClient({
        token: "3XsYYcigfxequETayJLXQfQp7YejwnGrxtkBTXst",
    });

    const response = await cohere.chat({
        message: "Please tell me how to eat healthy in one sentence."
    });
    console.log(response);
}

main();

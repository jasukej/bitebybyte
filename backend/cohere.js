const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
    token: "3XsYYcigfxequETayJLXQfQp7YejwnGrxtkBTXst",
});

async function getResponse(mealType_str, mealContent_str, moodTags_str, reflection_str) {
    const msg = "Set-up for the scenario: I am struggling with my eating habits. Perhaps I have"
        + " or have had an eating disorder that I wish to recover from. You are to be a supportive"
        + " voice in my progress. We are having a conversation, you are to play the role of a"
        + " nutritionist and counsellor.\n\n"
        + "I tell you that I ate " + mealContent_str + " for " +  mealType_str + " and "
        + reflection_str + "\nMy mood right now can be described as " + moodTags_str
        + ". I would like you to give me warm feedback and accurate nutritional advice or suggestions"
        + " in a very brief paragraph, cleanly spaced out with linebreaks at APPROPRIATE locations to"
        + " enhance readability. Do not reply in one big paragraph. Do not reiterate or reference anything"
        + " mentioned in the scenario set-up, and do not ask any follow-up questions. Be specific, gentle,"
        + " and warm when giving nutritional advice. Do not give advice that is not nutrition-related."
        + " In your response, do not even hint at me struggling with eating. Do not make any assumptions"
        + " about my past history with food. KEEP YOUR RESPONSE BRIEF.\n\n"
        + " NEVER use these words: \"body\", \"listen\", \"recovery\", \"eating disorder\", \"patient\", \"journey\"";

    const response = await cohere.chat({
        message: msg
    });
    console.log(response);

    return response.text;
}

module.exports = { getResponse };
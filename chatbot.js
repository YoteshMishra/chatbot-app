const dialogflow = require('dialogflow').v2beta1;
const config = require('../config/devkey');

// Ensure these values are correctly defined in your config file
const projectId = config.googleProjectId;
const sessionId = config.dialogFlowSessionID;

const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
};

const sessionClient = new dialogflow.SessionsClient({ projectId, credentials });
const knowledgeBaseId = "MTM1OTM3ODE3NzM0Mzg4MTIxNw";
const knowledgeBasePath =
  'projects/' + projectId + '/knowledgeBases/' + knowledgeBaseId + '';


const textQuery = async (userText, userId) => {
    const sessionPath = sessionClient.sessionPath(projectId, sessionId + userId);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: userText,
                languageCode: config.dialogFlowSessionLanguageCode
            }
        },
        queryParams: {
            knowledgeBaseNames: [knowledgeBasePath],
          },
        
    };
    
    try {
        const [response] = await sessionClient.detectIntent(request);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
};

module.exports = {
    textQuery
};

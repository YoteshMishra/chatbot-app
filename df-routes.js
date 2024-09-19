const chatbot = require('../chatbot/chatbot')
module.exports = app =>{


    app.get('/text_query', async(req, res) => {
        console.log(req.body);
        const {text, userId} = req.body;
        try {
            const resultQuery = await chatbot.textQuery(text, userId);
            console.log('Dialogflow Response:', resultQuery);
            
            // Access the `intent` through `queryResult`
            if (resultQuery && resultQuery.queryResult) {
                const {intent, queryText, fulfillmentText} = resultQuery.queryResult;
                const resObj = {
                    intentName: intent.displayName,
                    userQuery: queryText,
                    fulfillmentText: fulfillmentText
                };
                res.send(resObj);
            } else {
                console.error('Unexpected resultQuery format:', resultQuery);
                res.status(500).send("Unexpected response format from Dialogflow");
            }
        } catch (error) {
            console.error('Error in textQuery:', error);
            res.status(500).send("Internal Server Error");
        }
    });
    

    app.post('/text_query', async(req, res) => {
        console.log(req.body);
        const {text, userId} = req.body;
        try {
            const resultQuery = await chatbot.textQuery(text, userId);
            console.log('Dialogflow Response:', resultQuery);
            
            // Access the `intent` through `queryResult`
            if (resultQuery && resultQuery.queryResult) {
                const {intent, queryText, fulfillmentText} = resultQuery.queryResult;
                const resObj = {
                    intentName: intent.displayName,
                    userQuery: queryText,
                    fulfillmentText: fulfillmentText
                };
                res.send(resObj);
            } else {
                console.error('Unexpected resultQuery format:', resultQuery);
                res.status(500).send("Unexpected response format from Dialogflow");
            }
        } catch (error) {
            console.error('Error in textQuery:', error);
            res.status(500).send("Internal Server Error");
        }
    });
    

    // app.post('/text_query', async(req, res) => {
    //     console.log('Request Body:', req.body);
    //     const {text, userId} = req.body;
    //     if (!text || !userId) {
    //         return res.status(400).send("Missing 'text' or 'userId' in request body");
    //     }
    //     try {
    //         const resultQuery = await chatbot.textQuery(text, userId);
    //         console.log('Dialogflow Response:', resultQuery);
    //         res.send("Text Query");
    //     } catch (error) {
    //         console.error('Error in textQuery:', error);
    //         res.status(500).send("Internal Server Error");
    //     }
    // });
    
    
    //  app.post('/event_query', (req, res)=>{
    //     console.log(req);
    //     res.send("Text Query")
    // })
}
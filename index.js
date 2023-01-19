// run `node index.js` in the terminal
const openai = require('openai');
      openai.apiKey = "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";

      const generateTweet = async () => {
        const response = await openai.Completion.create({
          prompt: 'Write a tweet:',
          model: 'text-davinci-002',
          temperature: 0.5,
          max_tokens: 280
        });

        return response.choices[0].text;
      }

      document.getElementById("generate-tweet-button").addEventListener("click", function(){
        document.getElementById("generated-tweet").value = generateTweet();
      });
      

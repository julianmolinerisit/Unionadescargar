import {Configuration, OpenAIApi} from 'openai';
import config from './config.js';

const configuration = new Configuration({
    apiKey: config.API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  
export async function makeRequest(prompt){
  const completionParams = {
    model: config.MODEL,
    n: config.ATTEMPS,
    prompt,
    max_tokens: 170, // aumentar este valor para obtener respuestas más largas

  }  

  try {
    const completion = await openai.createCompletion(completionParams);
    return completion.data.choices[0].text;
  } catch (error) {
    throw new Error(`Error al realizar la solicitud de completado de texto: ${error.message}`);
  }      
}

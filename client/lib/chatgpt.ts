import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apikey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default openai;

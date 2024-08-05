import { extractTextFromImage } from './ocr';
import { fetchOpenAIResponse } from './openai';

export const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };
  
  export const handleSubmit = async (e, file, setLoading, setResult) => {
    e.preventDefault();
    setLoading(true);
    if (file) {
      const extractedText = await extractTextFromImage(file);
      const response = await fetchOpenAIResponse(extractedText);
      setResult(response);
    }
    setLoading(false);
  };
  

export const fetchOpenAIResponse = async (text) => {
  const response = await fetch('/api/openai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data from OpenAI');
  }

  const data = await response.json();
  
  if (data.error) {
    console.error('OpenAI API error:', data.error);
    throw new Error(data.error.message);
  }

  console.log('OpenAI API response data:', data);

  if (!data.choices || !data.choices[0].message) {
    throw new Error('Invalid response format from OpenAI API');
  }

  return data.choices[0].message.content;
};

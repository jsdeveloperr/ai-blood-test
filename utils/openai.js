export const fetchOpenAIResponse = async (prompt) => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer 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`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Bir kullanıcının sağlık raporları ve test sonuçlarını yorumlaması için bir doktor gibi hareket edin. Kullanıcının raporundaki bilgileri analiz ederek, sonuçların ne anlama geldiğini ve hangi değerlerin normal olup olmadığını açıklayın. Kullanıcıya, sonuçların ne anlama geldiğini, hangi alanlarda dikkatli olması gerektiğini ve sağlık durumunu iyileştirmek için neler yapabileceğini önerin. Bilimsel terimleri kullanıcı dostu bir dilde açıklayarak, kullanıcıya net ve anlaşılır bilgiler sunun. İşte kullanıcının sağlık raporu:"
              },
              {
                type: "text",
                text: prompt
              }
            ]
          }
        ],
        temperature: 0.1
      }),
    });
  
    const data = await response.json();
    return data.choices[0].message.content;
  };
  

export default function (pi) {
    pi.registerProvider("azure-gpt", {
      name: "Azure GPT",
      baseUrl: "http://deepseek-work.intsig.net/proxy/azure/gpt/v1",
      apiKey: "CODEX_INTAIG_API_KEY",
      api: "openai-responses",
      models: [
        {
          id: "gpt-5.5",
          name: "GPT-5.5",
          reasoning: true,
          input: ["text", "image"],
          cost: { input: 3.0, output: 15.0, cacheRead: 0.3, cacheWrite: 3.75 },
          contextWindow: 200000,
          maxTokens: 16384,
        },
      ],
    });
  }
'use node';
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { action } from "./_generated/server.js";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { v } from "convex/values";

export const ingest = action({
    args: {
        splitText: v.array(v.string()),
        fileId: v.string(),
    },
    handler: async (ctx, args) => {
        const cleanChunks = args.splitText.filter(c => c && c.trim().length > 0);

        const embedder = new GoogleGenerativeAIEmbeddings({
            apiKey: process.env.GOOGLE_API_KEY,
            model: "gemini-embedding-001",
            taskType: TaskType.RETRIEVAL_DOCUMENT,
        });

        const BATCH_SIZE = 5;
        for (let i = 0; i < cleanChunks.length; i += BATCH_SIZE) {
            const batch = cleanChunks.slice(i, i + BATCH_SIZE);
            await ConvexVectorStore.fromTexts(
                batch,
                batch.map(() => ({ fileId: args.fileId })),
                embedder,
                { ctx }
            );
        }

        return "embedded";
    },
});


export const search = action({
    args: {
        query: v.string(),
        fileId: v.string()
    },
    handler: async (ctx, args) => {
        const vectorStore = new ConvexVectorStore(new GoogleGenerativeAIEmbeddings({
            apiKey: process.env.GOOGLE_API_KEY,
            model: "gemini-embedding-001", // 768 dimensions
            taskType: TaskType.RETRIEVAL_DOCUMENT,
            title: "Document title",
        }), { ctx });

        const resultOne = (await vectorStore.similaritySearch(args.query, 1)).filter(q => q.metadata.fileId === args.fileId);
        console.log(resultOne);

        return resultOne;
    },
});
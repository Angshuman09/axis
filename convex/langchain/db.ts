import { v } from "convex/values";
import { internalMutation, internalQuery } from "../_generated/server";

export const get = internalQuery({
    args: { id: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id as any);
    },
});

export const insert = internalMutation({
    args: {
        table: v.string(),
        document: v.any(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert(args.table as any, args.document);
    },
});

export const lookup = internalQuery({
    args: {
        table: v.string(),
        index: v.string(),
        keyField: v.string(),
        key: v.string(),
    },
    handler: async (ctx, args) => {
        const result = await (ctx.db.query(args.table as any) as any)
            .withIndex(args.index, (q: any) => q.eq(args.keyField, args.key))
            .collect();
        return result;
    },
});

export const upsert = internalMutation({
    args: {
        table: v.string(),
        index: v.string(),
        keyField: v.string(),
        key: v.string(),
        document: v.any(),
    },
    handler: async (ctx, args) => {
        const existing = await (ctx.db.query(args.table as any) as any)
            .withIndex(args.index, (q: any) => q.eq(args.keyField, args.key))
            .unique();
        if (existing !== null) {
            await ctx.db.replace(existing._id, args.document);
        } else {
            await ctx.db.insert(args.table as any, args.document);
        }
    },
});

export const deleteMany = internalMutation({
    args: {
        table: v.string(),
        index: v.string(),
        keyField: v.string(),
        key: v.string(),
    },
    handler: async (ctx, args) => {
        const existing = await (ctx.db.query(args.table as any) as any)
            .withIndex(args.index, (q: any) => q.eq(args.keyField, args.key))
            .collect();
        await Promise.all(existing.map((doc: any) => ctx.db.delete(doc._id)));
    },
});
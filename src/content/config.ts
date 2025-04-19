import { defineCollection, z } from 'astro:content';

const staticCollection = defineCollection({
    schema: z.object({
        facebook: z.string().url().optional(),
        image: z.string().optional(),
        instagram: z.string().url().optional(),
        linkedIn: z.string().url().optional(),
        name: z.literal('footer'),
        twitter: z.string().url().optional(),
    }),
    type: 'content',
});

export const collections = {
    static: staticCollection,
};

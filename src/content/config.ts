import { defineCollection, z } from 'astro:content';

const staticCollection = defineCollection({
    schema: z.object({
        facebook: z.string().optional(),
        image: z.string().optional(),
        instagram: z.string().optional(),
        name: z.literal('footer'),
        twitter: z.string().optional(),
    }),
    type: 'content',
});

export const collections = {
    static: staticCollection,
};

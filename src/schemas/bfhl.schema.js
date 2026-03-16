import { z } from 'zod';

export const bfhlSchema = z.object({
    fibonacci: z.number().int().min(1).optional(),
    prime: z.array(z.number().int()).optional(),
    lcm: z.array(z.number().int()).optional(),
    hcf: z.array(z.number().int()).optional(),
    AI: z.string().optional(),
}).refine(data => {
    return data.fibonacci !== undefined ||
        data.prime !== undefined ||
        data.lcm !== undefined ||
        data.hcf !== undefined ||
        data.AI !== undefined;
}, {
    message: "Request body must contain at least one of: fibonacci, prime, lcm, hcf, AI",
});

import sendResponse from '../utils/response.js';

import { bfhlSchema } from '../schemas/bfhl.schema.js';
import * as bfhlService from '../services/bfhl.service.js';
import aiService from '../services/ai.service.js';

export const getBfhl = (req, res) => {
    sendResponse(res, 200, true, 'Welcome to the Bajaj Finserv API');
};

export const postBfhl = async (req, res, next) => {
    try {
        const validatedData = bfhlSchema.parse(req.body);
        let result = null;

        if (validatedData.fibonacci !== undefined) {
            result = bfhlService.generateFibonacci(validatedData.fibonacci);
        } else if (validatedData.prime !== undefined) {
            result = bfhlService.filterPrimes(validatedData.prime);
        } else if (validatedData.lcm !== undefined) {
            result = bfhlService.calculateLCM(validatedData.lcm);
        } else if (validatedData.hcf !== undefined) {
            result = bfhlService.calculateHCF(validatedData.hcf);
        } else if (validatedData.AI !== undefined) {
            result = await aiService.getAIResponse(validatedData.AI);
        }

        sendResponse(res, 200, true, result);
    } catch (error) {
        if (error.name === 'ZodError') {
            const messages = error.errors ? error.errors.map(e => e.message).join(', ') : error.message;
            return sendResponse(res, 400, false, messages);
        }
        next(error);
    }
};

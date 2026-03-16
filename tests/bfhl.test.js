import axios from "axios";
import { spawn } from "child_process";

const BASE_URL = process.env.BASE_URL || "https://bajajfinserv-q1.vercel.app";
const EMAIL = "kunal0638.be23@chitkara.edu.in";
let server;

beforeAll(async () => {

});

describe("Chitkara Qualifier API Tests", () => {

    /* ---------------- HEALTH CHECK ---------------- */

    test("GET /health should return success", async () => {
        const res = await axios.get(`${BASE_URL}/health`);

        expect(res.status).toBe(200);
        console.log(res.data);
        expect(res.data).toMatchObject({
            is_success: true,
            official_email: EMAIL
        });
    });

    /* ---------------- FIBONACCI ---------------- */

    test("POST /bfhl - Fibonacci", async () => {
        const res = await axios.post(`${BASE_URL}/bfhl`, {
            fibonacci: 7
        });

        console.log(res.data);
        expect(res.status).toBe(200);
        expect(res.data.is_success).toBe(true);
        // expect(res.data.official_email).toBe(EMAIL);
        expect(res.data.data).toEqual([0, 1, 1, 2, 3, 5, 8]);
    });

    /* ---------------- PRIME ---------------- */

    test("POST /bfhl - Prime Filter", async () => {
        const res = await axios.post(`${BASE_URL}/bfhl`, {
            prime: [2, 4, 7, 9, 11]
        });

        console.log(res.data);
        expect(res.status).toBe(200);
        expect(res.data.data).toEqual([2, 7, 11]);
    });

    /* ---------------- LCM ---------------- */

    test("POST /bfhl - LCM", async () => {
        const res = await axios.post(`${BASE_URL}/bfhl`, {
            lcm: [12, 18, 24]
        });

        console.log(res.data);
        expect(res.status).toBe(200);
        expect(res.data.data).toBe(72);
    });

    /* ---------------- HCF ---------------- */

    test("POST /bfhl - HCF", async () => {
        const res = await axios.post(`${BASE_URL}/bfhl`, {
            hcf: [24, 36, 60]
        });

        console.log(res.data);
        expect(res.status).toBe(200);
        expect(res.data.data).toBe(12);
    });

    /* ---------------- AI ---------------- */

    /* ---------------- AI ---------------- */

    test("POST /bfhl - AI Question", async () => {
        // Note: This test requires GEMINI_API_KEY to be set in .env
        if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
            console.warn("Skipping AI test: GEMINI_API_KEY not set");
            return;
        }

        const res = await axios.post(`${BASE_URL}/bfhl`, {
            AI: "What is the capital city of Punjab?"
        });

        console.log(res.data);
        expect(res.status).toBe(200);
        expect(res.data.is_success).toBe(true);
        expect(typeof res.data.data).toBe("string");
        // Expecting short answer (Chandigarh)
        expect(res.data.data.split(" ").length).toBeLessThanOrEqual(3);
    });

    /* ---------------- ERROR CASES ---------------- */

    test("POST /bfhl - Multiple keys should fail", async () => {
        try {
            await axios.post(`${BASE_URL}/bfhl`, {
                fibonacci: 5,
                prime: [2, 3]
            });
        } catch (err) {
            expect(err.response.status).toBe(400);
            expect(err.response.data.is_success).toBe(false);
        }
    });

    test("POST /bfhl - Invalid key should fail", async () => {
        try {
            await axios.post(`${BASE_URL}/bfhl`, {
                random: 123
            });
        } catch (err) {
            expect(err.response.status).toBe(400);
            expect(err.response.data.is_success).toBe(false);
        }
    });


    test("POST /bfhl - Invalid Fibonacci value", async () => {
        try {
            await axios.post(`${BASE_URL}/bfhl`, {
                fibonacci: -5
            });
        } catch (err) {
            expect(err.response.status).toBe(400);
            expect(err.response.data.is_success).toBe(false);
        }
    });

    test("POST /bfhl - Empty body should fail", async () => {
        try {
            await axios.post(`${BASE_URL}/bfhl`, {});
        } catch (err) {
            expect(err.response.status).toBe(400);
            expect(err.response.data.is_success).toBe(false);
        }
    });

});

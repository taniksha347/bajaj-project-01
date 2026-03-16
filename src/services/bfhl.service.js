export const generateFibonacci = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
};

export const filterPrimes = (numbers) => {
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    return numbers.filter(isPrime);
};

export const calculateLCM = (numbers) => {
    if (!numbers || numbers.length === 0) return 0;

    const gcd = (a, b) => (!b ? a : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);

    return numbers.reduce((acc, curr) => lcm(acc, curr));
};

export const calculateHCF = (numbers) => {
    if (!numbers || numbers.length === 0) return 0;

    const gcd = (a, b) => (!b ? a : gcd(b, a % b));

    return numbers.reduce((acc, curr) => gcd(acc, curr));
};

export function Retryable(config: { attempts: number, delayMs: number }) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      let lastError: any;

      for (let attempt = 1; attempt <= config.attempts; attempt++) {
        try {
          return await originalMethod.apply(this, args);
        } catch (error) {
          lastError = error;
          console.warn(`Method ${propertyKey} failed at attempt ${attempt}, retrying after ${config.delayMs}ms`);
          if (attempt < config.attempts) {
            await sleep(config.delayMs);
          }
        }
      }

      console.error(`Method ${propertyKey} failed after ${config.attempts} attempts.`);
      throw lastError;
    };

    return descriptor;
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

import {FactoryProvider, InjectionToken, isDevMode} from "@angular/core";
import {environment} from "../../environments/environment";


export const LOGGER_TOKEN = new InjectionToken<LoggerService>('LOGGER_TOKEN');

export interface LoggerService {
  log(message: string): void;
}

export class ConsoleLogger implements LoggerService {
  log(message: string): void {
    if (!isDevMode()) return;
    console.log("console writing log message..", message)
  }
}

export class FileLogger implements LoggerService {
  log(message: string): void {
    console.log("file writing log message..", message);
  }
}

export const LOGGER_FACTORY: FactoryProvider = {
  provide: LOGGER_TOKEN,
  useFactory: () => {
    if (environment.isDebugMode) {
      return new ConsoleLogger();
    }
    return new FileLogger();
  },
  deps: []
}

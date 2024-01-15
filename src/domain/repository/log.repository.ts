import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

//El logrepository nos permite llamar métodos y clases del datasource
export abstract class LogRepository {
    
    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLogs( severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
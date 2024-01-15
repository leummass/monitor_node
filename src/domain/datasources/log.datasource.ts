import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

//abstract para no poder crear instancias
export abstract class LogDatasource {
    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLogs( severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
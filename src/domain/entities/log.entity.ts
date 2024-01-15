
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

//Lo que se registrará en la aplicación
export class LogEntity{
    
    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;

    constructor( message: string, level: LogSeverityLevel) {
        this.message = message;
        this.level = level;
        this.createdAt = new Date(); 
    }
}
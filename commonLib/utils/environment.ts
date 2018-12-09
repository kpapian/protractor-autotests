import { existsSync, readFileSync } from "fs";

const configFileName = 'app.conf.json';

let config;

if (existsSync(configFileName)) {
    config = JSON.parse(readFileSync(configFileName, 'utf8').toString());
} else {
    throw new Error('Configuration file not found');
}

export class Environment {
    public static baseUrl = config.baseUrl;
    public static userEmail = config.email;
    public static userPassword = config.password;
}
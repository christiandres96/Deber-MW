import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";

const fs = require('fs');

@Injectable()
export class LogMw implements NestMiddleware {
    resolve(nombreAplicacion: string, nivelDeLog: string): MiddlewareFunction {
        return (request, response, next) => {
            const respuesta = {
                baseUrl: request.baseUrl,
                hostname: request.hostname,
                subdomains: request.subdomains,
                ip: request.ip,
                method: request.method,
                originalUrl: request.originalUrl,
                path: request.path,
                protocol: request.protocol,
                headers: request.headers,
            };

            const json = JSON.stringify(respuesta);

            if (nivelDeLog == 'archivo') {
                fs.writeFile("/archivologs/logs.txt", json, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });

            } else if (nivelDeLog == 'consola') {
                console.log('MIDDLEWARE CONSOLA', nombreAplicacion, nivelDeLog);
                console.log(respuesta);

            } else if (nivelDeLog == 'todo') {
                console.log('MIDDLEWARE TODO', nombreAplicacion, nivelDeLog);
                fs.writeFile("/archivologs/logs.txt", json, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
                console.log(respuesta);

            } else {
                console.log('ERROR')
            }
            next();
        };

    }

}




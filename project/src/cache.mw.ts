import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";
@Injectable()
export class CacheMw implements NestMiddleware{
    resolve(ruta: string): MiddlewareFunction {
        return (request, response, next) => {
            const respuesta = {
                baseUrl: request.baseUrl,
                hostname: request.hostname,
                path: request.path,
            };

            if(ruta!=null){
                console.log('EN CACHE')
            }
            else{
                console.log('NO EN CACHE');
            }
            next();
        }
    };
}

import {Controller, Get,Param, Post, Query, Req, Res} from "@nestjs/common";

@Controller('Parametros')

export class ParametrosController {
    nombre = 'User'
    valor = '5'
    @Get('cookie')
    establecerCookie(@Req() request,
                     @Res() response){

        const parametros = {
            nombreCookie: this.nombre,
            valorCookie:  this.valor,
        };
        response.cookie(parametros.nombreCookie, parametros.valorCookie);
        return response.send(parametros)
    }
    @Get('cookie/:nombre')
    leerCookie(
        @Req() request,
        @Res() response
    ) {
        const nombreCookie = request.params.nombre;
        const existeCookie = request.cookies[nombreCookie];
        if (existeCookie) {
            return response
                .send({
                valor: existeCookie,
                    mensaje: 'EN CACHE'
            })
        } else {
            return response
                .status(404)
                .send({
                    mensaje: 'NO EN CACHE'
                })
        }




}}





















/*import {Body, Controller, Get, Headers, Param, Post, Query, Req, Res} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Controller('Parametros')
export class ParametrosController {

    constructor(private _usuarioService: UsuarioService) {

    }

    @Post('devolver/:id/:modelo')
    devolverParametros(
        @Req() request,
        @Res() response,
        @Query() queryParams,
        @Body() bodyParams,
        @Param() paramsParams
    ) {
        const respuesta = {
            queryParams: queryParams,
            bodyParams: bodyParams,
            paramsParams: paramsParams
        };
        return response.send(respuesta);
    }

    @Get('ReqRes')
    requestResponse(
        @Req() request,
        @Res() response,
        @Headers() headers
    ) {
        const respuesta = {
            baseUrl: request.baseUrl,
            hostname: request.hostname,
            subdomains: request.subdomains,
            ip: request.ip,
            method: request.method,
            originalUrl: request.originalUrl,
            path: request.path,
            protocol: request.protocol,
            headers,
        };
        console.log(respuesta);
        return response.redirect('/Usuario/mostrar');///Usuario/mostrar
    }

    @Post('crearUsuario')
    crearUsuario(
        @Req() request,
        @Res() response
    ) {
        const nuevoUsuario = {
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad
        };

        const usuarioCreado = this._usuarioService.crearUsuario(nuevoUsuario);

        return response
            .status(201)
            .send(usuarioCreado);
    }

    @Get('establecerCookie')
    establecerCookie(
        @Req() request,
        @Res() response
    ) {
        const parametros = {
            nombreCookie: request.query.nombre,
            valorCookie: request.query.valor,
        };
        // Seteando la cookie 1) NOMBRE 2) VALOR
        response.cookie(parametros.nombreCookie, parametros.valorCookie);
        return response.send(parametros)
    }

    @Get('cookie/:nombre')
    leerCookie(
        @Req() request,
        @Res() response
    ) {
        const nombreCookie = request.params.nombre;
        const existeCookie = request.cookies[nombreCookie];
        if (existeCookie) {
            return response.send({
                valor: existeCookie
            })
        } else {
            return response
                .status(404)
                .send({
                    mensaje: 'No encontramos cookie'
                })
        }

        // request.cookies.adrian;
        // request.cookies["adrian"];

    }


}*/
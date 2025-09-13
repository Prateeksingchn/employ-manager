import { Router } from "express";

export class Route {
    private static registeredRoutes: string[] = []

    constructor(
        public path: string,
        public router: Router
    ) {
        if(!path.startsWith("/")) throw new Error(`${path} needs to start with '/'`);

        if(Route.registeredRoutes.includes(path)) throw new Error(`${path} is already defined`);

        Route.registeredRoutes.push(path);
    }
}

export type Routes = Route[];


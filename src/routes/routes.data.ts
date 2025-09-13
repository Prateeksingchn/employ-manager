import internRouter from "../interns-data/interns.routes.js";
import scoreRouter from "../interns-scores/scores.routes.js";
import internDetailsRouter from "../homepage-data/homepage.routes.js";
import fullDetailsRouter from "../interns-full-details/full.details.routes.js";

import { Route, Routes } from "./routes.types.js";

export const routes: Routes = [
    new Route("/intern", internRouter),
    new Route("/scores", scoreRouter),
    new Route("/interndata", internDetailsRouter),
    new Route("/fulldetails", fullDetailsRouter),
];       
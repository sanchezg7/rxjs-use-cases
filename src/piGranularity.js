import {from, map} from "rxjs";

const piGranularity$ = from([0,1,2,3,4]);

export const piWithGranularity$ = piGranularity$.pipe(
    map((granularity) => {
        // const pi = Math.PI.toString();
        // const split = pi.split(".");
        // const decimals = split[1].slice(0,granularity);
        // return split[0] + (decimals.length > 0 ? "." : "") + decimals ;
        return Math.PI.toPrecision(granularity + 1);
    }),
);

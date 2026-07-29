export class NC_PRUEFUNG {

    constructor(){
        this.state = "INIT";
        this.results = {};
    }

    checkStation(name, sysIn, sysOut, sysScale, sysHdf){

        const ok =
            sysIn.state !== "unknown" &&
            sysOut.state !== "unknown" &&
            sysScale.zuverlaessigkeit >= 0 &&
            sysHdf.status !== "unknown";

        this.results[name] = {
            name,
            ok,
            color: ok ? "gruen" : "rot",
            nevada: ok ? true : false
        };
    }

    finalize(){
        const allGreen = Object.values(this.results).every(r => r.ok);
        this.state = allGreen ? "NEVADA" : "FAIL";
        return this.state;
    }
}

window.NC_PRUEFUNG = new NC_PRUEFUNG();

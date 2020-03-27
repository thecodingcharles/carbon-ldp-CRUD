import { CarbonLDP } from "carbonldp";
import { CarbonLDPSettings } from "carbonldp/CarbonLDPSettings";

// The settings object
let settings:CarbonLDPSettings = {
    host: "localhost",	// or localhost
    port: 8083,
    ssl: false,
    vocabulary: "http://schema.org/"
};

// initialize your Carbon object with the domain where your platform lives
export let carbonldp = new CarbonLDP( settings );

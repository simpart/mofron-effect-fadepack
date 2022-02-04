/**
 * @file mofron-effect-fadepack/index.js
 * @brief fade-in,fade-out effect for mofron input component
 * @license MIT
 */
const Fade = require("mofron-effect-fade");

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) 
     *                key-value: effect config
     * @short
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("FadePack");
            this.shortForm("speed");
            
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    component (prm) {
        try {
            let ret = super.component(prm);
	    if (undefined !== prm) {
                prm.effect([
                    new Fade(true, this.speed()),
		    new Fade({ eid: 1, value: false, speed: this.speed() }),
	        ]);
            }
	    return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */

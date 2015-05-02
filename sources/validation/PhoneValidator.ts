/// <reference path="Validator.ts" />

'use strict'


var phoneRegexp = /^(\+?44|0)7\d{9}$/;

class PhoneValidator implements Validator {

    constructor(){}

    /**
     * Validate an phone input string
     * @param input
     * @returns {boolean}
     */
    validate( input:string ):boolean {

        return phoneRegexp.test( input );
    }

    toString():string {
        return "[Object PhoneValidator]";
    }

}
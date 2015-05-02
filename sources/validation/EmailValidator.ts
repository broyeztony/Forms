/// <reference path="Validator.ts" />

'use strict'

var emailRegExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

class EmailValidator implements Validator {

    constructor(){}

    /**
     * Validate an email input string
     * @param input
     * @returns {boolean}
     */
    validate( input:string ):boolean {

        return emailRegExp.test( input );
    }

    toString():string {
        return "[Object EmailValidator]";
    }

}
/// <reference path="Validator.ts" />
'use strict';
var emailRegExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var EmailValidator = (function () {
    function EmailValidator() {
    }
    /**
     * Validate an email input string
     * @param input
     * @returns {boolean}
     */
    EmailValidator.prototype.validate = function (input) {
        return emailRegExp.test(input);
    };
    EmailValidator.prototype.toString = function () {
        return "[Object EmailValidator]";
    };
    return EmailValidator;
})();
//# sourceMappingURL=EmailValidator.js.map
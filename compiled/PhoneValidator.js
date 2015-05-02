/// <reference path="Validator.ts" />
'use strict';
var phoneRegexp = /^(\+?44|0)7\d{9}$/;
var PhoneValidator = (function () {
    function PhoneValidator() {
    }
    /**
     * Validate an phone input string
     * @param input
     * @returns {boolean}
     */
    PhoneValidator.prototype.validate = function (input) {
        return phoneRegexp.test(input);
    };
    PhoneValidator.prototype.toString = function () {
        return "[Object PhoneValidator]";
    };
    return PhoneValidator;
})();
//# sourceMappingURL=PhoneValidator.js.map
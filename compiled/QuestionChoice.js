'use strict';
var QuestionChoice = (function () {
    function QuestionChoice(id, label) {
        this.id = id;
        this.label = label;
    }
    /**
     * log utility function
     * @returns {string}
     */
    QuestionChoice.prototype.toString = function () {
        return "[Object Choice id: " + this.id + ", label: " + this.label + "]";
    };
    return QuestionChoice;
})();
//# sourceMappingURL=QuestionChoice.js.map
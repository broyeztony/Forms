///<reference path="Question.ts" />
///<reference path="Config.ts" />
'use strict';
var Questionnaire = (function () {
    function Questionnaire() {
        this.config = new Config();
        this.questions = new Array();
    }
    Questionnaire.prototype.toString = function () {
        var buffer = "[Object Questionnaire \n\t";
        this.questions.forEach(function (question) {
            buffer += question.toString() + "\n";
        });
        buffer += " ]";
        return buffer;
    };
    return Questionnaire;
})();
//# sourceMappingURL=Questionnaire.js.map
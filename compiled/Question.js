///<reference path="QuestionChoice.ts" />
///<reference path="validation/Validator.ts" />
'use strict';
var QuestionType;
(function (QuestionType) {
    QuestionType[QuestionType["Open"] = 0] = "Open";
    QuestionType[QuestionType["ClosedMultipleChoice"] = 1] = "ClosedMultipleChoice";
    QuestionType[QuestionType["CloseSingleChoice"] = 2] = "CloseSingleChoice";
})(QuestionType || (QuestionType = {}));
;
var QuestionHTMLElementType;
(function (QuestionHTMLElementType) {
    QuestionHTMLElementType[QuestionHTMLElementType["Input"] = 0] = "Input";
    QuestionHTMLElementType[QuestionHTMLElementType["TextArea"] = 1] = "TextArea";
    QuestionHTMLElementType[QuestionHTMLElementType["Select"] = 2] = "Select";
    QuestionHTMLElementType[QuestionHTMLElementType["Radio"] = 3] = "Radio";
    QuestionHTMLElementType[QuestionHTMLElementType["Checkbox"] = 4] = "Checkbox";
})(QuestionHTMLElementType || (QuestionHTMLElementType = {}));
;
var Question = (function () {
    /**
     * Create a new Question object
     * @param id
     * @param label
     * @param required
     * @param questionType
     * @param htmlElementType
     */
    function Question(id, label, required, questionType, htmlElementType) {
        if (label === void 0) { label = ""; }
        if (required === void 0) { required = false; }
        if (questionType === void 0) { questionType = 0 /* Open */; }
        if (htmlElementType === void 0) { htmlElementType = 0 /* Input */; }
        this.id = id;
        this.label = label;
        this.required = required;
        this.questionType = questionType;
        this.questionHTMLElementType = htmlElementType;
        this.choices = new Array();
        this.validators = new Array();
    }
    /**
     * log utility function
     * @returns {string}
     */
    Question.prototype.toString = function () {
        var buffer = "[Object Question id: " + this.id + ", label: " + this.label + ", required: " + this.required + ", questionType: " + this.questionType + ", htmlElementType: " + this.questionHTMLElementType + ", \n\t\tchoices: \n";
        this.choices.forEach(function (choice) {
            buffer += "\t\t\t" + choice.toString() + "\n";
        });
        buffer += "\t]";
        return buffer;
    };
    return Question;
})();
//# sourceMappingURL=Question.js.map
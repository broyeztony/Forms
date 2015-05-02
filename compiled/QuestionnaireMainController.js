/// <reference path="Questionnaire.ts" />
/// <reference path="QuestionnaireViewRenderer.ts" />
'use strict';
var QuestionnaireMainController = (function () {
    function QuestionnaireMainController($quest, $viewRenderer) {
        this.questionnaire = $quest;
        this.questionnaireViewRenderer = $viewRenderer;
    }
    QuestionnaireMainController.prototype.onError = function (message) {
    };
    /** Trigged when the user submits its questionnaire */
    QuestionnaireMainController.prototype.onSubmit = function () {
        var _this = this;
        this.questionnaire.questions.forEach(function (question) {
            try {
                var id = question.id;
                var required = question.required;
                var userValue = _this.questionnaireViewRenderer.getUserValueForQuestionId(id);
                // We assume that if a question has registered validators, it must be required
                if (required) {
                    if (userValue === void 0)
                        throw "The question " + question.toString() + " is required.";
                }
            }
            catch (error) {
                _this.onError(error);
            }
            /*
            if ( required ){

                var userValue:string    = this.questionnaireViewRenderer.getUserValueForQuestionId( id );
                if (userValue === void 0)
                    throw new Error

                question.validators.forEach( validator => {

                    var isValid:boolean     = validator.validate(userValue);

                    if( !)
                }
                }
           */
        });
    };
    return QuestionnaireMainController;
})();
//# sourceMappingURL=QuestionnaireMainController.js.map
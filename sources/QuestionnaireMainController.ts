/// <reference path="Questionnaire.ts" />
/// <reference path="QuestionnaireViewRenderer.ts" />

'use strict'

class QuestionnaireMainController {

    constructor( $quest:Questionnaire, $viewRenderer:QuestionnaireViewRenderer, $http ){

        this.questionnaire              = $quest;
        this.questionnaireViewRenderer  = $viewRenderer;
        this.httpService                = $http;
        this.jsonData                   = {};
    }

    onError( message:string ):void {

    }

    /** Trigged when the user submits its questionnaire */
    onSubmit():void {


        this.questionnaire.questions.forEach(question => {

            try {

                var id:string           = question.id;
                var required:boolean    = question.required;

                // We retrieve the value the user has provided with this utility method.
                var userValue:string    = this.questionnaireViewRenderer.getUserValueForQuestionId( id );

                // We assume that if a question has registered validators, it must be required
                if( required ){
                    if (userValue === void 0) throw "The question " + question.toString() + " is required.";

                    // Process all the validators
                    question.validators.forEach( validator => {

                        var isValid:boolean = validator.validate(userValue);
                        if( !isValid ) throw "The answer to the question " + question.toString() + " is not valid.";
                    });
                }

                // Here, we would call a utility function to store the question data
                // (id, label, user's answer) in a JSON object we can read and write to from this method onSubmit.
                this.saveAnswerToJson( question )

            }
            catch(error)
            {
                this.onError( error );
            }

        });


        // Client-side validation is completed
        // Attempt server-side validation

        var promise = this.httpService.post( this.questionnaire.config.restEndPoint, jsonData );

        promise.then(
            function( success ) { /* Data successfully submitted here */ },
            function(httpError){ throw httpError.status + " : " + httpError.data; });

    };


    questionnaire:Questionnaire;
    questionnaireViewRenderer:QuestionnaireViewRenderer;
    httpService:$http;
    jsonData:Object;
}
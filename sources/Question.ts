///<reference path="QuestionChoice.ts" />
///<reference path="validation/Validator.ts" />

'use strict'

enum QuestionType { Open, ClosedMultipleChoice, CloseSingleChoice };
enum QuestionHTMLElementType { Input, TextArea, Select, Radio, Checkbox };

class Question {

    /**
     * Create a new Question object
     * @param id
     * @param label
     * @param required
     * @param questionType
     * @param htmlElementType
     */
    constructor( id:string,
                 label:string = "",
                 required:boolean = false,
                 questionType:QuestionType = QuestionType.Open,
                 htmlElementType:QuestionHTMLElementType = QuestionHTMLElementType.Input
                 ){

        this.id                         = id;
        this.label                      = label;
        this.required                   = required;
        this.questionType               = questionType;
        this.questionHTMLElementType    = htmlElementType;
        this.choices                    = new Array<QuestionChoice>();
        this.validators                 = new Array<Validator>();
    }

    /**
     * log utility function
     * @returns {string}
     */
    toString():string {

        var buffer:string = "[Object Question id: " + this.id +
                            ", label: " + this.label +
                            ", required: " + this.required +
                            ", questionType: " + this.questionType +
                            ", htmlElementType: " + this.questionHTMLElementType +
                            ", \n\t\tchoices: \n";

        this.choices.forEach(choice => {
            buffer += "\t\t\t" + choice.toString() + "\n";
        });

        buffer += "\t]";
        return buffer;
    }


    id:string;
    label:string;
    required:boolean;
    questionType:QuestionType;
    questionHTMLElementType:QuestionHTMLElementType;
    choices:Array<QuestionChoice>;
    validators:Array<Validator>;
}
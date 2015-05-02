 ///<reference path="Question.ts" />
 ///<reference path="Config.ts" />

'use strict'


class Questionnaire {


    constructor(){

        this.config     = new Config();
        this.questions  = new Array<Question>();
    }


    toString():string {
        var buffer:string = "[Object Questionnaire \n\t";

        this.questions.forEach(question => {

            buffer += question.toString() + "\n";
        });

        buffer += " ]";
        return buffer;
    }


    config:Config;
    questions:Array<Question>;
}
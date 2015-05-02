'use strict'


class QuestionChoice {

    constructor( id:string, label:string ){

        this.id     = id;
        this.label  = label;
    }

    /**
     * log utility function
     * @returns {string}
     */
    toString():string {

        return "[Object Choice id: " + this.id + ", label: " + this.label + "]";
    }

    id:string;
    label:string;
}
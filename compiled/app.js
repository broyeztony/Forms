///<reference path="Questionnaire.ts" />
///<reference path="validation/EmailValidator.ts" />
'use strict';
// Create a questionnaire instance
var questionnaire = new Questionnaire();
questionnaire.config.restEndPoint = "http://www.mycompany.com/survey";
// Create a question
var q0 = new Question("00", "What is your favourite color ?", true, 2 /* CloseSingleChoice */, 3 /* Radio */);
// Provide choices to answer the question
var c0 = new QuestionChoice("0", "Red");
var c1 = new QuestionChoice("1", "Green");
var c2 = new QuestionChoice("2", "Blue");
q0.choices.push(c0, c1, c2);
questionnaire.questions.push(q0);
// Other questions come here
// create a "Question" to ask the user's email
var qNth = new Question("Email User", "Your email: ", true, 0 /* Open */, 0 /* Input */);
// Reduce
var a = [1, 2, ["foo", [[[[4]]]], 5, 6]];
function flatten(y) {
    return y.reduce(function (output, item) { return output.concat(Array.isArray(item) ? flatten(item) : [item]); }, []);
}
function flat(input) {
    return input.reduce(function (output, item) {
        if (typeof item == "object")
            return output.concat(flat(item));
        else
            return output.concat([item]);
    }, []);
}
var b = flat(a);
console.log("reduced: ", b);
// Reduce
var arr = [{ x: 1 }, { x: 2 }, { x: 4 }];
var output = arr.reduce(function (a, b) {
    return { x: a.x + b.x };
});
console.log(output);
//# sourceMappingURL=app.js.map
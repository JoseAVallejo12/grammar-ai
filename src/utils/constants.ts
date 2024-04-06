export const GLOBAL_TEXT = {
    suggestVariableName: (textSelected: string) => `Given a variable name, provide a list of suggested variable names that follow good naming camel case conventions. The variable name is ${textSelected}. Please format the output such that each suggestion is numbered and separated by a newline.`,
    suggestGrammarText: (textSelected: string) => `Given a sentence, provide a english grammar corrections. The sentence is: ${textSelected}`,
    placeHolder: (textSelected: string) => `Select an option for the variable name: ${textSelected}`,
    deactivate: 'This function \'deactivate\' is empty',
    title: 'Suggest Variable Names'
};
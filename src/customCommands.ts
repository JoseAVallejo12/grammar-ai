import { getSuggestGrammarText, getSuggestVariableNames, doOpenQuestion } from './handlers/index';

export const customCommands = [
    {
        id: 'grammar-ai.suggestVariableNames',
        handler: getSuggestVariableNames
    },
    {
        id: 'grammar-ai.suggestGrammarText',
        handler: getSuggestGrammarText
    },
    {
        id: 'grammar-ai.openQuestion',
        handler: doOpenQuestion
    }
];

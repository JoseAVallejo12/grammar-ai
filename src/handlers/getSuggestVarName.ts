import * as vscode from 'vscode';
import { GLOBAL_TEXT } from "../utils/constants";
import { asyncGetAiText } from "../service/huggingFaceService";
import { showQuickPick } from "../utils/quickPickSelector";
import { replaceTextSelected } from "../utils/replaceTextSelected";

/**
 * The function `getSuggestVariableNames` retrieves the selected text in the active editor, prompts the
 * user for a variable name suggestion using AI text generation, presents options for variable names,
 * and replaces the selected text with the chosen option.
 */
export async function getSuggestVariableNames() {
    // Obtén el editor activo
    let editor = vscode.window.activeTextEditor;
    if (editor) {
        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);
        const prompt = GLOBAL_TEXT.suggestVariableName(selectedText);

        const assistantOutput = await  asyncGetAiText(prompt);
        const options = extractOptionsFromText(assistantOutput[0].generated_text);
        const selectedOption = await showQuickPick(vscode, GLOBAL_TEXT, options, selectedText);
        replaceTextSelected(editor, selectedOption, selection);
    }
}

/**
 * Extracts options from the given text.
 * @param data - The text to extract options from.
 * @returns An array of extracted options.
 */
function extractOptionsFromText(data: string) {
    const regex = /\d+\.\s([a-zA-Z_]+)/g;
    const filteredOptions: string[] = [];
    data.split('\n').forEach(item => {
        if (regex.test(item)) {
            filteredOptions.push(item.split(' ')[1].trim());
        }
    });
    return filteredOptions;
}
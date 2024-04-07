import * as vscode from 'vscode';
import { asyncGetAiText } from "../service/huggingFaceService";
import { GLOBAL_TEXT } from '../utils/constants';
import { showQuickPick } from '../utils/quickPickSelector';

export async function getSuggestGrammarText() {
    // Obtén el texto seleccionado
    let editor = vscode.window.activeTextEditor;
    if (editor) {
        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);
        const prompt = GLOBAL_TEXT.suggestGrammarText(selectedText);

        const assistantOutput = await  asyncGetAiText(prompt);
        vscode.window.showInformationMessage('Suggest Grammar Text: ' + assistantOutput[0].generated_text);
    }
}
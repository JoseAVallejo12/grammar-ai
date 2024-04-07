import * as vscode from 'vscode';
import { GLOBAL_TEXT } from '../utils/constants';
import { asyncGetAiText } from '../service/huggingFaceService';

export async function doOpenQuestion() {
    // Obtén el texto seleccionado
    let editor = vscode.window.activeTextEditor;
    if (editor) {
        const prompt = await vscode.window.showInputBox({
            placeHolder: GLOBAL_TEXT.placeHolderInputBox
        }) || '';

        const assistantOutput = await  asyncGetAiText(prompt);
        vscode.window.showInformationMessage('Suggest Grammar Text: ' + assistantOutput[0].generated_text);
    }
}

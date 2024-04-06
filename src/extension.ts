// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { getSuggestVariableNames } from './handlers/getSuggestVarName';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    console.log("🚀 ~ activate ~ context:", context);
    let disposable = vscode.commands.registerCommand('grammar-ai.suggestVariableNames', getSuggestVariableNames );
    context.subscriptions.push(disposable);
}



// This method is called when your extension is deactivated
export function deactivate() { /* This function 'deactivate' is empty */ }



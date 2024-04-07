import { ExtensionContext } from 'vscode';
import { registerCommands } from './utils/registerCommands';

// Your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
    // Register the commands
    registerCommands(context);
}

// This method is called when your extension is deactivated
export function deactivate() { /* This function 'deactivate' is empty */ }

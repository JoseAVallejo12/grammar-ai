import * as vscode from 'vscode';

import { customCommands } from '../customCommands';

export const registerCommands = (context: vscode.ExtensionContext) => {

    customCommands.forEach(command => {
        const newCommand = vscode.commands.registerCommand(command.id, command.handler);
        context.subscriptions.push(newCommand);
    });
};

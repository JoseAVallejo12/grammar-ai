export async function showQuickPick(vscode: any, GLOBAL_TEXT: any, options: string[], selectedText: string) {
    return await vscode.window.showQuickPick(options, {
        placeHolder: GLOBAL_TEXT.placeHolder(selectedText),
        title: GLOBAL_TEXT.title
    });
};

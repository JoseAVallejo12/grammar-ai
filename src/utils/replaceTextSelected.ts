export function replaceTextSelected(editor: any, selectedOption: string, selection: any) {
    // remplazar el texto seleccionado por la opción seleccionada
    if (selectedOption) {
        editor.edit((editBuilder: any) => {
            editBuilder.replace(selection, selectedOption);
        });
    }
};
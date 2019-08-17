import * as vscode from "vscode";
import { parseFiles, exportExportables } from "barreler";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "barreler.generateBarrels",
    (_, selectedFilesOrDirectories) => {
      processFilesOrDirectories(selectedFilesOrDirectories);
    }
  );

  context.subscriptions.push(disposable);
}

const processFilesOrDirectories = async (list: any[]) => {
  const files = list.map(file => file.fsPath);
  const exportables = await parseFiles(files);

  await exportExportables(exportables);

  await vscode.window.showInformationMessage("Barrel files generated.");
};

// this method is called when your extension is deactivated
export function deactivate() {}

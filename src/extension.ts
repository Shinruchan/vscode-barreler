import * as vscode from "vscode";
import { barrel } from "barreler";
import { BarrelerOptions } from "barreler/lib/barreler";

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
  const config = vscode.workspace.getConfiguration("barreler");

  const options: Partial<BarrelerOptions> = {};

  if (config.get("mode")) options.mode = config.get("mode");
  if (config.get("include")) options.include = config.get("include");
  if (config.get("exclude")) options.exclude = config.get("exclude");

  const files = list.map(file => file.fsPath);

  await barrel(files, options);

  await vscode.window.showInformationMessage("Barrel files generated.");
};

// this method is called when your extension is deactivated
export function deactivate() {}

import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Commands Test Suite', () => {
  vscode.window.showInformationMessage('Start command tests');

  test('toUpperCase converts selection to upper case', async () => {
    const doc = await vscode.workspace.openTextDocument({ content: 'abc' });
    const editor = await vscode.window.showTextDocument(doc);
    editor.selection = new vscode.Selection(0, 0, 0, doc.getText().length);

    await vscode.commands.executeCommand('text-utilities.toUpperCase');

    assert.strictEqual(doc.getText(), 'ABC');
  });

  test('formatJson formats JSON selection', async () => {
    const input = '{"a":1}';
    const expected = JSON.stringify(JSON.parse(input), null, 2);

    const doc = await vscode.workspace.openTextDocument({ content: input });
    const editor = await vscode.window.showTextDocument(doc);
    editor.selection = new vscode.Selection(0, 0, doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length);

    await vscode.commands.executeCommand('text-utilities.formatJson');

    assert.strictEqual(doc.getText(), expected);
  });
});

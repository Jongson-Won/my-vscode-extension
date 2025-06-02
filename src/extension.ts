// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { v4 as uuidv4 } from 'uuid';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Text Utilities extension is now active!');

  // Register all commands
  const commands = [
    { command: 'text-utilities.toUpperCase', handler: toUpperCase },
    { command: 'text-utilities.toLowerCase', handler: toLowerCase },
    { command: 'text-utilities.toCamelCase', handler: toCamelCase },
    { command: 'text-utilities.toSnakeCase', handler: toSnakeCase },
    { command: 'text-utilities.toKebabCase', handler: toKebabCase },
    { command: 'text-utilities.insertDate', handler: insertDate },
    { command: 'text-utilities.insertTime', handler: insertTime },
    { command: 'text-utilities.insertDateTime', handler: insertDateTime },
    { command: 'text-utilities.insertUUID', handler: insertUUID },
    { command: 'text-utilities.countWords', handler: countWords },
    { command: 'text-utilities.base64Encode', handler: base64Encode },
    { command: 'text-utilities.base64Decode', handler: base64Decode }
  ];

  commands.forEach(({ command, handler }) => {
    const disposable = vscode.commands.registerCommand(command, handler);
    context.subscriptions.push(disposable);
  });
}

// Transform functions
async function toUpperCase() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const selection = editor.selection;
  const text = editor.document.getText(selection);
  
  if (text) {
    await editor.edit(editBuilder => {
      editBuilder.replace(selection, text.toUpperCase());
    });
  }
}

async function toLowerCase() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const selection = editor.selection;
  const text = editor.document.getText(selection);
  
  if (text) {
    await editor.edit(editBuilder => {
      editBuilder.replace(selection, text.toLowerCase());
    });
  }
}

async function toCamelCase() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const selection = editor.selection;
  const text = editor.document.getText(selection);
  
  if (text) {
    const camelCase = text
      .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
      .replace(/^(.)/, (_, char) => char.toLowerCase());
    
    await editor.edit(editBuilder => {
      editBuilder.replace(selection, camelCase);
    });
  }
}

async function toSnakeCase() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const selection = editor.selection;
  const text = editor.document.getText(selection);
  
  if (text) {
    const snakeCase = text
      .replace(/([A-Z])/g, '_$1')
      .replace(/[-\s]+/g, '_')
      .replace(/^_/, '')
      .toLowerCase();
    
    await editor.edit(editBuilder => {
      editBuilder.replace(selection, snakeCase);
    });
  }
}

async function toKebabCase() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const selection = editor.selection;
  const text = editor.document.getText(selection);
  
  if (text) {
    const kebabCase = text
      .replace(/([A-Z])/g, '-$1')
      .replace(/[_\s]+/g, '-')
      .replace(/^-/, '')
      .toLowerCase();
    
    await editor.edit(editBuilder => {
      editBuilder.replace(selection, kebabCase);
    });
  }
}

// Insert functions
async function insertDate() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const date = new Date().toLocaleDateString();
  await editor.edit(editBuilder => {
    editBuilder.insert(editor.selection.active, date);
  });
}

async function insertTime() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const time = new Date().toLocaleTimeString();
  await editor.edit(editBuilder => {
    editBuilder.insert(editor.selection.active, time);
  });
}

async function insertDateTime() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const dateTime = new Date().toLocaleString();
  await editor.edit(editBuilder => {
    editBuilder.insert(editor.selection.active, dateTime);
  });
}

async function insertUUID() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const uuid = uuidv4();
  await editor.edit(editBuilder => {
    editBuilder.insert(editor.selection.active, uuid);
  });
}

// Utility functions
async function countWords() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const selection = editor.selection;
  const text = editor.document.getText(selection.isEmpty ? undefined : selection);
  
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  const lines = text.split('\n').length;
  
  const message = `Words: ${words.length}\nCharacters: ${characters}\nCharacters (no spaces): ${charactersNoSpaces}\nLines: ${lines}`;
  vscode.window.showInformationMessage(message);
}

async function base64Encode() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const selection = editor.selection;
  const text = editor.document.getText(selection);
  
  if (text) {
    const encoded = Buffer.from(text).toString('base64');
    await editor.edit(editBuilder => {
      editBuilder.replace(selection, encoded);
    });
  }
}

async function base64Decode() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const selection = editor.selection;
  const text = editor.document.getText(selection);
  
  if (text) {
    try {
      const decoded = Buffer.from(text, 'base64').toString('utf-8');
      await editor.edit(editBuilder => {
        editBuilder.replace(selection, decoded);
      });
    } catch (error) {
      vscode.window.showErrorMessage('Invalid Base64 string');
    }
  }
}

// This method is called when your extension is deactivated
export function deactivate() {} 
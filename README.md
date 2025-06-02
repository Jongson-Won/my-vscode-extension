# Text Utilities

A powerful VS Code extension that provides essential text manipulation utilities for developers.

## Features

### Text Transformation
- **Transform to UPPERCASE**: Convert selected text to uppercase
- **Transform to lowercase**: Convert selected text to lowercase
- **Transform to camelCase**: Convert selected text to camelCase format
- **Transform to snake_case**: Convert selected text to snake_case format
- **Transform to kebab-case**: Convert selected text to kebab-case format

### Date & Time Insertion
- **Insert Current Date**: Insert today's date at cursor position
- **Insert Current Time**: Insert current time at cursor position
- **Insert Current Date & Time**: Insert full date and time at cursor position

### Developer Utilities
- **Insert UUID**: Generate and insert a UUID v4 at cursor position
- **Count Words**: Display word count, character count, and line count for selected text
- **Base64 Encode**: Encode selected text to Base64
- **Base64 Decode**: Decode selected Base64 text

## Usage

### Using Commands
1. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "Text Utilities" to see all available commands
3. Select the desired command

### Using Keyboard Shortcuts
- `Ctrl+Shift+U` / `Cmd+Shift+U`: Transform to UPPERCASE
- `Ctrl+Shift+L` / `Cmd+Shift+L`: Transform to lowercase

### Using Context Menu
1. Select text in the editor
2. Right-click to open context menu
3. Select "Text Utilities" submenu
4. Choose the desired transformation

## Examples

### Text Case Transformations
- `hello world` → `HELLO WORLD` (UPPERCASE)
- `Hello World` → `hello world` (lowercase)
- `hello world` → `helloWorld` (camelCase)
- `HelloWorld` → `hello_world` (snake_case)
- `hello world` → `hello-world` (kebab-case)

### Base64 Encoding/Decoding
- `Hello World` → `SGVsbG8gV29ybGQ=` (Encode)
- `SGVsbG8gV29ybGQ=` → `Hello World` (Decode)

## Requirements

VS Code version 1.74.0 or higher

## Extension Settings

This extension does not require any additional settings.

## Known Issues

None at the moment. Please report issues on GitHub.

## Release Notes

### 1.0.0

Initial release with the following features:
- Text case transformations (UPPERCASE, lowercase, camelCase, snake_case, kebab-case)
- Date and time insertion
- UUID generation
- Word counting
- Base64 encoding/decoding
- Context menu integration
- Keyboard shortcuts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This extension is released under the MIT License. 
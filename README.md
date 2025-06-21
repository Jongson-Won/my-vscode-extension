# Text Utilities

A powerful VS Code extension that provides essential text manipulation utilities for developers.

## Features

### Text Transformation
- **Transform to UPPERCASE**: Convert selected text to uppercase
- **Transform to lowercase**: Convert selected text to lowercase
- **Transform to camelCase**: Convert selected text to camelCase format
- **Transform to snake_case**: Convert selected text to snake_case format
- **Transform to kebab-case**: Convert selected text to kebab-case format
- **Reverse Text**: Reverse the selected text

### Line Operations
- **Sort Lines Ascending**: Sort selected lines alphabetically (A-Z)
- **Sort Lines Descending**: Sort selected lines in reverse order (Z-A)
- **Remove Duplicate Lines**: Remove duplicate lines from selection
- **Trim Lines**: Remove leading and trailing whitespace from each line
- **Number Lines**: Add line numbers to selected text

### Date & Time Insertion
- **Insert Current Date**: Insert today's date at cursor position (configurable format)
- **Insert Current Time**: Insert current time at cursor position
- **Insert Current Date & Time**: Insert full date and time at cursor position

### Developer Utilities
- **Insert UUID**: Generate and insert a UUID v4 at cursor position (configurable case)
- **Count Words**: Display word count, character count, and line count for selected text
- **Base64 Encode**: Encode selected text to Base64
- **Base64 Decode**: Decode selected Base64 text

### JSON Operations
- **Format JSON**: Format selected JSON with proper indentation
- **Minify JSON**: Remove unnecessary whitespace from JSON

## Usage

### Using Commands
1. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "Text Utilities" to see all available commands
3. Select the desired command

### Using Keyboard Shortcuts
- `Ctrl+Shift+U` / `Cmd+Shift+U`: Transform to UPPERCASE
- `Ctrl+Shift+L` / `Cmd+Shift+L`: Transform to lowercase
- `Ctrl+Shift+J` / `Cmd+Shift+J`: Format JSON

### Using Context Menu
1. Select text in the editor
2. Right-click to open context menu
3. Select "Text Utilities" submenu
4. Choose the desired transformation

## Extension Settings

This extension contributes the following settings:

* `textUtilities.dateFormat`: Choose date format (short, long, or iso)
  - `short`: 1/14/2025
  - `long`: January 14, 2025
  - `iso`: 2025-01-14
* `textUtilities.uuidUppercase`: Generate UUIDs in uppercase (default: false)
* `textUtilities.trimEmptyLines`: Remove empty lines when trimming (default: true)

## Examples

### Text Case Transformations
- `hello world` → `HELLO WORLD` (UPPERCASE)
- `Hello World` → `hello world` (lowercase)
- `hello world` → `helloWorld` (camelCase)
- `HelloWorld` → `hello_world` (snake_case)
- `hello world` → `hello-world` (kebab-case)

### Line Operations
```
banana
apple
cherry
apple
```
→ Sort Ascending:
```
apple
apple
banana
cherry
```
→ Remove Duplicates:
```
apple
banana
cherry
```

### JSON Formatting
```json
{"name":"John","age":30,"city":"New York"}
```
→ Format JSON:
```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

### Base64 Encoding/Decoding
- `Hello World` → `SGVsbG8gV29ybGQ=` (Encode)
- `SGVsbG8gV29ybGQ=` → `Hello World` (Decode)

## Requirements

VS Code version 1.74.0 or higher

## Known Issues

None at the moment. Please report issues on GitHub.

## Packaging

Run `npm run package` to create a `.vsix` file for manual installation.

## Release Notes

### 1.1.0
- Added line operations: sort, remove duplicates, trim, number lines
- Added JSON formatting and minification
- Added text reversal
- Added configuration settings for date format and UUID case
- Added keyboard shortcut for JSON formatting

### 1.0.0
Initial release with basic text transformations and utilities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This extension is released under the MIT License. 
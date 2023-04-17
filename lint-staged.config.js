const sharedCommands = ["eslint --fix", "prettier --write"];

module.exports = {
  "*.{js,jsx}": [...sharedCommands],
  "*.{ts,tsx}": [() => "tsc --skipLibCheck --noEmit", ...sharedCommands],
};

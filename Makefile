install:
	npm install
start:
	sudo npx babel-node src/bin/brain-games.js
publish:
	sudo npm publish --dry-run

install:
	npm install
start:
	sudo npx babel-node src/bin/brain-games.js
lint:
	npx eslint .
publish:
	sudo npm publish --dry-run

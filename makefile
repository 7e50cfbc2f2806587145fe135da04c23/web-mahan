ENVKEYS=API_ADDR API_PREFIX
kill:
	docker kill "mahan-web" || true
build:
	sed 's/_env_/developer/g' .docker/Dockerfile | docker build -t "mahan-web" -f - .
run: build kill
	docker run --rm --name="mahan-web" -d  -p 35101:35101 "mahan-web"
install:
	npm install
dev:
	ENV=developer ./builder.sh .value ${ENVKEYS}
	./run.sh "npm run watch"

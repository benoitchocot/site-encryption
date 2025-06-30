APP_CONTAINER=easterapp_php

.PHONY: build up down bash composer install db-create db-schema db-fixtures logs

build:
	docker compose build --no-cache

up:
	docker compose up -d

down:
	docker compose down

bash:
	docker exec -it $(APP_CONTAINER) bash

composer-install:
	docker exec -it $(APP_CONTAINER) composer install

db-create:
	docker exec -it $(APP_CONTAINER) php bin/console doctrine:database:create

db-schema:
	docker exec -it $(APP_CONTAINER) php bin/console doctrine:schema:update --force

db-fixtures:
	docker exec -it $(APP_CONTAINER) php bin/console doctrine:fixtures:load --group=UserFixtures --append

db-fixtures-all:
	docker exec -it $(APP_CONTAINER) php bin/console doctrine:fixtures:load --no-interaction

logs:
	docker compose logs -f

docker build --no-cache -f SQL\Dockerfile.PostgreSql -t rpavy/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t rpavy/app ../..

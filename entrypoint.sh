#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /app/tmp/pids/server.pid

# Precompilar assets si es necesario
if [ "$RAILS_ENV" != "development" ]; then
  bundle exec rake assets:precompile
fi

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
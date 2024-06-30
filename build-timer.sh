!/bin/bash

for i in {1..15}
do
  echo "Starting build iteration $i..."

  # Record the start time
  start_time=$(date +%s)

  # Run the Angular build commands
  npm run build:app-dev:academy
  npm run build:app-dev:atmosphere
  npm run build:app-dev:candidate
  npm run build:app-dev:community
  npm run build:app-dev:dashboard
  npm run build:app-dev:dialog
  npm run build:app-dev:genius
  npm run build:app-dev:idea
  npm run build:app-dev:info
  npm run build:app-dev:job-postings
  npm run build:app-dev:kudo
  npm run build:app-dev:map
  npm run build:app-dev:resource
  npm run build:app-dev:score
  npm run build:app-dev:shop
  npm run build:app-dev:standup
  npm run build:app-dev:system
  npm run build:app-dev:tv
  npm run build:app-dev:tv-display
  npm run build:app-dev:wellness
  npm run build:app-dev:workflow

  # Record the end time
  end_time=$(date +%s)

  # Calculate the build time
  build_time=$((end_time - start_time))

  # Print and log the build time
  echo "Build completed in $build_time seconds."
  echo "$(date):Build completed in $build_time seconds." >> build-times.log
done

echo "All builds completed. Build times are logged in build-times.log"

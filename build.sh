./android/gradlew clean
rm -rf android/app/src/main/res/drawable-*
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/build/intermediates/res/merged/release/
react-native run-android --variant=release

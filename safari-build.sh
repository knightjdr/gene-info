versionNumber=$(cat extension/safari/manifest.json | jq '.version')
infoPlist='extension/safari-xcode/gix/gix/Info.plist'
infoPlistExtension='extension/safari-xcode/gix/gix Extension/Info.plist'

# convert extension
xcrun safari-web-extension-converter ./extension/safari --project-location ./extension/safari-xcode --app-name gix --bundle-identifier dev.jamesknight.gix --copy-resources --force --swift --no-open

# copy app icons
rm -rf extension/safari-xcode/gix/gix/Assets.xcassets/AppIcon.appiconset/*
cp extension/safari/icon/Contents.json extension/safari-xcode/gix/gix/Assets.xcassets/AppIcon.appiconset/
cp extension/safari/icon/icon16.png extension/safari-xcode/gix/gix/Assets.xcassets/AppIcon.appiconset/
cp extension/safari/icon/icon32.png extension/safari-xcode/gix/gix/Assets.xcassets/AppIcon.appiconset/
cp extension/safari/icon/icon64.png extension/safari-xcode/gix/gix/Assets.xcassets/AppIcon.appiconset/
cp extension/safari/icon/icon128.png extension/safari-xcode/gix/gix/Assets.xcassets/AppIcon.appiconset/
cp extension/safari/icon/icon256.png extension/safari-xcode/gix/gix/Assets.xcassets/AppIcon.appiconset/
cp extension/safari/icon/icon512.png extension/safari-xcode/gix/gix/Assets.xcassets/AppIcon.appiconset/
cp extension/safari/icon/icon1024.png extension/safari-xcode/gix/gix/Assets.xcassets/AppIcon.appiconset/

# update version and build numbers
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $versionNumber" "$infoPlist"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $versionNumber" "$infoPlistExtension"
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString $versionNumber" "$infoPlist"
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString $versionNumber" "$infoPlistExtension"

# set app category
/usr/libexec/PlistBuddy -c "Add :LSApplicationCategoryType string public.app-category.productivity" "$infoPlist"

# add encryption boolean
/usr/libexec/PlistBuddy -c "Add :ITSAppUsesNonExemptEncryption bool false" "$infoPlist"

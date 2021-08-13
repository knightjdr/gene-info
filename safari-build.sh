buildNumber='1'
versionNumber=$(cat extension/safari/manifest.json | jq '.version')
infoPlist='extension/safari-xcode/gix/gix/Info.plist'
infoPlistExtension='extension/safari-xcode/gix/gix Extension/Info.plist'

# convert extension
xcrun safari-web-extension-converter ./extension/safari --project-location ./extension/safari-xcode --app-name gix --bundle-identifier dev.jamesknight.gix --copy-resources --force --swift --no-open

# copy app icons
rm -rf extension/safari-xcode/gix/gix/Assets.xcassets/AppIcon.appiconset
cp -r design/AppIcon.appiconset extension/safari-xcode/gix/gix/Assets.xcassets

# update version and build numbers
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $buildNumber" "$infoPlist"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $buildNumber" "$infoPlistExtension"
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString $versionNumber" "$infoPlist"
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString $versionNumber" "$infoPlistExtension"

# set app category
/usr/libexec/PlistBuddy -c "Add :LSApplicationCategoryType string public.app-category.productivity" "$infoPlist"

# add encryption boolean
/usr/libexec/PlistBuddy -c "Add :ITSAppUsesNonExemptEncryption bool false" "$infoPlist"

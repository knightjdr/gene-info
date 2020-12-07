buildNumber='1'
versionNumber=$(cat chrome-extension/dist/manifest.json | jq '.version')
infoPlist='chrome-extension/safari/gix/gix/Info.plist'
infoPlistExtension='chrome-extension/safari/gix/gix Extension/Info.plist'

# convert extension
xcrun safari-web-extension-converter ./chrome-extension/dist --project-location ./chrome-extension/safari --app-name gix --bundle-identifier dev.jamesknight.gix --copy-resources --force --swift --no-open

# copy app icons
rm -rf chrome-extension/safari/gix/gix/Assets.xcassets/AppIcon.appiconset
cp -r design/AppIcon.appiconset chrome-extension/safari/gix/gix/Assets.xcassets

# update version and build numbers
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $buildNumber" "$infoPlist"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $buildNumber" "$infoPlistExtension"
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString $versionNumber" "$infoPlist"
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString $versionNumber" "$infoPlistExtension"

# set app category
/usr/libexec/PlistBuddy -c "Add :LSApplicationCategoryType string public.app-category.productivity" "$infoPlist"

# add encryption boolean
/usr/libexec/PlistBuddy -c "Add :ITSAppUsesNonExemptEncryption bool false" "$infoPlist"

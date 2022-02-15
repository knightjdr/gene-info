# Chrome
npm run prod-ext:chrome
(cd extension && zip -r chrome.zip chrome)

# Firefox
npm run prod-ext:firefox
(cd extension/firefox && zip -r -FS ../firefox.zip *)

# Edge
npm run prod-ext:edge
(cd extension && zip -r edge.zip edge)

# Safari
unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    *)          machine="UNKNOWN:${unameOut}"
esac

if [ ${machine} = "Mac" ]; then
  npm run prod-ext:safari
fi
#!/bin/sh
rm -rf .env && touch .env
rm -rf run.sh && touch run.sh && chmod +x run.sh
APIURL=infra.app.com/api/config/${ENV}/mahan
printLn() {
  echo "$1" | tee -a run.sh > /dev/null
}
firstArg() {
  echo "$1"
}
secondArg() {
  echo "$2"
}
loadVariable() {
  val=$(echo "$1" | sed 's/=/ /g')
  keyalias=$(firstArg $val)
  val=$(secondArg $val)

  if [ -z "$val" ]; then
    var=$(echo "$1" | sed 's/:/ /g')
    key=$(firstArg $var)
    keyalias=$key
    sec=$(secondArg $var)
    if [ -n "$sec" ]; then
      keyalias=$sec
    fi
    val=$(curl -s "$APIURL/$key" | jq "$2?" -)
  fi
  if [ -n "$val" ]; then
    echo "export $keyalias=$val" | tee -a .env
    printLn "export $keyalias=$val"
  else
    echo "$keyalias=null"
  fi
}
printLn "#!/bin/sh"
i=0
echo "Variables:"3
echo "----"
for var in "$@"; do
  if [ $i -gt 0 ]; then
    loadVariable "$var" "$1"
  fi
  i=$((i+1))
done
echo "----"
printLn "\$1"


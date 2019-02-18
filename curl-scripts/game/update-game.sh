curl --include https://tic-tac-toe-wdi.herokuapp.com/games/${ID} \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
            "game": {
              "cell": {
                "index": "'${INDEX}'",
                "value": "'${VALUE}'"
              },
              "over": "'${OVER}'"
            }
          }'


echo

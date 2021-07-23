$strings=@("*node_modules","*.zip")

get-childitem -Include ($strings) -Recurse -force | Remove-Item -Force -Recurse
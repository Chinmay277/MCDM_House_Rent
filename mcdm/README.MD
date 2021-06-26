#change path in environment.yml file
#just changing username is also sufficient

#if want to change name of environmnet change name in environment.yml
#then run bellow command in conda prompt
command : conda env create -f environment.yml

#after create property databse
create databse property;

#move to server in command line
#cd path/to/folder/to/server/

#run command
#python manage.py makemigrations
#python manage.py migrate
(before running next command execute the new.msql, means fill the property table)
#python manage.py runserver

#api is available
#if facing any problem join on team viewer or any other app
#I will setup environment

#api

#1 get_data (post request) empty
#2 get_ranked_data (post request)
(body ->
param(optional) all="all"(it want complete database),
param(compulsary) type=[[e11, e12], [e21, e22]] #first element is type in table, second is preference (high prefeence get low number)
(param(optinal) rent_min, rent_max, deposit_min, deposit_max, floor_min, floor_max -> all numbers)
)
#3 execute (post request) (body -> query="your sql query")

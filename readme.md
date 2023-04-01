# accesso a shell de mongo
docker exec -it mongo bash

# crear usuario en mongo 
# Start MongoDB without access control.
    mongod --port 27017 --dbpath /data/db1
# Connect to the instance.
    mongosh --port 27017
# Create the user administrator.
    use admin
    db.createUser(
        {
            user: "rodrigo",
            pwd: passwordPrompt(), // or cleartext password
            roles: [ 
            { role: "userAdminAnyDatabase", db: "admin" },
            { role: "readWriteAnyDatabase", db: "admin" } 
            ]
        }
    )

# Create the password.
# Back to docker shell and Re-start the MongoDB instance with access control.
    mongod --auth --port 27017 --dbpath /data/db1
# AUTHENTICATE.
    mongosh --port 27017 --authenticationDatabase "admin"\
        -u "rodrigo" -p 
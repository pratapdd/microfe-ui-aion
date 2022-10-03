## Instructions for manual deployment

First clone the project and start from the root directory.

### 3. start all the child microservices projects

### ui-bloom-module

-microfe-ui/> cd APP-pkgs/ui-bloom-module/
-microfe-ui/> yarn && yarn start

Verification step: This will start nodejs server at port 8081. one can verify by accessing graphql endpoint
http://localhost:8081

### ui-workstation-module

-microfe-ui/> cd APP-pkgs/ui-workstation-module/
-microfe-ui/> yarn && yarn start

Verification step: This will start nodejs server at port 8082. one can verify by accessing graphql endpoint
http://localhost:8082

### ui-vuejs-module

This is vue js demo project
-microfe-ui/> cd APP-pkgs/ui-vuejs-module/
-microfe-ui/> yarn && yarn start

Verification step: This will start nodejs server at port 8083. one can verify by accessing graphql endpoint
http://localhost:8083

### Now lets start the main APP

### ui-container-app

-microfe-ui/> cd APP-pkgs/ui-container-module/
-microfe-ui/> yarn && yarn start

Verification: This will start nodejs server at port 8080. one can verify by accessing graphql endpoint
http://localhost:8080

kubectl run mongodb --labels="app=mongodb" --image arm64v8/mongo --env="MONGO_INITDB_ROOT_USERNAME=root" --env="MONGO_INITDB_ROOT_PASSWORD=Incubator2024" --env="MONGO_INITDB_DATABASE=mongo"
kubectl create service clusterip mongodb --tcp=27017:27017
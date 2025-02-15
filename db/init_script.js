
// db.createUser({
//   user: "admin",
//   pwd: "password",
//   roles: [{ role: "readWrite", db: "platformsdb" }],
// });
db = db.getSiblingDB("platformsdb");
db.createCollection("platforms");
db.platforms.insertMany([
  {
    name: "openshift",
    codedetail: {
      usecase: "Container platform",
      rank: 12,
      homepage: "https://openshift.com",
      download:
        "https://developers.redhat.com/products/codeready-containers/overview",
      votes: 0,
    },
  },
  {
    name: "kubernetes",
    codedetail: {
      usecase: "Container orchestration platform ",
      rank: 38,
      homepage: "https://kubernetes.com",
      download: "https://kubernetes.io/docs/tasks/tools/install-minikube/",
      votes: 0,
    },
  },
  {
    name: "rancher",
    codedetail: {
      usecase: "Container platform management ",
      rank: 50,
      homepage: "https://rancher.com/",
      download: "https://github.com/rancher/rancher",
      votes: 0,
    },
  },
]);

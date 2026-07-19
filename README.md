## Container Orchestration with Docker Swarm

> **Objective:** Learn how Docker Swarm manages multiple containers automatically, enabling high availability, scalability, and zero-downtime deployments.

---

# 📖 Assignment Overview

Imagine our company has a web application.
Initially, only a few users visit the website, so a single container is enough.

```text
          Users
            │
            ▼
    ┌─────────────────┐
    │  Web Container  │
    └─────────────────┘
```

As our application becomes popular, thousands of users begin accessing it simultaneously, A single container can no longer handle all the traffic.
Instead of running just one container, you deploy multiple copies (replicas).

```text
                 Users
                   │
                   ▼
          ┌────────────────┐
          │ Docker Swarm   │
          └────────────────┘
          │      │      │
          ▼      ▼      ▼
     Container1 Container2 Container3
```

Docker Swarm automatically distributes incoming traffic among all containers, ensuring that no single container becomes overloaded.

---

# 🎯 What is Container Orchestration?

Container orchestration is the automated management of containerized applications.
Instead of manually starting, stopping, monitoring, and scaling containers, an orchestration platform performs these tasks automatically.

 Docker Swarm Features:

| Feature | Description |
|----------|-------------|
| 🚀 Service Deployment | Deploy applications as services |
| 📈 Scaling | Increase or decrease replicas |
| ⚖️ Load Balancing | Distribute traffic across containers |
| 🔄 Auto Healing | Replace failed containers automatically |
| 🌐 Overlay Network | Enable communication between containers |
| 🔁 Rolling Updates | Deploy new versions without downtime |
| 💻 High Availability | Keep applications running continuously |


---

# 🤔 Why Docker Swarm?

Without Docker Swarm, you would manually execute:

```bash
docker run ...
docker run ...
docker run ...
```

Managing three containers may be simple.

But imagine managing **100 containers**.
Keeping track of:
- Running containers
- Failed containers
- Scaling
- Updates
- Networking
becomes difficult.

Docker Swarm automates these tasks.
It is Docker's built-in container orchestration platform.

> **Note:** Kubernetes is more powerful and widely used in enterprise environments, but Docker Swarm is significantly easier for beginners to understand.

---

# 📚 What Will You Learn?

This assignment introduces production-level deployment concepts.

Instead of:

```bash
docker run
```

you will use:

```bash
docker service create
```

Instead of running:

```
1 Container
```

you will deploy:

```
5 Replicas
```

Instead of manually restarting failed containers:

```text
Container crashes ❌

↓

Docker Swarm detects failure

↓

Automatically creates a replacement

↓

Application remains available
```


# 🛠️ Assignment Roadmap

---

## 📌 Part 1 — Build the Application

Create a simple **Node.js** web application.

### Tasks

- Create a Node.js web server
- Display the container hostname
- Create a Dockerfile
- Build the Docker image
- Test the application locally

---

## 📌 Part 2 — Deploy Using Docker Swarm

Initialize Docker Swarm and deploy application as a service.

### Tasks

- Initialize Docker Swarm
- Create an Overlay Network
- Deploy the service
- Verify **3 replicas** are running

---

## 📌 Part 3 — Scaling

Learn how Docker Swarm scales services.

### Tasks

- Scale the service from **3** to **5 replicas**
- Verify the updated replica count
- Explain how Docker Swarm distributes traffic

---

## 📌 Part 4 — Auto Healing

Understand Docker Swarm's self-healing capability.

### Tasks

- Manually stop or remove one running container
- Observe Docker Swarm automatically creating a replacement
- Verify the desired replica count is restored

---

## 📌 Part 5 — Rolling Update

Deploy a new version of the application without downtime.

### Tasks

- Modify the application
- Build a new Docker image
- Perform a rolling update
- Verify zero-downtime deployment

---


# 🏦 Docker Swarm Banking Portal

A production-style banking portal deployed using **Docker Swarm** to demonstrate container orchestration concepts such as service deployment, replicas, load balancing, rolling updates, and self-healing.

This project was created as a DevOps learning project to understand how Docker Swarm manages containerized applications in a production environment.

---

# 📌 Project Overview

ABC Bank wants to deploy its customer portal with high availability.

Instead of running a single Docker container, the application is deployed as a **Docker Swarm Service** with multiple replicas.

Docker Swarm automatically:

- Deploys multiple containers
- Distributes incoming requests
- Performs load balancing
- Recreates failed containers
- Supports rolling updates without downtime

---

# 🏗️ Architecture

```
                Client Browser
                       │
                       ▼
             Docker Swarm Service
                  (bank-web)
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   Replica 1      Replica 2      Replica 3
(Container A)  (Container B)  (Container C)
        │              │              │
        └──────────────┼──────────────┘
                       │
               Docker Overlay Network
```

---

# 🚀 Features

- Node.js + Express application
- EJS Template Engine
- Dockerized application
- Docker Swarm deployment
- Multiple replicas
- Overlay networking
- Request counter
- Container information
- Rolling updates
- Auto-healing
- Health endpoint

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Backend |
| Express.js | Web Framework |
| EJS | Template Engine |
| Docker | Containerization |
| Docker Swarm | Container Orchestration |
| HTML | User Interface |
| CSS | Styling |

---

# 📂 Project Structure

```
docker-swarm-banking-demo/

│
├── bank-portal/
│   ├── public/
│   │   └── style.css
│   │
│   ├── views/
│   │   └── index.ejs
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── screenshots/
│
└── README.md
```

---

# ⚙️ Build Docker Image

```bash
docker build -t bank-portal:v1 .
```

---

# 🐳 Initialize Docker Swarm

```bash
docker swarm init
```

---

# 🌐 Create Overlay Network

```bash
docker network create \
--driver overlay \
bank-network
```

---

# 🚀 Deploy the Service

```bash
docker service create \
--name bank-web \
--network bank-network \
--publish 8080:8080 \
--replicas 3 \
--env NODE_ENV=Production \
--env APP_VERSION=v1.0 \
--env SERVICE_NAME=bank-web \
bank-portal:v1
```

---

# 🔍 Verify Service

List services

```bash
docker service ls
```

List tasks

```bash
docker service ps bank-web
```

List containers

```bash
docker ps
```

---

# 📈 Scale the Application

Increase replicas

```bash
docker service scale bank-web=5
```

Decrease replicas

```bash
docker service scale bank-web=2
```

Docker Swarm automatically creates or removes containers.

---

# 🔄 Rolling Update

Build a new image

```bash
docker build -t bank-portal:v2 .
```

Update service

```bash
docker service update \
--image bank-portal:v2 \
bank-web
```

Docker updates containers one by one without downtime.

---

# ❤️ Health Check

The application exposes a health endpoint.

```
/health
```

Response

```
Healthy
```

---

# 🔁 Auto Healing

If a container is deleted manually

```bash
docker rm -f <container-id>
```

Docker Swarm automatically starts a new replica to maintain the desired state.

---

# 📊 Application Dashboard

The application displays:

- Customer Information
- Account Details
- Recent Transactions
- Deployment Environment
- Application Version
- Service Name
- Container Hostname
- Container ID
- Request Counter
- Started Time
- Health Status

Refreshing the browser displays requests being served by different replicas, demonstrating Docker Swarm load balancing.

---

# 📷 Screenshots

## Banking Portal

_Add screenshot here_

---

## Docker Service

_Add screenshot here_

---

## Docker Swarm Nodes

_Add screenshot here_

---

## Rolling Update

_Add screenshot here_

---

## Auto Healing

_Add screenshot here_

---

# 💡 Docker Swarm Concepts Demonstrated

- Docker Image
- Docker Container
- Docker Swarm
- Manager Node
- Services
- Replicas
- Overlay Network
- Load Balancing
- Rolling Updates
- Desired State
- Self-Healing

---

# 🌍 Real-World Use Case

A banking application cannot depend on a single server.

If one server fails:

- Customers should still access the application.
- New containers should start automatically.
- Deployments should happen without downtime.

Docker Swarm provides these capabilities by maintaining the desired number of replicas and distributing traffic across healthy containers.

---

# 📚 What I Learned

- Building Docker images
- Creating Docker containers
- Initializing Docker Swarm
- Deploying replicated services
- Creating overlay networks
- Scaling services
- Performing rolling updates
- Implementing self-healing
- Understanding routing mesh
- Managing environment variables in Docker

---



# 👨‍💻 Author

**Arun A**


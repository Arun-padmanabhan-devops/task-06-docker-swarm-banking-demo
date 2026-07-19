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
- Routing Mesh
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

# 🚀 Future Improvements

- Add Redis
- Add MySQL/PostgreSQL
- Deploy on multiple Swarm nodes
- Add Nginx Reverse Proxy
- Add Prometheus & Grafana Monitoring
- Deploy using GitHub Actions CI/CD

---

# 👨‍💻 Author

**Arun A**


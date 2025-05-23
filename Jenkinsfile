pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_DIR = "${WORKSPACE}"
        GITHUB_REPO = "https://github.com/FrozenEnigma51051/Connect_Aid.git"
        BRANCH_NAME = "main"
    }

    triggers {
        githubPush()
    }

    options {
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the latest code from GitHub...'
                git branch: "${BRANCH_NAME}", url: "${GITHUB_REPO}"
            }
        }

        stage('Stop Existing Containers') {
            steps {
                echo 'Stopping any existing containers...'
                catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
                    sh 'docker-compose down --volumes --remove-orphans'
                }
            }
        }

        stage('Clean Up Docker') {
            steps {
                echo 'Performing thorough Docker cleanup to free disk space...'
                catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
                    sh '''
                    # Remove all stopped containers
                    docker container prune -f
                    
                    # Remove unused images
                    docker image prune -a -f
                    
                    # Remove unused volumes
                    docker volume prune -f
                    
                    # Remove unused networks
                    docker network prune -f
                    
                    # System prune as a final measure
                    docker system prune -f
                    
                    # Check available disk space
                    df -h
                    '''
                }
            }
        }

        stage('Prepare .env File') {
            steps {
                echo 'Creating .env file for backend...'
                writeFile file: 'backEnd/.env', text: '''
MONGO_URI=mongodb+srv://root:12345@connectaid-cluster.yv9ci.mongodb.net/?retryWrites=true&w=majority&appName=ConnectAid-Cluster
PORT=5000
JWT_SECRET=ConnectAid_SecureJWT_Key_2024_!@#$
'''
            }
        }

        stage('Build and Start Containers') {
            steps {
                echo 'Building and starting the updated stack...'
                sh 'docker-compose up -d --build'
            }
        }

        stage('Wait for Services') {
            steps {
                echo 'Waiting for services to be fully operational...'
                sleep(time: 30, unit: 'SECONDS')
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Verifying the deployment...'
                sh 'docker-compose ps'
                sh '''
                if ! curl -fs http://localhost:80; then
                    echo "App not responding"
                    exit 1
                fi
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully. The web application is now running.'
        }
        failure {
            echo 'Pipeline execution failed. Cleaning up...'
            catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                sh 'docker-compose down --volumes --remove-orphans'
            }
        }
        always {
            echo 'Pipeline execution completed.'
        }
    }
}
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub
                git 'https://github.com/cheysaandta/node-ci-cd.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Build your project (optional)
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy to staging or production
                echo 'Deploying to server...'
            }
        }
    }

    post {
        always {
            echo 'This will always run after the pipeline finishes.'
        }
        success {
            echo 'This will run only if the pipeline is successful.'
        }
        failure {
            echo 'This will run only if the pipeline fails.'
        }
    }
}

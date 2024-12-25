pipeline {
    agent any
    environment {
        PATH = "/usr/local/bin/node"  
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/cheysaandta/node-ci-cd.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm run deploy'
            }
        }
    }
    post {
        always {
            echo 'This will always run after the pipeline finishes.'
        }
        failure {
            echo 'This will run only if the pipeline fails.'
        }
    }
}

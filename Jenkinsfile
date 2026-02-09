pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
    REGISTRY = 'ghcr.io'
    IMAGE_NAME = 'patient-portal'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
        sh 'npm run format -- --check'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Docker Build & Push') {
      steps {
        script {
          dockerImage = docker.build("${REGISTRY}/${IMAGE_NAME}:${env.BUILD_NUMBER}")
          docker.withRegistry("https://${REGISTRY}", 'github-docker-credentials') {
            dockerImage.push()
          }
        }
      }
    }
  }

  post {
    always {
      cleanWs()
    }
    failure {
      echo 'Build failed!'
    }
    success {
      echo 'Build succeeded!'
    }
  }
}

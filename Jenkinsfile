pipeline {
  agent any
  environment {
    APP_DIR = "/opt/stackly/Stackly_AI"
    DEPLOY_USER = "stackly"
    DEPLOY_HOST = "172.31.19.252"   // you can replace with param or Jenkins credential
    SSH_CRED = "ec2-deploy-key"           // credential id in Jenkins
  }
  stages {
    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/main']],
          userRemoteConfigs: [[url: 'https://github.com/pavanmarulappa/Stackly_AI.git']]])
      }
    }

    stage('Build Frontend (if any)') {
      when { expression { fileExists('package.json') } }
      steps {
        sh '''
          echo "Building frontend..."
          npm ci || true
          npm run build || true
        '''
      }
    }

    stage('Prepare Artifact') {
      steps {
        sh 'tar -czf stackly_build.tar.gz .'
        archiveArtifacts artifacts: 'stackly_build.tar.gz', fingerprint: true
      }
    }

    stage('Deploy to EC2') {
      steps {
        sshagent (credentials: [env.SSH_CRED]) {
          // create app dir, pull, install, migrate, etc.
          sh """
            ssh -o StrictHostKeyChecking=no ${env.DEPLOY_USER}@${env.DEPLOY_HOST} '
              set -e
              sudo systemctl stop stackly || true
              mkdir -p ${env.APP_DIR}
              # a simple deployment: remove old, clone fresh
              rm -rf /tmp/stackly_deploy && mkdir -p /tmp/stackly_deploy
            '
          """
          // copy tarball to remote
          sh """
            scp -o StrictHostKeyChecking=no stackly_build.tar.gz ${env.DEPLOY_USER}@${env.DEPLOY_HOST}:/tmp/stackly_build.tar.gz
            ssh -o StrictHostKeyChecking=no ${env.DEPLOY_USER}@${env.DEPLOY_HOST} '
              set -e
              cd /opt/stackly
              rm -rf repo && mkdir -p repo
              tar -xzf /tmp/stackly_build.tar.gz -C repo
              cd repo
              python3 -m venv venv
              source venv/bin/activate
              pip install --upgrade pip
              if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
              # migrations & static
              python manage.py migrate --noinput || true
              python manage.py collectstatic --noinput || true
              # restart service
              sudo systemctl daemon-reload
              sudo systemctl start stackly
            '
          """
        }
      }
    }
  }

  post {
    success { echo "Deployed successfully to ${env.DEPLOY_HOST}" }
    failure { echo "Deployment failed" }
  }
}

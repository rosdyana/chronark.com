pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      parallel {
        stage('Install Dependencies') {
          steps {
            sh 'npm install'
          }
        }

        stage('Start Notification') {
          steps {
            mail(subject: 'Start Job', body: 'Job $JOB_ID has started', from: 'admin@asus.com', replyTo: 'admin@asus.com', to: 'rosdyana_kusuma@asus.com')
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Archive') {
      steps {
        archiveArtifacts(onlyIfSuccessful: true, artifacts: '**')
      }
    }

    stage('Notification') {
      steps {
        mail(subject: 'Finish', body: 'Job has done', from: 'admin@asus.com', replyTo: 'admin@asus.com', to: 'rosdyana_kusuma@asus.com')
      }
    }

  }
}
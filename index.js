const core = require('@actions/core');

async function run() {
  try {
    const ref = process.env.GITHUB_REF;

    let env = '';
    const data = ref.match(/(?<=\/)[\w\.-]+/g);
    if (data[0] == 'tags') {
      const version = data[1];

      env = version.match(/(?<=-)\w+/g);
      if (env == null) {
        env = 'production';
      } else {
        env = env[0];
      }
    } else {
      if (data[1] == 'master' || data[1] == 'staging') {
        env = 'staging';
      } else {
        if (data[2] == null) {
          env = `development-${data[1]}`;
        } else {
          env = `development-${data[1]}-${data[2]}`;
        }
      }
    }

    core.setOutput('env', env);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()

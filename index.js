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
      if (data[1] == 'master') {
        env = 'staging';
      } else {
        env = 'development';
      }
    }

    core.setOutput('env', env);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()

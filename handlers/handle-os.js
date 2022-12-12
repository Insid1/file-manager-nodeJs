import {EOL, cpus, homedir, userInfo, arch} from 'os'

export default function handleOs([arg]) {
  switch (arg) {
    case '--EOL': {
      console.log(JSON.stringify(EOL));
      break;
    }
    case '--cpus': {
      console.log(cpus());
      break;
    }
    case '--homedir': {
      console.log(homedir());
      break;
    }
    case '--username': {
      console.log(userInfo().username);
      break;
    }
    case '--architecture': {
      console.log(arch());
      break;
    }
    default: {
      throw new Error();
    }
  }

}

import {ERROR_MESSAGE} from "../consts/common.js";

export default function handleCd(args) {
  const {chdir} = process;
  try {
    chdir(...args);
  } catch (err) {
    console.log(ERROR_MESSAGE)
  }
}

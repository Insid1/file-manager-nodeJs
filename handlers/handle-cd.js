export default function handleCd(args) {
  const {chdir} = process;
    chdir(...args);
}

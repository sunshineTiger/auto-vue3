const signDataInfo = (signData: any) => {
  let keys = [];
  for (const key in signData) {
    if (signData[key] !== null && signData[key] !== undefined && signData[key] !== '') {
      keys.push(key);
    }
  }
  keys = keys.sort();
  let str = '';
  for (let i = 0, n = keys.length; i < n; i++) {
    if (i !== 0) str += '&&';
    str += `${keys[i]}=${signData[keys[i]]}`;
  }
  str += import.meta.env.VITE_SING_KEY;
  // console.log('>>>>>>>>>>>>', str);
  return str;
};

export default signDataInfo;

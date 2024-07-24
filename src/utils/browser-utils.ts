const agents = ['iphone', 'ipad', 'ipod', 'android', 'linux', 'windows phone']; // 所有可能是移动端设备的字段

/**
 * 判断是否是移动端
 * @returns
 */
export const mediaType = () => {
  let mobileFlag = false;
  const ua = navigator.userAgent.toLowerCase();
  console.log('us : ' + ua);
  for (let i = 0; i < agents.length; i++) {
    if (ua.indexOf(agents[i]) !== -1) {
      mobileFlag = true;
      break;
    }
  }
  return mobileFlag;
};

/**
 * 判断是否是微信
 * @returns
 */
export const isWeChat = () => {
  return navigator.userAgent.indexOf('MicroMessenger') !== -1;
};

/**
 * 获取参数
 * @param name
 * @returns
 */
export const getQueryString = (name: string) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const search = window.location.search.split('?')[1] || '';
  const r = search.match(reg) || [];
  return r[2];
};

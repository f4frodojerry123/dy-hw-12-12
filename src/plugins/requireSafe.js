const assets = import.meta.globEager('../assets/img/**');

export const $requireSafe = (path) => {
  const getAsset = assets[`../assets/img/${path}`];

  return new URL(`../assets/img/${ getAsset ? path : 'default.svg'}`, import.meta.url).href;
};

const useRequireSafe = (app) => {
  const curApp = app;

  curApp.config.globalProperties.$requireSafe = (path) => {
    const getAsset = assets[`../assets/img/${path}`];

    return new URL(`../assets/img/${ getAsset ? path : 'default.svg'}`, import.meta.url).href;
  };
  return curApp;
};

export default useRequireSafe;

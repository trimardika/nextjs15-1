export const company = {
  initial: 'dayskun-6-mobil', // must be string without space
}

export const role = {
  super_user: {
    caption: 'Super User',
    slugLevel: 'super_user',
    localStorageIdleTimeName: 'cec1f81d9e9f2ceee329298313fe4bd5_su',
    subLevel: {
      super_user: {
        caption: 'Super User',
        slugSubLevel: 'super_user',
        slugLink: 'su',
      }
    }
  },
  owner: {
    caption: 'Owner',
    slugLevel: 'owner',
    localStorageIdleTimeName: 'c215210774d4ff7c73b87247e7d5ee74_ow',
    subLevel: {
      owner: {
        caption: 'Owner',
        slugSubLevel: 'owner',
        slugLink: 'ow',
      }
    }
  },
  admin: {
    slugLevel: 'admin',
    caption: 'Admin',
    localStorageIdleTimeName: '990466372e54d7ccf6a0dcb51c788785_ad',
    subLevel: {
      admin_kepala: {
        caption: 'Head Admin',
        slugSubLevel: 'admin_head',
        slugLink: 'adm-head',
      },
      admin_staf: {
        caption: 'Staf Admin',
        slugSubLevel: 'admin_staf',
        slugLink: 'adm-stf',
      }
    }
  },
}

export const utils = {
  dev: {
    // ip: '10.128.126.163',
    ip: 'https://veccani.com/nextjs15.1/api',
    port: '3899',
  },
  metaData: {
    title: 'ABCD',
    desc: 'EFGH'
  },
  cookieName: {
    login: 'loginCookie'
  },
  localStorageName: {
    // theme: `theme-app-${brand.initial}`,
    // fluid: `fluid-app-${brand.initial}`,
    login: `login-app-${company.initial}`,
    loginSU: `login-su-app-${company.initial}`,
    // displayMode: `display-mode-app-${brand.initial}`,
    // navBarState: `navbar-state-app-${brand.initial}`,
  }
}
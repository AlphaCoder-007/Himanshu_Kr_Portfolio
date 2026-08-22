import { useState, useEffect } from 'react';

interface SiteConfig {
  gitURL: string;
  linkedInURL: string;
}

const defaultConfig: SiteConfig = {
  gitURL: '#',
  linkedInURL: '#',
};

export function useSiteConfig(): SiteConfig {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);

  useEffect(() => {
    let cancelled = false;
    fetch('/config.json')
      .then((res) => res.json())
      .then((data: SiteConfig) => {
        if (!cancelled) {
          setConfig({
            gitURL: data.gitURL || defaultConfig.gitURL,
            linkedInURL: data.linkedInURL || defaultConfig.linkedInURL,
          });
        }
      })
      .catch(() => {
        // fallback to defaults on error
      });
    return () => { cancelled = true; };
  }, []);

  return config;
}

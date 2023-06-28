import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="chivincent/chivincent.net"
      repoId="MDEwOlJlcG9zaXRvcnkzOTg2MjE2ODk="
      category="General"
      categoryId="DIC_kwDOF8J7-c4B-w7l"
      mapping="url"
      term="Welcome to @giscus/react component!"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={colorMode}
      lang="zh-TW"
      loading="lazy"
    />
  );
}
import React from 'react';

export default function Hero({ config }) {
  const fullscreenImage = config.heroFullscreenImage;
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Fullscreen frame background - sumber dari pengaturan (upload) */}
      <img
        src={fullscreenImage}
        alt={`${config.bride?.nickname || config.bride?.name || ''} & ${config.groom?.nickname || config.groom?.name || ''}`}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

    </section>
  );
}

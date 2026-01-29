"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Autoplay,
  EffectFade,
} from "swiper/modules";

export function useColumnAutoSwiper() {
  useEffect(() => {
    const containers =
      document.querySelectorAll<HTMLElement>(".swiper-column-auto");

    containers.forEach((container, index) => {
      const uniqueClass = `swiper-column-auto-id-${index}`;
      container.classList.add(uniqueClass);

      const config = {
        loop: container.classList.contains("swiper-loop"),
        touchMove: container.classList.contains("allow-touchMove"),
        mouseWheel: container.classList.contains("allow-mouseWheel")
          ? { forceToAxis: true }
          : false,
        autoHeight: container.classList.contains("auto-height"),
        progressbar: container.classList.contains("progressbar"),
        time:
          Number(container.getAttribute("data-time")) || 3000,
        autoplay: container.classList.contains("autoplay"),
        effect: container.classList.contains("effect-fade"),
      };

      const swiperEl =
        container.querySelector<HTMLElement>(".swiper");
      if (!swiperEl) return;

      new Swiper(swiperEl, {
        modules: [
          Navigation,
          Pagination,
          Mousewheel,
          Autoplay,
          EffectFade,
        ],

        speed: 600,
        observer: true,
        observeParents: true,
        spaceBetween: 0,

        loop: config.loop,
        effect: config.effect ? "fade" : "slide",
        slidesPerView: config.effect ? 1 : "auto",

        autoplay: config.autoplay
          ? { delay: config.time }
          : false,

        pagination: {
          el: `.${uniqueClass} .swiper-pagination`,
          clickable: true,
          ...(config.progressbar && {
            type: "progressbar",
          }),
        },

        mousewheel: config.mouseWheel,
        allowTouchMove: config.touchMove,

        navigation: {
          prevEl: `.${uniqueClass} .btn-prev`,
          nextEl: `.${uniqueClass} .btn-next`,
        },

        watchSlidesProgress: true,
        autoHeight: config.autoHeight,
      });
    });
  }, []);
}

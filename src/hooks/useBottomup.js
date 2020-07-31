const { useSpring } = require("react-spring");

export const useBottomup = (delay, str) => {
  return useSpring({
    from: { transform: `translateY(0vh)` },
    to: async (next) => {
      while (1) {
        await next({ transform: `translateY(-${str})` });
        await next({ transform: `translateY(0vh)` });
      }
    },
    config: {
      duration: 10000,
    },
    delay: delay,
  });
};

const { useSpring } = require("react-spring");

export const useTopdown = (delay, str) => {
  const props = useSpring({
    from: { transform: `translateY(0vh)` },
    to: async (next) => {
      while (1) {
        await next({ transform: `translateY(${str})` });
        await next({ transform: `translateY(0vh)` });
      }
    },
    delay: delay,
    config: { mass: 1, tension: 130, friction: 240 },
  });

  return props;
};

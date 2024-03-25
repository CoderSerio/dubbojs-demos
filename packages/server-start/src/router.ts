import { DubboRouter } from "@apachedubbo/dubbo";
import { MyService } from "../../common/gen/example_dubbo";

export default (router: DubboRouter) => {
  router.service(
    MyService,
    {
      async say(req) {
        return {
          sentence: `Server say: ${req.sentence}`,
        };
      },
    },
    { serviceGroup: "dubbo", serviceVersion: "1.0.0" }
  );
};

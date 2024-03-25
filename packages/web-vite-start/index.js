import { createPromiseClient } from "@apachedubbo/dubbo";
import { createDubboTransport } from "@apachedubbo/dubbo-web";
import { MyService } from "../common/gen/example_dubbo";

const transport = createDubboTransport({
  baseUrl: "http://localhost:8000",
  httpVersion: "1.1",
});

const client = createPromiseClient(MyService, transport, {
  serviceGroup: "dubbo",
  serviceVersion: "1.0.0",
});

const say = async (sentence) => {
  const res = await client.say({ sentence });
  console.log(res);
};

const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", () => {
  say("Hello DubboJS");
});

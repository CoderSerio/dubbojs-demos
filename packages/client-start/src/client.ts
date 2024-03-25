import { createPromiseClient } from "@apachedubbo/dubbo";
import { createDubboTransport } from "@apachedubbo/dubbo-node";
import { MyService } from "../../common/gen/example_dubbo";

const transport = createDubboTransport({
  baseUrl: "http://localhost:8000",
  httpVersion: "1.1",
});

const main = async () => {
  const client = createPromiseClient(MyService, transport, {
    serviceGroup: "dubbo",
    serviceVersion: "1.0.0",
  });
  const res = await client.say({ sentence: "Hello World" });
  console.log(res.sentence);
};

main();

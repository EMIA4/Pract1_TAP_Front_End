import { JSONRPCClient } from "json-rpc-2.0";

// JSONRPCClient needs to know how to send a JSON-RPC request.
// Tell it by passing a function to its constructor. The function must take a JSON-RPC request and send it.
export const client = new JSONRPCClient((jsonRPCRequest) =>
    fetch("http://localhost:8081/jsonrpc", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(jsonRPCRequest),
    }).then((response) => {
        //console.log(jsonRPCRequest);
        if (response.status === 200) {
            // Use client.receive when you received a JSON-RPC response.
            return response
                .json()
                .then((jsonRPCResponse) => client.receive(jsonRPCResponse));
        }else if (jsonRPCRequest.id !== undefined) {
            return Promise.reject(new Error(response.statusText));
        } 
    })
);


// Use client.request to make a JSON-RPC request call.
// The function returns a promise of the result.
client
    .request("spawnActor", ["Lara","InsultActor"])
    .then((result) => console.log(result));

client
    .request("getNames", [])
    .then((result) => console.log(result));
    client
    .request("monitorActor", ["Lara"])
    .then((result) => console.log(result));

/*client
    .request("monitorActor", ["Lara"])
    .then((result) => console.log(result));

client
    .request("spawnActor", ["Angel","HelloWorldActor"])
    .then((result) => console.log(result));

client
    .request("getNames", [])
    .then((result) => console.log(result));
    */

// Use client.notify to make a JSON-RPC notification call.
// By definition, JSON-RPC notification does not respond.
//client.notify("log",[], {});

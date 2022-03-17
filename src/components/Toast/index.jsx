import React from "react";
import { Button, useToasts } from "@geist-ui/core";

export default function ToastExample() {
  const {toast, setToast} = useToasts();

  // const click = () => {
  //   setToast({ text: "Lorem ipsum", type: "success" });
  // };

  const action = {
    // name: 'alert',
    name: 'cancel',
    // handler: () => alert('alert from toast'),
    handler: (event, cancel) => cancel(),
    passive: true
  }
  const click = () => setToast({
    text: 'HTTP is stateless, but not sessionless.',
    actions: [action],
  })

  return <Button scale={2/3} auto onClick={click} type="secondary">Show Action</Button>
  // return (<Button onClick={() => click()}> Display</Button>);
}